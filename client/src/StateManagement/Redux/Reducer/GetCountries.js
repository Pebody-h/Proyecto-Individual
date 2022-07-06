import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    GET_DETAIL
} from '../Actions/Action_Types.js'

const initialState = {
    countries:[],
    country: {},
    countryDetail:{},
}

const GetCountries = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
            }
        case SEARCH_COUNTRY: 
            return {
                ...state,
                country: action.payload,
            }
        default:
            return state;
    }
}

export default GetCountries;