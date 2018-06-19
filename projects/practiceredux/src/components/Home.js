 import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../redux'


class Home extends Component {
    constructor(){
        super();
        this.state = {userInput: ''}
        this.handleChange = this.handleChange.bind(this)
    }


    
    handleChange(e){
this.setState({
    [e.target.name]: e.target.value
})
    }
    componentDidMount() {
        this.props.getData()
    }
    render(){
        console.log(this.props)

        const myData = this.props.data.slice(0, 750).filter(fighter => {
           return fighter.first_name.toLowerCase().includes(this.state.userInput)
           return fighter.last_name.toLowerCase().includes(this.state.userInput)
        }).map(fighter => {
            return (
            <div className="box">
            <h4>{fighter.first_name} {fighter.last_name}</h4>
            <h3> {fighter.weight_class}</h3>
            <h4>{fighter.wins}-{fighter.losses}</h4>
            <div><img src = {fighter.thumbnail}/></div>
            </div>
            )
         })
        
       
        return(
            <div>
                
                <h1 class="head">TOP UFC FIGHTERS</h1>
<div className="search"><center><input type='text' value={this.state.userInput} name = "userInput" onChange={this.handleChange}/> </center></div>
                  
                   <div className="info"> {myData}</div>
            </div>
        )
    } 
}



export default connect(state=>state, { getData })(Home)