import Component from './Component.js';

class AddToDo extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newTodo = {
                task: formData.get('todo')
            };

            onAdd(newTodo);

            form.reset();

        });
        return form;

        
    }

    renderTemplate() {
        return /*html*/ `
            <form class="add-todo">
                <label> 
                    New ToDo:
                    <input name="todo" type="text">
                    </label>
                    <button class="add-button">✎</button>
            </form>
        `;
    }



}

export default AddToDo;