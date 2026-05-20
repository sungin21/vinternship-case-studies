"use strict";
// 1. Function Declaration with Optional Parameter
function displayMember(id, memberName, email) {
    console.log(`ID: ${id}, Name: ${memberName}`);
    if (email) {
        console.log(`Email: ${email}`);
    }
}
// 2. Rest Parameters
function calculateFines(...fines) {
    let total = 0;
    for (let fine of fines) {
        total += fine;
    }
    return total;
}
// 3. Default Parameter
function membershipFee(price, discountRate = 0.1) {
    return price - price * discountRate;
}
// 4. Callback Function
function greetVisitor(visitor, formatter) {
    formatter(visitor);
}
// Arrow Function
const vipGreet = (name) => {
    console.log(`Welcome VIP ${name}!`);
};
// 5. Recursion
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function generateReport(data, format) {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data
        .map(item => JSON.stringify(item))
        .join("\n");
}
let consoleGreet = (name) => {
    console.log(`Hello, ${name}!`);
};
// Interactive Challenge
// displayMember
displayMember(1, "Alice", "alice@example.com");
displayMember(2, "Bob");
// calculateFines
let totalFines = calculateFines(5, 10, 2.5);
console.log("Total Fines:", totalFines);
// membershipFee
console.log("Membership Fee (Default Discount):", membershipFee(100));
console.log("Membership Fee (20% Discount):", membershipFee(100, 0.2));
// greetVisitor
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);
// factorial
console.log("Factorial of 5:", factorial(5));
// Reports
let books = [
    { title: "1984" },
    { title: "The Hobbit" }
];
console.log("Text Report:");
console.log(generateReport(books));
console.log("JSON Report:");
console.log(generateReport(books, "json"));
