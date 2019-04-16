import React from 'react';
import {TodoList} from '../Components/TodoList';

class App extends Component {
    render() {
        return(
            <div className ='App'>
                <div className = 'todoList'>
                <TodoList />
                </div>
            </div>
        );
    };
}

export default App;