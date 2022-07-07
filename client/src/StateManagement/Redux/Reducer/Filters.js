import {
    FILTER_BY_CONTINENT,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    SEARCHYNG
} from "../Actions/Action_Types.js"


const initialState = {
    searching: false,
    order: "",
    continent: "",
}

const Filters = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHYNG:
            return {
                ...state,
                searching: action.payload
            }
        case FILTER_BY_CONTINENT:
            if(action.payload !== "ALL"){
                return {
                    ...state,
                    continent: action.payload,
                }
            }else{
                return {
                    ...state,
                    continent: "",
                }
            }
        case ORDER_BY_NAME:
            if(action.payload !== "notOrder"){
                return {
                    ...state,
                    order: action.payload,
                }
            } else {
                return {
                    ...state,
                    order: "notOrder",
                }
            }
        case ORDER_BY_POPULATION:
            if(action.payload !== "notOrder"){
                return {
                    ...state,
                    order: action.payload,
                }
            } else {
                return {
                    ...state,
                    order: "notOrder",
                }
            }
        default:
            return state;
    }

}

export default Filters;