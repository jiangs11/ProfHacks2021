import React, { useState, useEffect, useContext } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'
import { StoreContext } from './../context/Store'  

export default function PhotoGallery({ type }) {
	const { 
		imageUrlBase, contentImages, styleImages, 
		contentActiveIndex, setContentActiveIndex, 
		style1ActiveIndex, setStyle1ActiveIndex,
		style2ActiveIndex, setStyle2ActiveIndex
	} = useContext(StoreContext)

    const [animating, setAnimating] = useState(false)
	const items = type === 'Base' ? contentImages : styleImages

	const next = () => {
        if (animating) return
		switch(type) {
			case 'Base':
				const base = contentActiveIndex === items.length - 1 ? 0 : contentActiveIndex + 1
				setContentActiveIndex(base)
				break
			case 'Style1':
				const style1 = style1ActiveIndex === items.length - 1 ? 0 : style1ActiveIndex + 1
				setStyle1ActiveIndex(style1)
				break
			case 'Style2':
				const style2 = style2ActiveIndex === items.length - 1 ? 0 : style2ActiveIndex + 1
        		setStyle2ActiveIndex(style2)
				break
		}
    } 

    const previous = () => {
        if (animating) return
		switch(type) {
			case 'Base':
				const base = contentActiveIndex === 0 ? items.length - 1 : contentActiveIndex - 1
				setContentActiveIndex(base)
				break
			case 'Style1':
				const style1 = style1ActiveIndex === 0 ? items.length - 1 : style1ActiveIndex - 1
				setStyle1ActiveIndex(style1)
				break
			case 'Style2':
				const style2 = style2ActiveIndex === 0 ? items.length - 1 : style2ActiveIndex - 1
        		setStyle2ActiveIndex(style2)
				break
		}
    }

    const goToIndex = (newIndex) => {
        if (animating) return
		switch(type) {
			case 'Base':
				setContentActiveIndex(newIndex)
				break
			case 'Style1':
				setStyle1ActiveIndex(newIndex)
				break
			case 'Style2':
        		setStyle2ActiveIndex(newIndex)
				break
		}
    }

	const slides = items.map((item, i) => {
        return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={i}
			>
				<img 
					src={imageUrlBase + item}
					alt=""
					style={{width: '400px', height: '400px'}}
				/>
			</CarouselItem>
        )
    })

	return (
		<div style={{width: '26%', marginLeft: '5.5%'}}>
			{type === 'Base'? <h4>Choose an image to style</h4> : type === 'Style1' ? <h4>Choose first styling image</h4> : <h4>Choose second styling image</h4>}
			<Carousel
				activeIndex={type === 'Base' ? contentActiveIndex : (type === 'Style1' ? style1ActiveIndex : style2ActiveIndex)}
				next={next}
				previous={previous}
				interval={false}
				style={{justifyContent: 'center', alignItems: 'center'}}
			>
				<CarouselIndicators items={items} activeIndex={type === 'Base' ? contentActiveIndex : (type === 'Style1' ? style1ActiveIndex : style2ActiveIndex)} onClickHandler={goToIndex} />
					{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
		</div>
	)
}