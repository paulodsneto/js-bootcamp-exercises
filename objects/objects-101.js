let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages`);

// Desafio -> Criar um objeto Person com name, age e location
// Após isso aumente Age em 1 e printe a mensagem de novo

const person = {
    name: 'Paulo',
    age: 25,
    location: 'Rio de Janeiro'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age++

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
