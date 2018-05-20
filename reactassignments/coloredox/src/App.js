import React from 'react'
import Welcome from './Welcome'
import './style.css'


const App = () => {
   
   
    return(
      <div className="container"> 
     
        <Welcome 
            name='Captain America' 
            origin='1944' 
            power='fighting skills'
            uniqueStyle ="box1 "/>
        <Welcome 
            name='Iron Man' 
            origin='1963' 
            power='technology'
            uniqueStyle ="box2"/>
        <Welcome 
            name='Thor' 
            origin='1962' 
            power='thunder and strength'
            uniqueStyle ="box3"
            />
        <Welcome 
            name='Doctor Strange' 
            origin='1964' 
            power='magic'
            uniqueStyle ="box4"
            />
        <Welcome 
            name='Black Widow' 
            origin='1972' 
            power='fighting skills'
            uniqueStyle ="box5"
            />
        <Welcome 
            name='Hulk' 
            origin='1962' 
            power='brute stength'
            uniqueStyle= "box6"
            />
        <Welcome 
            name='Black Panther' 
            origin='1966' 
            power='technology Fighting skills'
            uniqueStyle="box7"
            />
        <Welcome 
            name='Hawkeye' 
            origin='1963' 
            power='archer'
            uniqueStyle="box8"
            />
        <Welcome 
            name='Scarlett witch' 
            origin='1970' 
            power='magic'
            uniqueStyle="box9"
            />
        <Welcome 
            name='Vision' 
            origin='1967' 
            power='cyborg'
            uniqueStyle="box10"
            />
        <Welcome 
            name='Gamora' 
            origin='1980' 
            power='assassin fighingt skills'
            uniqueStyle="box1 box12"
            />
      </div>
    )
  }
  
  export default App;