import React from 'react'
import structure from '../images/structure.png'
import {
    Image 
} from 'react-bootstrap'

export default function About() {
    return (
        <div style={{backgroundColor: '#f5f5f5', marginTop: '5%', marginBottom: '1%'}}>
            <div class="col-md-4 offset-md-4" style={{paddingTop: '3%', paddingBottom: '1%'}}>
                <h5>ProfHacks2021 Project</h5>
                <p>This project uses deep learning to compose one image in the style of another image (ever wish you could paint like Picasso or Van Gogh?). This is known as neural style transfer.</p>
                <p>Neural style transfer is an optimization technique used to take two images - a content image and a style reference image (such as an artwork by a famous painter) and blend them together so the output image looks like the content image, but “painted” in the style of the style reference image.</p>
                <p>Additionally, we added on image segmentation which is when you want to know where an object is located in the image, the shape of that object, which pixel belongs to which object, etc. In this case, we wanted to segment the image, i.e., each pixel of the image is given a label. Thus, the task of image segmentation is to train a neural network to output a pixel-wise mask of the image. This helps in understanding the image at a much lower level, i.e., the pixel level.</p>
                <p>We combined these two techniques. We first extract the mask of the object in an image by using image segmentation. We then pass that mask to the style transfer network to make the specific area more "fancy". Finally, to make the image more like a piece of art, we applied a different style transfer to the inverse of the mask (so whatever the image segmentation network didn't classify as the main object in the image).</p>
            </div>
        </div>
    )
}
