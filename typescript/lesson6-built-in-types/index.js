"use strict";
let studentName = "Sungin";
let age = 21;
let isStudent = true;
console.log(studentName);
console.log(age);
console.log(isStudent);
// Array
let marks = [85, 90, 78];
console.log("Marks:", marks);
// Tuple
let person = ["Rahul", 25];
console.log("Tuple:", person);
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let move = Direction.North;
console.log("Direction:", move);
// Object
let user = {
    name: "Sungin",
    city: "Bangalore"
};
console.log(user);
