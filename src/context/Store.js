import React, { Component, createContext } from 'react'

export const StoreContext = createContext()

export default class StoreProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrlBase: 'http://localhost:5000/static/inputs',
            endpoint: 'http://localhost:5000/create_2styles',

            contentImages: [
                '/content/corgi.jpg',
                '/content/YellowLabradorLooking_new.jpg',
                '/content/butterfly.jpg',
                '/content/Dogrunning.jpg',
                '/content/dog-rough-collie.jpg',
                '/content/cat.jpg',
                '/content/parakeet.jpg'
            ],
            styleImages: [
                '/style/starry_night.jpg', 
                '/style/Derkovits_Gyula_Talig1920.jpg', 
                '/style/Derkovits_Gyula_Woman_head_1922.jpg', 
                '/style/scream.jpg', 
                '/style/glacier1.jpg', 
                '/style/glacier2.jpg', 
                '/style/create_pillars.jpg', 
                '/style/Vassily_Kandinsky.jpg',
                '/style/picnic.jpg',
                '/style/iris.jpg',
                '/style/straw_hat.jpg'
            ],

            bothStyles: "",
            setBothStyles: this.setBothStyles,

            styles1: "",
            setStyles1: this.setStyles1,

            styles2: "",
            setStyles2: this.setStyles2,

            contentActiveIndex: 0, 
            setContentActiveIndex: this.setContentActiveIndex,

            style1ActiveIndex: 0, 
            setStyle1ActiveIndex: this.setStyle1ActiveIndex,

            style2ActiveIndex: 3, 
            setStyle2ActiveIndex: this.setStyle2ActiveIndex
        }
    }

    setBothStyles = (bothStyles) => {
        this.setState({bothStyles})
    }

    setStyles1 = (styles1) => {
        this.setState({styles1})
    }

    setStyles2 = (styles2) => {
        this.setState({styles2})
    }

    setContentActiveIndex = (contentActiveIndex) => {
        this.setState({contentActiveIndex})
    }

    setStyle1ActiveIndex = (style1ActiveIndex) => {
        this.setState({style1ActiveIndex})
    }

    setStyle2ActiveIndex = (style2ActiveIndex) => {
        this.setState({style2ActiveIndex})
    }

    render() {
        return (
            <StoreContext.Provider value={this.state}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}
