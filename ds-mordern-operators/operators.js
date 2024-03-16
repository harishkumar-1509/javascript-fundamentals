// Spread Operator
const arr = [1, 2];
const newArr = [4, 5, ...arr];
console.log(newArr);
console.log(...newArr); // return the individual elements of the array

const name = "Harish";
const letters = [...name, 'k'];
console.log(letters);

const ingredients = [prompt("Let's make pizza, Ingredient 1?"), prompt("Ingredient2"), prompt("Ingredient3")];

function makePizza(ing1, ing2, ing3) {
    console.log(`Making pizza with ${ing1}, ${ing2} and ${ing3}`);
}

makePizza(...ingredients);

// REST Patterns

// Spread because we are using de structuring on the right hand side
const arr1 = [1, 2, ...[3, 4]];

// Rest because we are using the spread on the left hand side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // others = [3,4,5]

const add = function (...parameters) {
    let sum = 0;
    for (let i = 0; i < parameters.length; i++) {
        sum += parameters[i];
    }
    console.log(`The sum of the numbers is ${sum}`);
}

add(2, 3);
add(2, 3, 4, 5);

const x = [23, 4, 7];
add(...x);

// Short circuiting
console.log(3 || "Harish"); // output: 3 ( because 3 is a truthy value )
console.log("" || "Harish"); // Output: Harish
console.log(0 || "" || undefined || "Harish"); // output: Harish

console.log(0 && "Harish"); // output: 0 because 0 is a falsy value

// Nullish Coelescing
let val = null;
console.log(val ?? 10);