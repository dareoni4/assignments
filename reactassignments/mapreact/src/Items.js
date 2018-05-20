import React from 'react'
function Items() { 
    words = ["Hello", "World", "How are you?"]
    return (
        <div>
        <ul>
            {words.map(item => <li>{item}</li>)}
        </ul>
    </div>
    )
}



export default Items