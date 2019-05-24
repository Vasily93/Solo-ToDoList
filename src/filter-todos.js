function filterTodos(todos, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    
    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const isTask = lowerCaseTask.includes(lowerCaseFilter);
        
        
        // const task = todo.task();
        // const isTask = task.includes(filter); 

        return isTask;
    });

}

export default filterTodos;
