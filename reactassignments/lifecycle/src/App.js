import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
    constructor(){
        super();
        this.state = {
           data: [],
           text: '',
           color: 'cornflowerblue'
        }
        this.handleChangeColor = this.handleChangeColor.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleChangeColor);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleChangeColor);
    }

    handleChangeColor(e){
       switch(e.code){
            case "ArrowUp":
                this.setState({ color: 'red', text: e.code });
                break;
            case "ArrowDown":
                this.setState({ color: 'green', text: e.code });
                break;
            case "ArrowLeft":
                this.setState({ color: 'orange', text: e.code });
                break;
            case "ArrowRight":
                this.setState({ color: 'pink', text: e.code });
                break;
       }
    }

    render(){
        return (
            <div>
                <Box {...this.state}/> 
            </div>
        )
    }
}

export default App;