import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreProvider from './context/Store'
import PhotoGallery from './components/PhotoGallery'
import StyleButton from './components/StyleButton'
import About from './components/About'
import Results from './components/Results'
import ResultsGallery from './components/ResultsGallery'
import { Navbar, Tabs, Tab } from 'react-bootstrap'

const App = () => {
	const myRef = useRef(null)

	const handleTopScroll = () => {
		window.scroll({
			top: 0,
			left: 0, 
			behavior: 'smooth',
		})
	}
	
	const executeScroll = () => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<div className="App">
			<StoreProvider>
				<Navbar bg="dark" variant="dark" expand="xl" fixed="top">
					<Navbar.Brand href="#home" onClick={handleTopScroll}>
						Project SAM: Neural Style Transfer with Instance Segmentation
					</Navbar.Brand>
					<Navbar.Brand href="#about" style={{marginLeft: '30%'}} onClick={executeScroll}>
						About this project
					</Navbar.Brand>
					<Navbar.Brand href="https://github.com/jiangs11/ProfHacks2021" target="_blank" style={{marginLeft:'5%'}}>
						GitHub
					</Navbar.Brand>
				</Navbar>
				<br/>
				<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{marginTop: '5%'}}>
					<br />
					<Tab eventKey="home" title="Style an Image" style={{flex: 1, textAlign: 'center'}}>
                        <h1 style={{ color: 'red' }}>The machine learning part (below) of this site is down. <br />Go check out the gallery tab for cool outputs!</h1>
						<div style={{display: 'flex', marginTop: '3%'}}>
							<PhotoGallery type="Base" />
							<PhotoGallery type="Style1" />
							<PhotoGallery type="Style2" />
						</div>
						<div style={{marginTop: '2%'}}>
							<StyleButton />
							<Results />
						</div>
					</Tab>

					<Tab eventKey="gallery" title="Our Favorite Styles Gallery">
						<ResultsGallery />
					</Tab>
				</Tabs>
				<div ref={myRef} />
				<About />
			</StoreProvider>
		</div>
	)
}

export default App