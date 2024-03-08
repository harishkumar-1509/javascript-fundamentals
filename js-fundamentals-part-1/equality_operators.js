// === vs ==

// === -> checks for both the value and the type
// == -> checks for only the value

console.log(18 === '18'); // false
console.log(18 == '18'); //true

const favourite = prompt("Enter your favourite number");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // "23" == 23 -> True 
    console.log("It's a good number");
} else if (favourite == 7) {
    console.log("7 is also a good number");
} else {
    console.log("Number is not 23 or 7");
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const hasDrivingLiscence = true;
const hasGoodVision = false;

console.log(hasDrivingLiscence && hasGoodVision);
console.log(!hasDrivingLiscence && hasGoodVision);
console.log(hasDrivingLiscence || hasGoodVision);

// const shouldDrive = hasDrivingLiscence && hasGoodVision;
// if (shouldDrive) {
//     console.log("You can drive!");
// } else {
//     console.log("you can't drive!");
// }

const isTired = false;
console.log(hasDrivingLiscence || hasGoodVision || isTired);

const shouldDrive = hasDrivingLiscence && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log("You can drive!");
} else {
    console.log("you can't drive!");
}