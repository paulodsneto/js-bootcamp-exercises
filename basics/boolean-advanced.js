let isAccountLocked = false; 
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Is account locked');
} else if (userRole === 'admin') {
    console.log(`Welcome ${userRole}`);
} else {
    console.log('Welcome!')
}

/*
    Desafio

    > 36 muito quente
    > 15 muito frio
    = 21 ideal para sair

*/

let temp = 37;

if (temp >= 36) {
    console.log('It is hot outside!');
} else if (temp <= 15) {
    console.log('It is freezing outside!');
} else {
    console.log('It is nice to take a walk!');
}