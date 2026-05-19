// 1. Primitive Alias
type ProductID = number;

let widgetId: ProductID = 42;

console.log("Product ID:", widgetId);


// 2. Union Alias
type OrderStatus =
    "pending" |
    "shipped" |
    "returned";

let currentOrderStatus: OrderStatus = "shipped";

console.log("Order Status:", currentOrderStatus);


// 3. Tuple Alias
type Coordinate = [
    aisle: number,
    shelf: number
];

let productLocation: Coordinate = [3, 14];

console.log("Product Location:", productLocation);


// 4. Object Alias
type Product = {
    id: ProductID;
    name: string;
    location: Coordinate;
    price: number;
};

let warehouseProduct: Product = {
    id: widgetId,
    name: "Laptop",
    location: productLocation,
    price: 55000
};

console.log(warehouseProduct);


// 5. Function Type Alias
type Logger = (
    message: string
) => void;

const consoleLogger: Logger =
    function(message: string): void {

        console.log(
            "[LOG]: " + message
        );
    };

consoleLogger("Inventory updated");


// 6. Generic Alias
type Container<T> = {
    value: T;
    timestamp: Date;
};

let productContainer:
    Container<Product> = {

    value: warehouseProduct,
    timestamp: new Date()
};

console.log(productContainer);


let idContainer:
    Container<ProductID> = {

    value: 7,
    timestamp: new Date()
};

console.log(idContainer);


// Interactive Challenge

// Customer ID Alias
type CustomerID = string;


// Customer Object Alias
type Customer = {
    id: CustomerID;
    name: string;
    email?: string;
};


let customerData: Customer = {
    id: "CUST101",
    name: "Rahul",
    email: "rahul@example.com"
};

console.log(customerData);


// Function Type Alias
type ProcessOrder = (
    orderId: number,
    callback: (status: OrderStatus) => void
) => void;


const processOrder: ProcessOrder =
    function(orderId, callback): void {

        console.log(
            "Processing Order ID:",
            orderId
        );

        callback("shipped");
    };


processOrder(
    1001,
    function(status): void {

        console.log(
            "Order Status:",
            status
        );
    }
);


// Generic Container with Customer
let customerContainer:
    Container<Customer> = {

    value: customerData,
    timestamp: new Date()
};

console.log(customerContainer);