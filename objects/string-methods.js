let name = '  Paulo Neto'  ;

console.log(name.length); // retorna o tamanho da string


console.log(name.toUpperCase());
console.log(name.toLowerCase());

// let password = 'abc123asdas098';
// console.log(password.includes('password')); // verifica se a variável password existe a palavra password

console.log(name.trim()); // remove espaços em branco



let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password');
}


console.log(isValidPassword('abc123')); // false
console.log(isValidPassword('abc123!@#$!@#!')); // true
console.log(isValidPassword('abc123456password')); // false