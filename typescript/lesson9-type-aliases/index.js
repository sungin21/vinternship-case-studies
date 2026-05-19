"use strict";
let widgetId = 42;
console.log("Product ID:", widgetId);
let currentOrderStatus = "shipped";
console.log("Order Status:", currentOrderStatus);
let productLocation = [3, 14];
console.log("Product Location:", productLocation);
let warehouseProduct = {
    id: widgetId,
    name: "Laptop",
    location: productLocation,
    price: 55000
};
console.log(warehouseProduct);
const consoleLogger = function (message) {
    console.log("[LOG]: " + message);
};
consoleLogger("Inventory updated");
let productContainer = {
    value: warehouseProduct,
    timestamp: new Date()
};
console.log(productContainer);
let idContainer = {
    value: 7,
    timestamp: new Date()
};
console.log(idContainer);
let customerData = {
    id: "CUST101",
    name: "Rahul",
    email: "rahul@example.com"
};
console.log(customerData);
const processOrder = function (orderId, callback) {
    console.log("Processing Order ID:", orderId);
    callback("shipped");
};
processOrder(1001, function (status) {
    console.log("Order Status:", status);
});
// Generic Container with Customer
let customerContainer = {
    value: customerData,
    timestamp: new Date()
};
console.log(customerContainer);
