import Component from './Component.js';
import Header from './Header.js';
//import AddToDo from './AddToDo.js';
import ToDoList from './ToDoList.js';
import todos from '../../data/todos.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const todoList = new ToDoList({ todos });
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