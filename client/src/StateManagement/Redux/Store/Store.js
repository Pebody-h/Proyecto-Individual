import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import Reducer from "../Reducer/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;