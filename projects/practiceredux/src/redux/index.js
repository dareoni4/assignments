import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'



export const getData = () => {
return dispatch => {
    axios.get('https://vschool-cors.herokuapp.com?url=http://ufc-data-api.ufc.com/api/v1/us/fighters').then(response => {
        dispatch({
            type: "GET_DATA",
            data: response.data
        })
    }).catch(err => {
        console.log(err)
    })
}
}



const reducer = (state = {data: []}, action) => {
    switch(action.type){
        case "GET_DATA":
        return {
            data: action.data
        
        
        }
        default: 
        return state
    
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store