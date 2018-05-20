import React from 'react';
import VacationSpots from './VacationSpots'

const Vacation = (props) => {
    const mappedSpots = props.vacation.map(vacationSpots => {
    return(
        <VacationSpots place = {vacationSpots.place} 
        price = {vacationSpots.price} 
        timeToGo = {vacationSpots.timeToGo}
        />
    )
})
return(
    <div>
        {mappedSpots}
    </div>
)

}





export default Vacation;