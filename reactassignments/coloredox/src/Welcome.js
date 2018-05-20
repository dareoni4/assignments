import React from 'react'

const Welcome = (props) => {
    return(
    <div className={props.uniqueStyle}>
        <h1>superhero: {props.name}</h1>
        <h2>first appearance:{props.origin}</h2>
        <h3>power: {props.power} </h3>
    </div>
    )
};
    

export default Welcome