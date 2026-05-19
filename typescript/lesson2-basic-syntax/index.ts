let productName: string = "Bananas";

function printProduct(name: string): void {
    console.log("Product: " + name);
}

printProduct(productName);

// Single-line comment

/*
This is a multi-line comment
*/

class Store {
    open(): void {
        console.log("Store is open!");
    }
}

let store = new Store();
store.open();