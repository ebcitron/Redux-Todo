import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleDone } from '../Actions';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleAddTodo}
                        name='text'
                        value={this.state.todo}
                    />
                    <button onClick={this.render.handleAddTodo} >
                        Add A TodoList
                    </button>

                </form>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li
                                onClick={() => this.toggleDone(todo.id)}
                                style={
                                    todo.done ? { textDecoration: 'line-through' } : null}
                                key={todo.id}
                            >
                                {todo.text}
                            </li>
                        );

                    })}
                </ul>
            </div>
        )
    }
}
    const mapStateToProps = state => {
        return {
            todo: state.todos
        };
     };

     export default connect(mapStateToProps, { addTodo, toggleDone})(TodoList); 

