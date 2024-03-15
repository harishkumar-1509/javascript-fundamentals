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

// Arrow function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearUntillRetirement = (birthYear,firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearUntillRetirement(1998));

// Arrow functions do not get the "this" keyword