import React from 'react';
import Pets from './Pets'


const Friend = (props) => {
    console.log(props)
    const friendPet = props.pets.map(pet => {
        return(
            <Pets name={pet.name} breed={pet.breed}/>
        )
    }) 
        return(
    
    <div>
<h1>{props.name}</h1>
<p>{props.age}</p>
{friendPet}
    </div>
        
        ) 
}









export default Friend;




