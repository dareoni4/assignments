import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/search'


class App extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
       
    }
    componentWillMount(){
        axios.get('/resturaunts').then(response => {
            this.setState({
                data: response.data
            })
        })
    }

  

    render(){
        // const filteredItem = this.state.filter(rests => {
        //     return rests.name.includes(this.state.search) || rests.category.includes(this.state.search)
        // })
        const foodData = this.state.data.map(rests  => {
            return <div>
                <h3>{rests.name}</h3>
                <p>{rests.category}</p>
                    </div>
        })

        return(
            <div>
                <Search />
             
                {foodData}
            </div>
        )
    }
}







export default App