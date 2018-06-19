import React, { Component } from 'react';

const Badge = (props) => {
    return (
    <div>
    <div class="box">
       <p>{props.firstname}</p>

       <p>{props.lastname}</p>
    <p>
    {props.placeOfBirth}</p>
<p>
    {props.phone}</p>
<p>
    {props.favoritefood}</p>
<p>
    {props.Info}</p>
    </div>
    </div>

        )


}












export default Badge