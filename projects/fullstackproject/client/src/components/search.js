import React, {Component} from 'react'
import axios from 'axios'

class search extends Component {
    constructor(){
    super()
    this.state = {
        search:'',
        results: []
    }
}
componentDidMount() {
    axios.get('/resturaunts').then(response => {
      this.setState({data: response.data})
    })
  }

handleInputChange = (e) => {
    this.setState({
        search: this.search.value
    }, () => {
        if(this.state.search && this.state.search.length > 1){
            if(this.state.search.length % 2 === 0){
                this.state.data
            }
        }else if (!this.state.results){

        }
    })
}

render(){
    return(
        <form>
            <input
            placeholder="search"
            ref={input => this.search =input}
            onChange={this.handleInputChange}
            />
            <suggestion results = {this.state.results}/>
            </form>
    )
}
}

export default search