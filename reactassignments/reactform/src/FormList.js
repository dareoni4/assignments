import React from 'react';

function Formlist(props){
    const mappedList = prop.names.map((name, i) => {
        return (
            <li key={name + '-' + i}> {name}</li>
        )
    })
    return (
        <div>
            <h1>
                ~ {props.value}
            </h1>
            <h2>
                name list
            </h2>
            <ul>
                {mappedList}
            </ul>
        </div>
    )
}


export default FormList;