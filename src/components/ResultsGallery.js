import React from 'react'
import {
    Image 
} from 'react-bootstrap'
import image101 from '../images/results/101.png'
import image107 from '../images/results/107.png'
import image274 from '../images/results/274.png'
import image370 from '../images/results/370.png'
import image412 from '../images/results/412.png'
import image436 from '../images/results/436.png'
import image504 from '../images/results/504.png'
import image506 from '../images/results/506.png'
import imageBear13 from '../images/results/bear_13.png'
import imageBear14 from '../images/results/bear_14.png'
import imageBear70 from '../images/results/bear_70.png'
import imageBirb from '../images/results/birb.png'

export default function ResultsGallery() {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
            <div>
                <Image src={image101} rounded />
                <Image src={image107} rounded />
            </div>
            <div>
                <Image src={image274} rounded />
                <Image src={image370} rounded />
            </div>
            <div>
                <Image src={image412} rounded />
                <Image src={image436} rounded />
            </div>
            <div>
                <Image src={image504} rounded />
                <Image src={image506} rounded />
            </div>
            <div>
                <Image src={imageBear13} rounded />
                <Image src={imageBear14} rounded />
            </div>
            <div>
                <Image src={imageBear70} rounded />
                <Image src={imageBirb} rounded />
            </div>
        </div>
    )
}
