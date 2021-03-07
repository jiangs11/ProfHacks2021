"""
Style Transferer object

Based on:
    https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/tf2_arbitrary_image_stylization.ipynb

:author: Matthew Schofield
:version 3.6.2021
"""

import tensorflow as tf
import tensorflow_hub as hub

class Style_Transfer:
    '''
    Object to manage transfering style
    '''

    def __init__(self):
        hub_handle = 'https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2'
        self.hub_module = hub.load(hub_handle)

    def style_transfer(self, content_image, style_image):
        '''
        Merge the style of a content and style image

        :param content_image: base image to style
        :param style_image: style to apply
        :return: styled image
        '''
        # Set-up style image
        styled_image = tf.nn.avg_pool(style_image, ksize=[3, 3], strides=[1, 1], padding='SAME')
        # Style
        outputs = self.hub_module(tf.constant(content_image), tf.constant(styled_image))
        # Get output
        stylized_image = outputs[0]
        return stylized_image
