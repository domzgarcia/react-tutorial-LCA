import React from "react";

import Todo from '../components/Todo';
import TodoStore from '../store/TodoStore';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component {
    constructor(){
        super();
        this.getTodos = this.getTodos.bind(this)
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    componentWillMount(){
        TodoStore.on('change', this.getTodos);
        console.log('count', TodoStore.listenerCount('change'));
    }

    getTodos(){
        this.setState({
            todos: TodoStore.getAll()
        });
    }
    componentWillUnmount(){
        TodoStore.removeListener("change", this.getTodos);
    }
    
    createTodo(){
        TodoActions.createTodo(Date.now())
    }

    reloadTodos(){
        TodoActions.reloadTodos();
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <button onClick={this.createTodo.bind(this)}>Create</button>
                <button onClick={this.reloadTodos.bind(this)}>Reload</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
  }
}
