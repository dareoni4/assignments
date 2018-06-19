import React, { Component } from 'react';


class NameForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        console.log(event.target.value)
        event.preventDefault();
        alert(`Hi, my name is ${this.state.name}, and I am ${this.state.age}`);
        this.setState({
            [event.target.name]: ''
        })
    }

    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Name:
                    <input 
                        type="text" 
                        onChange={ this.handleChange } 
                        name="name" 
                        value={ this.state.name }/>
                </label>
                <label>
                    Age:
                    <input 
                        type="number"
                        onChange={ this.handleChange }
                        name="age"
                        value={ this.state.age }
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default NameForm;