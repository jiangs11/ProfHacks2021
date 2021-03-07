'''
Script to style, segment, and recombine images

:author: Matthew Schofield, Steven Jiang
:version: 3.6.2021
'''
from image_management.image_viewer import Image_Viewer
from style_transfer.style_transfer import Style_Transfer
from image_management.image_loader import Image_Loader
from segmenter.image_segmenter import Image_Segmentor
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
import glob

# System ingo
print("TF Version: ", tf.__version__)
print("TF-Hub version: ", hub.__version__)
print("Eager mode enabled: ", tf.executing_eagerly())
print("GPU available: ", tf.test.is_gpu_available())

# Path to content images
content_images = glob.glob("image_management/content/*")
style_images = glob.glob("image_management/style/*")

# Build manager objects
image_viewer = Image_Viewer()
style_transfer = Style_Transfer()
image_loader = Image_Loader()
image_segmentor = Image_Segmentor(path_to_model="segmenter/model_192")

# Step through content and styles
for i, content_image_path in enumerate(content_images):
    for j, style_image_path in enumerate(style_images):
        for k, style_image_path2 in enumerate(style_images):
            # Get images
            print(content_image_path)
            content_image = image_loader.load_img(content_image_path)
            style_image = image_loader.load_img(style_image_path)
            style_image2 = image_loader.load_img(style_image_path2)

            mask_image = tf.keras.preprocessing.image.load_img(content_image_path)
            print(type(mask_image))

            # Transfer Style
            styled_image = style_transfer.style_transfer(content_image, style_image)
            styled_image2 = style_transfer.style_transfer(content_image, style_image2)

            # Get mask
            image = np.asarray(mask_image)
            mask = tf.dtypes.cast(image_segmentor.segment(image), tf.float32)

            # Invert mask for foreground
            # [2, 1, 0] => [1, 0, 1]
            # 2 - border
            # 0 - object
            # 1 - other
            mask = tf.add(mask, -1)
            mask = tf.multiply(mask, mask)
            fg_mask = tf.dtypes.cast(mask, tf.float32)

            # Invert foreground mask to get background mask
            bg_mask = np.ones(fg_mask.shape)
            bg_mask = tf.add(bg_mask, -fg_mask)
            bg_mask = tf.dtypes.cast(bg_mask, tf.float32)

            # Use 2nd style image as background
            bg_output = tf.multiply(bg_mask, styled_image2[0])
            # Use 1st style image as foreground
            fg_output = tf.multiply(fg_mask, styled_image[0])
            # Show images
            image_viewer.display([style_image[0], style_image2[0], content_image[0], styled_image[0], styled_image2[0], tf.add(bg_output, fg_output)],
                                    str(i) + "-" + str(j) + "-" + str(k))
