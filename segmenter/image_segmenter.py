"""
Based on:
    https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/images/segmentation.ipynb

:author: Steven Jiang, Matthew Schofield
:version 3.6.2021
"""

import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np

class Image_Segmentor:

    def __init__(self, path_to_model="model_192"):
        '''
        Set-up for segmentation

        :param path_to_model: Model to use for segmentation
        '''
        self.model = tf.keras.models.load_model(path_to_model)

    def normalize(self, input_image):
        '''
        Normalize input image

        :param input_image: image to normalize
        :return: normalized image
        '''
        input_image = tf.cast(input_image, tf.float32) / 255.0
        return input_image

    def create_mask(self, pred_mask):
        '''
        Build mask from predictation

        :param pred_mask: input prediction to build from
        :return: predicted mask
        '''
        pred_mask = tf.argmax(pred_mask, axis=-1)
        pred_mask = pred_mask[..., tf.newaxis]
        return pred_mask[0]


    def segment(self, image):
        '''
        Segment an image

        :param image:
        :return:
        '''
        image = tf.image.resize(image, [192, 192])
        image = image[tf.newaxis, ...]
        image = self.normalize(image)

        pred_mask = self.model.predict(image)
        pred = tf.image.resize(pred_mask, [244, 244])
        return self.create_mask(pred)
