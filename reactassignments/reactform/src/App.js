import React from 'react';
import Form from './Form';
import Formlist from './FormList';
import FormList from './FormList';


class App extends React.Component {
    constructor(){
        super( )
        this.state = {
            value: "",
            names: []
        }
        this.handleSubmit = this.handleSubmit.bind(list)
        this.handleChange = this.handleChange.bind(list)
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => ({
            names:[...prevState.names, prevState.value],
        value: ''
        }))
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Form
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                value = {this.state.value}
                names ={this.state.names}
                />
            </div>
            <div>
                <FormList
                value={this.state.value}
                names={this.state.names}
                />
                </div>
                

        )
    }
}

export default App; 