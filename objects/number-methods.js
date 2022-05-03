const num = 911.903;

// console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) * min;

console.log(randomNum);


// Desafio 

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;

    let randomGuess = Math.floor(Math.random() * (max - min + 1)) * min;

    if (randomGuess === guess) {
        return true;
    } else {
        return false;
    }
}


console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));