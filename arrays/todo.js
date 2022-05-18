let todos = [{
    text: 'Take out the garbage',
    completed: true
}, {
    text: 'Drink water',   
    completed: false
}, {
    text: 'Have a meal',
    completed: true
}, {
    text: 'Take a shower',
    completed: false
}, {
    text: 'Pet my cat',
    completed: true   
}];

const deleteTodo = function (todo, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1);
    }
}


const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !
        todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Pet my cat')
// console.log(todos)

// 1 - Converter o array de strings em array de objetos -> text, completed - FEITO
// 2 - Criar função pra remover a task pelo valor do texto
// 3 - A pesquisa no array não pode ser case sensitive







// console.log(task.splice(2, 1));
// console.log(task.push('Buy coffee'));
// console.log(task.shift());


// console.log(`You have ${task.length} todos!`);

// task.forEach((tasks, index) => {
//     console.log(`${index + 1}. ${tasks}`);
// })

// console.log(`Todo: ${task[0]}`);
// console.log(`Todo: ${task[task.length-2]}`);
