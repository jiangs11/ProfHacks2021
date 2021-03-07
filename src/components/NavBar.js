import React, { Component } from "react"
import { Navbar } from 'react-bootstrap'

function handleTopScroll() {
    window.scroll({
		top: 0,
		left: 0, 
		behavior: 'smooth',
    })
}

function handleBottomScroll() {
    window.scroll({
		top: document.body.offsetHeight,
		left: 0, 
		behavior: 'smooth',
    })
}

export class NavBar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="xl" fixed="top">
				<Navbar.Brand href="#home" onClick={handleTopScroll}>
					Project SAM: Neural Style Transfer with Instance Segmentation
				</Navbar.Brand>
				<Navbar.Brand href="#about" style={{marginLeft: '30%'}} onClick={handleBottomScroll}>
					About this project
				</Navbar.Brand>
				<Navbar.Brand href="https://github.com/jiangs11/ProfHacks2021" target="_blank" style={{marginLeft:'5%'}}>
					GitHub
				</Navbar.Brand>
			</Navbar>
		)
	}
}

export default NavBar