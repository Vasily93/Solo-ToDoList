import Component from './Component.js';

class ToDoItem extends Component {

    render() {
        const todoItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const todo = this.props.todo;
        const removeButton = todoItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        return todoItem;
    }

    renderTemplate() {
        const todo = this.props.todo;

        let checked = '';
        if(todo.completed) {
            checked = 'checked';
        } 

        return /*html*/ `
            <li>
                <input type="checkbox"${checked}>
                <label class="task">${todo.task}</label>
                <button class="remove-button">☕</button>
            </li>
        `;
    }

}

export default ToDoItem;