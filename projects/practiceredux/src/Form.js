import React, { Component } from 'react';
import './index.css' 


class Form extends Component{
    constructor(){
        super();
        this.state = {
            value:'',
            firstName: '',
            lastName: '',
            password:'',
            Username: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const {
            name, value 
        } = e.target
        e.preventDefault();
        this.setState(prevState => ({
        [name]: value
        }))
    }
    handleSubmit(e){
        console.log(e.target.value)
        e.preventDefault()
        alert(`thank you for signing in ${this.state.Username}`)
        this.setState({
            value: e.target.value
        })
    }

    render(){
    return (
    <div className="form">
        <h1 className="title">sign up</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="fill">
        <label>
         <div>First Name</div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.firstName}
            name='firstName'
          />
          </label>
          <label>
          <div>Last Name</div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.lastName}
            name='lastName'
          />
          </label>
          <label>
          <div>Email</div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.Email}
            name='Email'
          />
          </label>
          <label>
          <div>Username</div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.Username}
            name='Username'
          />
          </label>
          <label>
          <div>password</div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
            name='password'
          />
        </label>
        </div>
          <button>Submit</button>
        </form>
</div>   
    )

}
}

export default Form;