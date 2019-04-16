import {NEW_TODO, TOGGLE_DONE} from '../Actions';

export default (todo = [], action ) => {
    switch(action.type) {
        case NEW_TODO:
        return [...todo, action.payload];
        case TOGGLE_DONE:
        return todo.map( todo => {
            if (todo.id === action.payload) {
                return Object.assign({}, todo, {completed: !todo.completed });
            }
            return todo;
        });
        default:
        return todo;

    };
};