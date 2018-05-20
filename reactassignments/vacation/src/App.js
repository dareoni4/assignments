import React from 'react';
import Vacation from './Vacation';
import './index.css'

const App = () => {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          uniqueStyle: "box1"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
      
      return(
        <Vacation vacation={vacationSpots}
        
        />
      )



}

export default App;