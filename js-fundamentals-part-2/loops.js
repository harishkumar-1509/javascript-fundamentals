// for loop
for (let i = 0; i <= 10; i++) {
    console.log(`Loop - ${i}`);
}

const numbers = [1, 2, 3, 4, 5,];
const types = [];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    // types[i] = typeof numbers[i];
    types.push(typeof numbers[i]);
}

// continue and break loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) continue;
    oddNumbers.push(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    // break means completely breaks the loop execution.
    if (numbers[i] % 2 == 0) break;
    oddNumbers.push(numbers[i]); // oddNumbers = [1];
}

// reverse looping
for (let i = numbers.length; i >= 0; i--) {
    console.log(numbers[i]);
}
 
// while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) { 
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log(`Loop is about to end.....`);
}