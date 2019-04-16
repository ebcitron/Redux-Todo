import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {todosReducer } from './Reducers/index';
import { Provider } from 'react-redux'
import {createStore } from 'redux';




ReactDOM.render(
<Provider store = {createStore(todosReducer)}>
<App />
</Provider>, document.getElementById('root'));
