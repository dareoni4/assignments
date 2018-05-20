import React, {Component} from 'react';


const Counter = (props) => {
    return(
        <div>
        <h2>
            {props.count}
        </h2>
        <button onClick={props.add}>Click</button>
        <button onClick={props.subtract}>Declick </button>
        </div>

    )
}





export default Counter;










