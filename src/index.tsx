import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducer from "./reducers";
import { Provider } from "react-redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducer, 
  composeEnhancers(),
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
