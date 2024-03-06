const age = 19;
const legalAge = age >= 18;

if (legalAge) {
    console.log(`You can start driving`);
} else {
    console.log(`You need to wait for ${18 - age}, you are young :(`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);