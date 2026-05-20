"use strict";
// Example 1: Optional Parameter
function greetUser(name, age) {
    if (typeof age === "number") {
        console.log(`Hello ${name}, you are ${age} years old.`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greetUser("Alice");
greetUser("Bob", 30);
// Example 2: Default Parameter
function greetWithDefault(name, age = 25) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}
greetWithDefault("Charlie");
greetWithDefault("Diana", 40);
// Example 3: Default Parameter Function
function addNumbers(x, y = 10) {
    return x + y;
}
console.log(addNumbers(5));
console.log(addNumbers(5, 20));
// Interactive Challenge
// describePerson
function describePerson(name, age) {
    if (typeof age === "number") {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else {
        console.log(`Name: ${name}, Age: Unknown`);
    }
}
// calculatePrice
function calculatePrice(basePrice, discount = 0.1) {
    return basePrice - (basePrice * discount);
}
// Test Calls
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
