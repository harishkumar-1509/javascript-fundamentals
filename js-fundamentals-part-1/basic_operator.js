// Mathematic operators
const currentYear = 2024;
const ageHarish = currentYear - 1998;
console.log(ageHarish); // 25
const ageJohn = currentYear - 2000;
console.log(ageHarish, ageJohn); // 25,24

console.log(ageHarish * 2, ageJohn / 2, 2 ** 3);
// 2**3 is 2 to the power of 3 -> 8 ( 2*2*2)

const firstName = "Harish";
const lastName = "kumar";
console.log(firstName + " " + lastName); // Harish kumar

// Assignment operator
let x = 10 + 5;
console.log(x); // 15
x += 10; // x=x+10
x *= 4; // x=x*4
x++; // x=x+1
x--; //x=x-1
console.log(x) //100

// Comparision operator
console.log(10 < 15); // true
console.log(10 <= 15); // true
console.log(ageHarish >= 18); // true

const isFullAge = ageHarish >= 18;
console.log(isFullAge); // true

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b); // a=10, b=10

const avgAge = (ageHarish + ageJohn) / 2;
console.log(avgAge);

