import Component from './Component.js';
import Header from './Header.js';
import AddToDo from './AddToDo.js';
import ToDoList from './ToDoList.js';
import todos from '../../data/todos.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        //header
        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addTodo = new AddToDo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }
        });
        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const todoList = new ToDoList({ 
            todos,
            onRemove: (todoToRemove) => {
                const index = todos.indexOf(todoToRemove);
                todos.splice(index, 1);

                todoList.update({ todos });
            }
            
        });
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <!-- header -->
                <main>
                    <!-- todo list -->
                </main>
            </div>
        `;
    }
}

export default App;