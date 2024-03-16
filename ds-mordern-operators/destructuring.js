'use-strict';

const restaurant = {
    name: 'Classica Italiano',
    location: 'Via Angelo Tavanti 23',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ name, location }) {
        console.log(`Hi ${name}!, your order will be delivered to ${location} soon..`);
    }
};

// Destructuring Array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

const [firstNew, , secondNew] = restaurant.categories;
console.log(firstNew, secondNew);

// Variable Swapping
[firstNew, secondNew] = [secondNew, firstNew]

const [starter, mainCourse] = restaurant.order(1, 1);
console.log(starter, mainCourse);

const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j); 

// Nested Destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructuring Objects
const { name, location, categories } = restaurant;
console.log(name, location, categories);

// Giving custom field names while destructuring
const { name: restaurantName, location: restaurantLocation, categories: restaurantCategories } = restaurant;
console.log(restaurantName, restaurantLocation, restaurantCategories);

// Default value
const { menu = [], starterMenu: startersList = [] } = restaurant;

// Mutating Variables
let a = 99;
let b = 100;
const obj = { a: 23, b: 7, c: 31 };
({ a, b } = obj);
console.log(a, b);

restaurant.orderDelivery({ name: "Harish", location: "Bangalore" });