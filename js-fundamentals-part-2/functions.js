// Activate strict mode
'use strict';

// Function
function logger() { 
    console.log(`Hi Harish!`);
}

logger();

function fruitProccesor(apples, oranges) {
    console.log(`Apples: ${apples} , Oranges: ${oranges}`);
    const juice = `Juice is ready with ${apples} apples and ${oranges}`;
    return juice;
}

const processedJuice = fruitProccesor(0, 5);
console.log(processedJuice);

// function declaration
function calcAge1(birthYear) { 
    return 2024 - birthYear;
}
const age1 = calcAge1(1998);

// function expression
const age2 = function (birthYear) {
    return 2024 - birthYear;
 }