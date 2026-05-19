var city: string = "Bangalore";
var temperature: number = 28;
var isRaining = false;

console.log("City: " + city);
console.log("Temperature: " + temperature);
console.log("Is Raining: " + isRaining);

function weatherReport(city: string, temp: number, rain: boolean): void {
    console.log(`In ${city}, it is ${temp}°C. Is it raining? ${rain}`);
}

weatherReport(city, temperature, isRaining);

// Variable scope example
var globalVar = "I am global";

class GroceryStore {
    storeName = "Main Branch";

    show(): void {
        var localVar = "I am local";
        console.log(localVar);
    }
}

let myStore = new GroceryStore();
myStore.show();