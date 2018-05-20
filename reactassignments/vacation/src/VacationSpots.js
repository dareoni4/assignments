import React from 'react'

const VacationSpots = (props) => {
    return(
        <div className={props.uniqueStyle}>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <h3>{props.timeToGo}</h3>
           
        </div>
    )
}



export default VacationSpots