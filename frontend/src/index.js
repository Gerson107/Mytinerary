import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../src/redux/reducer/mainReducer';
import './index.css';

const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
