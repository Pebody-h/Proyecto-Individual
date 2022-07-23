import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './Components/SmartComponents/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './StateManagement/Redux/Store/Store'
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
