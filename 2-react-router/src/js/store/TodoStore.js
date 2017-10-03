import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todos = [
            {
                id: 246810,
                text: 'Go shopping',
                complete: false
            },
            {
                id: 1357911,
                text: 'Pay Water Bills',
                complete: false
            }
        ]
    }

    getAll(){
        return this.todos;
    }

    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id: id,
            text,
            complete: false,
        });
        this.emit('change');
    }

    handleActions(action){
        switch(action.type){
            case 'CREATE_TODO':
                this.createTodo(action.text)
            break;

            case 'RECEIVE_TODOS':
                this.todos = action.todos;
                this.emit('change');
            break;
        }
    }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

// window.todoStore = todoStore;
// window.dispatcher = dispatcher;
export default todoStore;