import ToDoItem from '../src/components/ToDoItem.js';
const test = QUnit.test;

QUnit.module('ToDoItem');

test('temolate', assert => {
    const todo = {
        todo: 'Learn Spanish'
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox">
            <label class="task">undefined</label>
            <button class="remove-button">☕</button>
        </li>
    `;

    const todoItem = new ToDoItem({ todo });
    const html = todoItem.renderTemplate();

    assert.htmlEqual(html, expected);
});