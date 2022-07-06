import { combineReducers } from "redux";

import Activities from './Activities'
import Filters from './Filters'
import GetCountries from './GetCountries'

const Reducer = combineReducers({
    Countries: GetCountries,
    Filters: Filters,
    Activities: Activities
})

export default Reducer;