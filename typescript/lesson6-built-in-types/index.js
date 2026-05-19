"use strict";
let accountBalance = 1000.50;
let accountName = "Savings Account";
let isActive = true;
console.log(accountBalance);
console.log(accountName);
console.log(isActive);
// Array
let marks = [85, 90, 78];
console.log("Marks:", marks);
// Tuple
let person = ["User", 25];
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
// Symbol
const UNIQUE_KEY = Symbol("txn");
let transaction = {
    [UNIQUE_KEY]: "TXN1001"
};
console.log(transaction);
// Null & Undefined
let missingValue = null;
let notSet = undefined;
console.log(missingValue);
console.log(notSet);
// Object
let account = {
    id: 1,
    name: "Main Account"
};
console.log(account);
// Void Function
function printStatement() {
    console.log("Statement printed.");
}
printStatement();
// Never Function
function criticalError(message) {
    throw new Error(message);
}
// Interactive Challenge
function processTransaction(amount, description, isCredit) {
    if (amount < 0) {
        criticalError("Negative transaction amount!");
    }
    let desc = description ?? "No Description";
    console.log(`Transaction: ${desc}, Amount: ${amount}, Credit: ${isCredit}`);
}
processTransaction(5000, "Salary Credit", true);
processTransaction(2000, undefined, false);
