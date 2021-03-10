"""
Defines routes for main endpoints

!!! NOT SECURE DO NOT ACTUALLY HOST !!!

:author: Matthew Schofield
:version: 3.6.2021
"""
from PIL import Image
import random
import string
# Library imports
from flask import jsonify, send_file, request
from werkzeug.utils import secure_filename
import io
import cv2
import tensorflow as tf
import numpy as np
from image_management.image_loader import Image_Loader
from segmenter.image_segmenter import Image_Segmentor
from image_management.image_viewer import Image_Viewer
from style_transfer.style_transfer import Style_Transfer
import os
# Module imports
from app.routes import main_blueprint

image_viewer = Image_Viewer()
style_transfer = Style_Transfer()
image_loader = Image_Loader()
image_segmentor = Image_Segmentor(path_to_model="segmenter/model_192")

@main_blueprint.route('/create_2styles', methods=['POST'])
def create2_styles():
    '''
    Create an image using two styles


    '''
    # Check that other parameters exist
    # Check file
    content_file = request.json.get("content", None)
    if content_file is None:
        return jsonify({"message": "Missing files attachment 'content_file'"}), 400

    style_1 = request.json.get("style_1", None)
    if style_1 is None:
        return jsonify({"message": "Missing files attachment 'style_1'"}), 400

    style_2 = request.json.get("style_2", None)
    if style_2 is None:
        return jsonify({"message": "Missing files attachment 'style_2'"}), 400

    secure_filename(os.path.join("static/inputs/", content_file))
    mask_image = tf.keras.preprocessing.image.load_img(os.path.join("static/inputs/", content_file))

    # Get images
    content_image = image_loader.load_img("static/inputs/" + content_file)
    style_image = image_loader.load_img("static/inputs/" + style_1)
    style_image2 = image_loader.load_img("static/inputs/" + style_2)


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


    styled1_filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(16))
    styled1_filename += '.png'
    tf.keras.preprocessing.image.array_to_img(styled_image[0]).save("app/static/outputs/" + styled1_filename)

    styled2_filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(16))
    styled2_filename += '.png'
    tf.keras.preprocessing.image.array_to_img(styled_image2[0]).save("app/static/outputs/" + styled2_filename)

    both_filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(16))
    both_filename += '.png'
    tf.keras.preprocessing.image.array_to_img(tf.add(bg_output, fg_output)).save("app/static/outputs/" + both_filename)

    return jsonify({
        "styled1": styled1_filename,
        "styled2": styled2_filename,
        "both":both_filename
    }), 200