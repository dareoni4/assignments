import React, { Component } from 'react';
import './index.css' 
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.setState({date: new Date()}),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      return (
        <div>
          
   

          <h2 className="Time"> {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
 
  
  export default Clock