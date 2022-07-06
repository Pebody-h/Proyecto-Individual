import axios from 'axios'

import { 
    GET_COUNTRIES,
    GET_DETAIL,
    SEARCH_COUNTRY,
    POST_ACTIVITIES,
    GET_ACTIVITIES,
    PUT_ACTIVITY,
    FILTER_BY_CONTINENT,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    SEARCHYNG,
} from './Action_Types.js'

export const getCountries = () => async dispatch => {
    try{
    const allCountries = await axios.get(`http://localhost:3001/countries`);
    dispatch({
        type:GET_COUNTRIES,
        payload: allCountries.data,
    })
    } catch(err){
        return alert(err)
    }
}

export const searchCountry = (name) => async dispatch => {
    try {
        const country = await axios.get(`http://localhost:3001/countries?name=${name}`);
        dispatch({
            type:SEARCH_COUNTRY,
            payload:country.data,
        })
    } catch(err){
        return alert(err)
    }
}

export const getDetail = id => async dispatch => {
    try{
        const country = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
            type: GET_DETAIL,
            payload:country.data,
        })
    }catch(err){
        return alert(err)
    }
}

export const postActivities = data => async dispatch =>{
    try{
        const json = await axios.post(`http://localhost:3001/activities`, data);
        dispatch({
            type: POST_ACTIVITIES,
            payload: json.data
        })
    }catch(err){
        return alert(err)
    }
}

export const getActivities = () => async dispatch => {
    try {
        const activitys = await axios.get(`http://localhost:3001/activities`)
        dispatch({
            type: GET_ACTIVITIES,
            payload: activitys.data
        })
    } catch(err) {
        return alert(err)
    }
}

export const putActivity = id => async dispatch => {
    try {
        const destroy = await axios.put(`http://localhost:3001/activities/${id}`)
        dispatch({
            type: PUT_ACTIVITY,
            payload: destroy.data
        })
    } catch (err) {
        return alert(err)
    }
}

export const searching = boolean => {
    return { 
        type: SEARCHYNG,
        payload: boolean
    }
} 

export const filterByContinent = payload => {
    return{
        type: FILTER_BY_CONTINENT,
        payload,
    }
}

export const orderByName = payload => {
    return{
        type: ORDER_BY_NAME,
        payload,
    }
}

export const orderBypopulation = payload => {
    return {
        type: ORDER_BY_POPULATION,
        payload,
    };
}