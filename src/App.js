import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreProvider from './context/Store'
import NavBar from './components/NavBar'
import PhotoGallery from './components/PhotoGallery'
import StyleButton from './components/StyleButton'
import About from './components/About'
import Results from './components/Results'
import ResultsGallery from './components/ResultsGallery'
import { Tabs, Tab } from 'react-bootstrap'

const App = () => {
	return (
		<div className="App">
			<StoreProvider>
				<NavBar />
				<br/>
				<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{marginTop: '5%'}}>
					<br />
					<Tab eventKey="home" title="Style an Image" style={{flex: 1, textAlign: 'center'}}>
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
				<About />
			</StoreProvider>
		</div>
	)
}

export default App