import React from 'react'

const Pets = (props) => {
    return(
        <div>
        <p>{props.name}</p>
        <h2>{props.breed}</h2>
        </div>
        
    )
}

export default Pets