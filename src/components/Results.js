import React, { useContext } from 'react'
import {
    Figure
} from 'react-bootstrap'
import { StoreContext } from './../context/Store'

export default function Results() {
    const baseUrl = "http://localhost:5000/static/outputs/"
    const { bothStyles, styles1, styles2 } = useContext(StoreContext)
    const imageSize = 400
    console.log(bothStyles, styles1, styles2)

    return (
        bothStyles !== "" ?
            <div style={{flexDirection: 'column', marginTop: '3%'}}>
                <Figure>             
                    <div>       
                        <Figure.Image
                            width={imageSize}
                            height={imageSize}
                            alt="imageSize"
                            src={baseUrl + styles1}
                        />
                        <p>
                            Combined original image with first style
                        </p>
                    </div>
                    <br />
                    <div>  
                        <Figure.Image
                            width={imageSize}
                            height={imageSize}
                            alt="imageSize"
                            src={baseUrl + styles2}
                        />
                        <p>
                            Combined original image with second style 
                        </p>
                    </div>  
                    <br />
                    <div>  
                        <Figure.Image
                            width={imageSize}
                            height={imageSize}
                            alt="imageSize"
                            src={baseUrl + bothStyles}
                        />
                        <p>
                            Combined original image with both styles
                        </p>
                    </div>  
                </Figure>
            </div>
            :
            null
    )
}
