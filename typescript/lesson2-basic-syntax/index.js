"use strict";
let productName = "Bananas";
function printProduct(name) {
    console.log("Product: " + name);
}
printProduct(productName);
// Single-line comment
/*
This is a multi-line comment
*/
class Store {
    open() {
        console.log("Store is open!");
    }
}
let store = new Store();
store.open();
