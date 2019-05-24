//import filterTodos from '../src/filter-todos.js';
const test = QUnit.test;

QUnit.module('filter todos');

function filterTodos(todos, filter) {
    // const lowerCaseFilter = filter.test.toLowerCase();

    return todos.filter(todo => {
        const task = todo.task();
        const isTask = task.includes(filter); 
        
        return isTask;
    });

}


const todos = [
    {
        task: 'Learn JavaScript',
        completed:false
    },
    {
        task: 'Feed my Cats',
        completed:false
    },
    {
        task: 'Wash dishes',
        completed:false
    },
    {
        task: 'Takeout Trash',
        completed:false
    },
    {
        task: 'Learn Spanish',
        completed:false
    },
    {
        task: 'Make a cake',
        completed:false
    },
    {
        task: '100 push ups',
        completed:false
    }
];

test('filters on text', assert => {
    const filter = {
        task: 'Mak'
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [{
        task:'Make a cake'
    }]);
});

