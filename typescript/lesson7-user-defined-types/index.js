"use strict";
let student1 = {
    id: 1,
    name: "Alex",
    course: "MERN Stack"
};
console.log(student1);
let employee1 = {
    empId: 101,
    empName: "John",
    salary: 50000
};
console.log(employee1);
// Function using custom type
function printStudent(student) {
    console.log(`Student: ${student.name}, Course: ${student.course}`);
}
printStudent(student1);
