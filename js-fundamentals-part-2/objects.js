// Object
const harish = {
    firstName: 'Harish',
    lastName: 'Kumar',
    jobTitle: 'SDE',
    age: 2024-1998,
    friends: ['John', 'Smith', 'Peter'],
    hasDriversLiscence: true,
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    //  }

    // calcAge: function () { 
    //     console.log(this);
    //      return 2024 - this.birthYear;
    // }
    
    calcAge: function () { 
        // Setting a new property for the object
        this.age = 2024-this.birthYear;
        return this.age;
    },
    getSummary: function () { 
        return `${this.firstName} is a ${this.calcAge()} year old ${this.jobTitle}  and he has ${this.hasDriversLiscence?"a":"no"} drivers liscence`;
    }
}

console.log(harish.lastName);
console.log(harish['lastName']);

const query = prompt("What do you what to know abt harish? (firstName/lastName/jobTitle/age/friends)");
console.log(harish[query]);

// Cehcking if the key exists ( truthy/falsy )
if(harish[query]){
    console.log(harish[query]);
}else{
    console.log("detail not avaialble for the field you have entered");
}

harish.location = "Bangalore";
harish["gmail"] = "harish@gmail.com";
console.log(harish);

console.log(`${harish.firstName} has ${harish.friends.length} friends and his best friend is ${harish.friends[0]}`);

// Object Methods
console.log(harish.calcAge(1998));
console.log(harish.calcAge['calcAge'](1998));

console.log(harish.age);