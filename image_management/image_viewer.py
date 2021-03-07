from matplotlib import gridspec
import matplotlib.pylab as plt
import tensorflow as tf

'''
Manage viewing images

Based on a notebook in tensorflow

:author: Matthew Schofield
:version: 3.6.2021
'''
class Image_Viewer:

    def __init__(self):
        pass


    def display(self, display_list, filename):
        fig, axs = plt.subplots(2,3)

        title = ['Style Image', 'Style Image 2', 'Input Image', 'Styled Image', 'Styled Image 2', 'Output Image']

        for i in range(len(display_list)):
            axs[int(i/3), i%3].set_title(title[i])
            axs[int(i/3), i%3].imshow(tf.keras.preprocessing.image.array_to_img(display_list[i]))

        label=["INPUTS", "OUTPUTS"]
        for i, ax in enumerate(axs.flat):
            ax.set(ylabel=label[int(i/3)])

        for ax in axs.flat:
            ax.label_outer()

        plt.show()#savefig("outputs/" + filename + ".png")