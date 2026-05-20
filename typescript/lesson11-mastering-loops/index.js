"use strict";
// Transactions Array
const transactions = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];
// Inventory Object
const inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};
// Visitors Array
const visitors = [
    "Alice",
    "Bob",
    "Carol"
];
// 1. for Loop
let totalProcessed = 0;
for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];
    if (tx.type === "cancelled") {
        continue;
    }
    if (tx.type === "priority") {
        console.log("Priority transaction encountered, stopping.");
        break;
    }
    console.log(`Processing transaction ${tx.id}: ${tx.type}`);
    totalProcessed++;
}
console.log(`Total processed: ${totalProcessed}`);
// 2. while Loop
let queue = [...transactions];
let processedWhile = 0;
while (queue.length > 0) {
    const tx = queue.shift();
    if (!tx) {
        break;
    }
    if (tx.type === "cancelled") {
        continue;
    }
    console.log(`While loop processed: ${tx.id}`);
    processedWhile++;
}
console.log(`Processed in while loop: ${processedWhile}`);
// 3. do...while Loop
let pendingReturns = 0;
let idx = 0;
do {
    const tx = transactions[idx];
    if (tx.type === "return") {
        console.log(`Handling return transaction ${tx.id}`);
        pendingReturns++;
    }
    idx++;
} while (idx < transactions.length);
console.log(`Pending returns: ${pendingReturns}`);
// 4. Counter Object
let transactionCounter = {
    checkout: 0,
    return: 0,
    cancelled: 0,
    priority: 0
};
for (let tx of transactions) {
    transactionCounter[tx.type]++;
}
console.log(transactionCounter);
// 5. while(true) Example
let priorityFound = false;
let checkIndex = 0;
while (true) {
    const tx = transactions[checkIndex];
    if (!tx) {
        break;
    }
    console.log(`Checking transaction ${tx.id}`);
    if (tx.type === "priority") {
        console.log("Priority transaction found!");
        priorityFound = true;
        break;
    }
    checkIndex++;
}
console.log("Priority Found:", priorityFound);
// 6. Dynamic do...while Queue
let returnQueue = [
    { id: 10, type: "return" }
];
let returnIndex = 0;
do {
    let tx = returnQueue[returnIndex];
    console.log(`Dynamic return processed: ${tx.id}`);
    returnIndex++;
} while (returnIndex < returnQueue.length);
// 7. for...in Loop
for (let bookTitle in inventory) {
    inventory[bookTitle] = 0;
}
console.log("Updated Inventory:");
console.log(inventory);
// 8. Reverse Visitors
for (let i = visitors.length - 1; i >= 0; i--) {
    console.log(`Visitor: ${visitors[i]}`);
}
