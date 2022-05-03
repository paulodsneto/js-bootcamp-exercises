let temp = 65;

// Logical Operator -> And -> Se ambas as condições forem verdadeiras retorna TRUE

if (temp >= 60 && temp <=90) {
    console.log('It is nice to take a walk out!');
}

// Logical Operator -> Or -> Retorna true se uma das condições forem verdadeiras

if (temp <= 0 || temp >= 120){
    console.log('Dont go outside!');
}

let isGuestOneVegan = true;
let isGuestTwoVegans = false;

if (isGuestOneVegan && isGuestTwoVegans) {
    console.log('Only vegan food');
} else if(isGuestOneVegan || isGuestTwoVegans) {
    console.log('We have vegan options!');
} else {
    console.log('You can order everything in the menu.');
}

