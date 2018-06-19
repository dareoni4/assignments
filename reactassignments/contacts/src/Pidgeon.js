import React from "react";

function Pidgeon(props){
    const {nickname, imgUrl, removePidgeon, index} = props;
    return (
        <div>
        <h3>{nickname}</h3>
        <img src={imgUrl} alt=""/>
        <button onClick={()=>removePidgeon(index)}>delete</button>
        </div>
    )
}

export default Pidgeon