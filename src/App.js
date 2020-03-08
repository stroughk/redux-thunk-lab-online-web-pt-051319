import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import catsReducer from './reducers/catsReducer.js';
 
const store = createStore(catsReducer)
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);