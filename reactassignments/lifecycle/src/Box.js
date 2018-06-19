import React from 'react';


const Box = (props) => {

    const style = {
        width: '200px',
        height: '200px',
        backgroundColor: props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={ style }>
            { props.text }
        </div>
    )
}

export default Box;

