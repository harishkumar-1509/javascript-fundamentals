// Switch statements
const day = "monday";
switch (day) {
    case "monday":
        console.log(`Do monday Activities`);
        break;
    case "tuesday":
        console.log(`Do tuesday Activities`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`Do wednesday Activities`);
        break;
    default:
        console.log(`Invalid day: ${day}`);
}
 
// Ternary Operators
const age = 18;
age>=18?console.log(`I like to dring wine!`):console.log(`I like to dring water!`);
