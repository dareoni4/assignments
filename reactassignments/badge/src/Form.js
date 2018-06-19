import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            inputs:{
                firstname: '',
                lastname: '',
                email: '',
                placeOfBirth: '',
                phone:'',
                favoritefood: '',
                Info: ''
        },
            data: []
    }

        this.handleChange = this.handleChange.bind(this);
        
    }

handleChange(e){
    e.persist()
    this.setState(prevState => {
        return {
            inputs: {
                ...prevState.inputs,
                [e.target.name]: e.target.value
            }
        }
    })
}
   


    render(){
        return (
            
            <form onSubmit={ this.props.handleSubmit }>
                <label>
                    first Name:
                    <input 
                        type="text" 
                        onChange={ this.handleChange } 
                        name="firstname" 
                        value={ this.state.firstname }/>
                </label>
                
                <label>
                    last name
                    <input 
                        type="text"
                        onChange={ this.handleChange }
                        name="lastname"
                        value={ this.state.lastname}
                    />
                </label>
                <label>
                    Email
                    <input 
                        type="text"
                        onChange={ this.handleChange }
                        name="email"
                        value={ this.state.email}
                    />
                </label>
                <label>
                   Place of Birth
                    <input 
                        type="text"
                        onChange={ this.handleChange }
                        name="placeOfBirth"
                        value={ this.state.placeOfBirth}
                    />
                </label>
                <label>
                    phone
                    <input 
                        type="number"
                        onChange={ this.handleChange }
                        name="phone"
                        value={ this.state.phone}
                    />
                </label>
                <label>
                    Favorite food
                    <input 
                        type="text"
                        onChange={ this.handleChange }
                        name="favoritefood"
                        value={ this.state.Favoritefood}
                    />
                </label>
                <label>
                    tell us about yourself
                    <textarea
                        type="text"
                        onChange={ this.handleChange }
                        name="Info"
                        value={ this.state.Info}
                    ></textarea>
                </label>


                <button>Submit</button>
            </form>
        )
    }

}




export default Form