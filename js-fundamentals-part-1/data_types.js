/*
Values are of 2 types:
1) Object 
2) Primitive

Object -> let me = {
    name:"Harish"
}

Primitve -> ex: let firstName = "Harish" or let age = 30 and so on.

There are 7 primitive data types
1) Number: Floating point numbers, used for integers and decimal ( let age = 30; )
2) String: Sequence of characters, used for text ( let firstName = "Harish"; )
3) Boolean: true/false ( let hasDrivingLicense = false; )
4) Undefined: Value taken by a variable that's not yet defined ( let children; )
5) Null: Also means empty value
6) Symbol(ES2015): Value that is unique and cannot be changed
7) BigInt(ES2020): Larger integer than number type can hold

Note: Javascript is a dynamically typed language!
*/

let javascriptIsFun = true;
console.log(typeof true); // Boolean
console.log(typeof javascriptIsFun) // Boolean
console.log(typeof 23); // Number
console.log(typeof 'Harish') // String

// Dynamic typing ( Converted the above boolean value to string )
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun) //String

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991; // Re assigning the above var
console.log(typeof year) // Number

console.log(typeof null); // Object --> Which is a bug in javascript