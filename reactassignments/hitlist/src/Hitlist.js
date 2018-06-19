import React, { Component } from 'react';


class Hitlist extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
          this.setState({data: response.data})
            })
        }


        render(){
            const myData = this.state.data.map(todo =>{
                return<div>
                    <h1>{todo.name}</h1>
                    <img src={todo.image} />
                    </div>
            })
            return(
                <div>
                        {myData}
                    </div>
            )
        }
    }

    export default Hitlist
