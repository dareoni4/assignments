import React, {Component} from 'react';
import Form from './Form';
import Badge from './Badge';
import './index.css'

class App extends Component  {
    constructor(){
        super()
        this.state = {
            badges: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        e.persist()

        this.setState(prevState => {
            return {
                badges: [...prevState.badges,{
                firstname: e.target.firstname.value,
                lastname: e.target.lastname.value,
                email: e.target.email.value,
                placeOfBirth: e.target.placeOfBirth.value,
                phone: e.target.phone.value,
                favoritefood: e.target.favoritefood.value,
                Info: e.target.Info.value
                }]

                
            }

            
        })
    }


    render (){
        return(
            <div>
                <Form
                
                handleSubmit= {this.handleSubmit}
                />
                {this.state.badges.map(props => {
                    return <Badge {...props} />
                })}
                   
                
            </div>
        )
    }


    
}

export default App