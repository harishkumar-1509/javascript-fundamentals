const friends = ['Harish', 'Chiran', 'Bob'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2009);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutate array
friends[2] = 'Jay';
console.log(friends);

// Array with different data type elements
const harish = ['Harish', 'Kumar', 2024 - 1998, 'SDE', friends]
console.log(harish);

// Basic array operations
const newFriends = ["Jay", "Har", "Kumar"];
newFriends.push("John"); // Adding a new element to the end of the array
console.log(newFriends);

newFriends.unshift("John"); // Adding a new element to the beginning of the array
console.log(newFriends);

newFriends.pop(); // Removing an element at the end of the array

newFriends.shift(); // Removing an element at the beginning of the array

console.log(newFriends.indexOf('Har')); // Finding the index of the given element in the array
console.log(newFriends.indexOf("Bob")); // (-1) because element is not found

console.log(newFriends.includes("Har")); // Finding if the given element is present in the array ( return a boolean )