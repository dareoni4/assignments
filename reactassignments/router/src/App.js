import { Switch, Route } from "react-router-dom";
import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./components/Home";  
import About from "./components/About";    
import Services from "./components/Services";

const App = () => {  



    return (
        <div>
            <Navbar/>  
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Services" component={Services}/>
            </Switch>
            <Footer/>  
        </div>
    )
}

export default App