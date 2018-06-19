import React from "react";
import {Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import TicTac from './components/TicTac';
import "./index.css"




const App = () => {
return (
    <div>
   <Navbar />
    <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/About" component={About}/> 
        <Route path = "/Signup" component={Signup}/>
        <Route path ="/TicTac" component={TicTac}/>
        
    </Switch>
    </div>
)
}


export default App