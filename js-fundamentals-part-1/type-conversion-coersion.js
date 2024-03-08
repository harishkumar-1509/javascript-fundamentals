// type conversion
const birthYear = "1991";
console.log(birthYear + 18); // 199118
console.log(Number(birthYear) + 18); // 2009

console.log(Number('Harish')); // Operation fails, so output is: NaN -> Not a number

console.log(String(23)); // '23'

// type coercion
console.log("I'm" + 23 + "years old!") // it'll convert 23 to string
console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // 23103
console.log('23' / '2'); // 11.5

let n = '1' + 1;
n -= 1;
console.log(n); // 10

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Harish')); // true
console.log(Boolean({})); // false
console.log(Boolean('')); // false

let moneyInHand = 0;
if (!moneyInHand) {
    console.log("Don't spend money because you don't have!!");
} else {
    console.log("You can spend money because you have!!");
}

let height = 0;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is UNDEFINED!");
}