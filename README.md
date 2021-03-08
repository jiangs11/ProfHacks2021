# ProfHacks2021
Rowan University 6th Annual 24-hour Hackathon

## Neural Style Transfer
Neural style transfer is an optimization technique used to take two images - a content image and a style reference image (such as an artwork by a famous painter) and blend them together so the output image looks like the content image, but “painted” in the style of the style reference image.

## Instance Segmentation
Instance segmentation aka Image Segmentation is when you want to know where an object is located in the image, the shape of that object, which pixel belongs to which object, etc. In this case, we wanted to segment the image, i.e., each pixel of the image is given a label. Thus, the task of image segmentation is to train a neural network to output a pixel-wise mask of the image. This helps in understanding the image at a much lower level, i.e., the pixel level.

## Our Project
We combined these two techniques which is illustrated in the figure below. We first extract the mask of the object in an image by using image segmentation. We then pass that mask to the style transfer network to make the specific area more "fancy". Finally, to make the image more like a piece of art, we applied a different style transfer to the inverse of the mask (so whatever the image segmentation network didn't classify as the main object in the image).

![GitHub Logo](https://github.com/jiangs11/ProfHacks2021/blob/website/src/images/structure.png)

Example Output:

![GitHub Logo](https://github.com/jiangs11/ProfHacks2021/blob/website/src/images/results/birb.png)

## Website Link: [https://jiangs11.github.io/ProfHacks2021/](https://jiangs11.github.io/ProfHacks2021/)
NOTE: Our Flask backend is only hosted locally, therefore you are unable to generate the styled images just yet. In the future, this will be hosted. If you would like to run the Flask app on your own machine, please follow the instructions in the next section. Meanwhile, you can check out our favorite styled images in the "Our Favorite Styles Gallery" tab of the website.

### Run Flask app on your machine
1. Make sure Python 3 is installed.
2. Run "pip install -r requirements.txt" to install all the necessary dependencies.
3. Run "python start.py" to get local Flask server running.
4. Open website and now you are able to generate the styled images!

## Contributors
- Matthew Schofield
- Steven Jiang
- Alex Lam
