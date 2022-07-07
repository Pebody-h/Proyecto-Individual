import {
    POST_ACTIVITIES,
    GET_ACTIVITIES,
    PUT_ACTIVITY
} from "../Actions/Action_Types.js"

const initialState = {
    activities : [],
    newActivity: {},
    removedSuccessful: ""
}

const Activities = (state=initialState, action) =>{
    switch (action.type) {
        case POST_ACTIVITIES:
            return {
                ...state,
                newActivity: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case PUT_ACTIVITY:
            return {
                ...state,
                removedSuccessful: action.payload,
            }
        default:
            return state;
    }
}

export default Activities;