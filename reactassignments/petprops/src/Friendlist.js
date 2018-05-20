import React from 'react'

import Friend from './Friend'


const Friendlist = (props) => {
    const mappedFriends = props.friends.map(friend => {
        return (
            <Friend name ={ friend.name} age={friend.age} pets={friend.pets}/>
        )
    })
    return(
        <div>
{ mappedFriends }
        </div>
    )
}



export default Friendlist