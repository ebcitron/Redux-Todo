import {combineReducers } from 'redux';
import todoReducer from './todos';

const todosReducer = combineReducers({
    todo: todoReducer
});
export default todosReducer;