import React from 'react'

function Form(props){
    return(
    <form onSubmit= {props.handleSubmit}>
    input a name:
    <input 
    type="text"
    onChange={props.handleChange}
    value={props.value}
    />
    <button>Submit</button>
    </form>
    )
}

export default Form;