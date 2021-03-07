import React, { useState, useContext } from 'react'
import { StoreContext } from './../context/Store'
import axios from 'axios'
import { Button, Spinner } from 'react-bootstrap'

export default function StyleButton() {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false) 

    const { 
        endpoint, contentImages, styleImages, 
        contentActiveIndex, style1ActiveIndex, style2ActiveIndex,
        setBothStyles, setStyles1, setStyles2
    } = useContext(StoreContext)

    const styleInBackend = async () => {
        setLoading(true)

        const contentImagePath = contentImages[contentActiveIndex].substring(1)
        const style1ImagePath = styleImages[style1ActiveIndex].substring(1)
        const style2ImagePath = styleImages[style2ActiveIndex].substring(1)

        try {
            const response = await axios.post(endpoint, {
                content: contentImagePath,
                style_1: style1ImagePath,
                style_2: style2ImagePath
            })

            const { both, styled1, styled2 } = response.data
            setBothStyles(both)
            setStyles1(styled1)
            setStyles2(styled2)
        } catch (error) {
            console.log('ERROR: ', error)
            setError(true)
        }
        setLoading(false)
    }

    return (
        <div>
            {error ? 
                <Button 
                    variant="danger" 
                    style={{width: '20%'}}
                >
                    Server is Down :(
                </Button>
                :
                null
            }
            {isLoading ?
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Processing...
                </Button>
                :
                <Button 
                    variant="dark" 
                    onClick={() => styleInBackend()} 
                    style={{width: '20%'}}
                >
                    Style!
                </Button>
            }
        </div>
    )
}
