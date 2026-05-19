"use strict";
let data = "Hello TypeScript";
console.log("Value:", data);
console.log("Type:", typeof data);
// Changing to number
data = 100;
console.log("Value:", data);
console.log("Type:", typeof data);
// Changing to boolean
data = true;
console.log("Value:", data);
console.log("Type:", typeof data);
// Function using any type
function display(value) {
    console.log("Displaying:", value);
}
display("Text");
display(500);
display(false);
// Array with any type
let mixedData = ["Apple", 10, true];
console.log(mixedData);
