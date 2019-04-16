export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';



export const addTodo = (todo) => {
    return {
        type: 'NEW_TODO',
        payload: todo
        
    };
};

export const toggleDone = id => {
    return {
        type: 'TOGGLE_DONE',
        payload: id
    };
};