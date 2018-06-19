import React from 'react'
function Items() { 
    words = ["Hello", "World", "How are you?"]
    return (
        <div>
        <ul>
            {word.map(items => <li>{items}</li>)}
        </ul>
    </div>
    )
}



export default Items