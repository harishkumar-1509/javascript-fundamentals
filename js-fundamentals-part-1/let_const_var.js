// "let" and "const" were introduced in ES6 but the "var" used to be the old way of declarinbg the variables.

// We use "let" when we wan tto mutate or re assign the value of a variable
let age = 30;
age = 31;

// The value declared with "const" cannot be changes later, also which means we cannot declare a empty const variable
const birthYear = 30;
birthYear = 31; // This will return an error

// "let" and "var" are alomost similar, but let is block scoped and var is function scoped
var job = "programmer";
job = "analyst";

lastName = "kumar"
console.log(lastName) // This will work ( but not a good practice )
