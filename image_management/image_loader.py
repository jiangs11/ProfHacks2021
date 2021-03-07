import tensorflow as tf

class Image_Loader:

    def __init__(self):
        pass

    def load_img(self, img_path):
        max_dim = 512
        img = tf.io.read_file(img_path)
        img = tf.image.decode_image(img, channels=3)
        img = tf.image.convert_image_dtype(img, tf.float32)

        shape = tf.cast(tf.shape(img)[:-1], tf.float32)
        long_dim = max(shape)
        scale = max_dim / long_dim

        new_shape = tf.cast(shape * scale, tf.int32)

        img = tf.image.resize(img, (244, 244))
        img = img[tf.newaxis, :]
        return img