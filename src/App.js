import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import PhotoGallery from './components/PhotoGallery'
import About from './components/About'
import { Button, Tabs, Tab } from 'react-bootstrap'
import axios from 'axios'

const App = () => {
	const [styledImages, setStyledImages] = useState([])

	const sendImagesToStyle = async () => {
		const apiURL = ''
		const response = await axios.get(apiURL)
	}

	useEffect(() => {
		
	}, [])

	return (
		<div className="App">
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
						<Button variant="dark" style={{width: '20%'}}>Style!!</Button>
					</div>
					{styledImages.length > 0 ?
						<h1>Not Empty</h1>
						:
						<h1>Styled image goes here</h1>
					}
				</Tab>

				<Tab eventKey="gallery" title="Our Styles Gallery">
					<h1>Hi, from the other tab</h1>
				</Tab>
			</Tabs>
			<About />
		</div>
	)
}

export default App