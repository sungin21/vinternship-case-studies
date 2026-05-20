"use strict";
// ======================
// Singleton Pattern
// ======================
class CafeManager {
    static instance;
    constructor() { }
    static getInstance() {
        if (!CafeManager.instance) {
            CafeManager.instance =
                new CafeManager();
        }
        return CafeManager.instance;
    }
    manageCafe() {
        console.log("Cafe Manager is managing the cafe.");
    }
}
const manager1 = CafeManager.getInstance();
const manager2 = CafeManager.getInstance();
console.log(manager1 === manager2);
manager1.manageCafe();
class Latte {
    serve() {
        console.log("Serving Latte!");
    }
}
class Espresso {
    serve() {
        console.log("Serving Espresso!");
    }
}
class Tea {
    serve() {
        console.log("Serving Tea!");
    }
}
class DrinkFactory {
    static createDrink(type) {
        if (type === "latte") {
            return new Latte();
        }
        if (type === "espresso") {
            return new Espresso();
        }
        if (type === "tea") {
            return new Tea();
        }
        throw new Error("Unknown drink");
    }
}
const drink1 = DrinkFactory.createDrink("latte");
drink1.serve();
const drink2 = DrinkFactory.createDrink("espresso");
drink2.serve();
class Customer {
    update(message) {
        console.log("Customer:", message);
    }
}
class Inventory {
    update(message) {
        console.log("Inventory:", message);
    }
}
// Challenge Observer
class PromotionSystem {
    update(message) {
        console.log("Promotion:", "Special offer available!", message);
    }
}
class DrinkOrder {
    observers = [];
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyAll(message) {
        this.observers.forEach((observer) => {
            observer.update(message);
        });
    }
    completeOrder() {
        this.notifyAll("Order complete!");
    }
}
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();
class FastPrep {
    prepare() {
        console.log("Fast preparation!");
    }
}
class EcoPrep {
    prepare() {
        console.log("Eco-friendly preparation!");
    }
}
class StrongPrep {
    prepare() {
        console.log("Strong coffee preparation!");
    }
}
class Barista {
    strategy;
    constructor(strategy) {
        this.strategy =
            strategy;
    }
    setStrategy(strategy) {
        this.strategy =
            strategy;
    }
    makeDrink() {
        this.strategy.prepare();
    }
}
const barista = new Barista(new FastPrep());
barista.makeDrink();
barista.setStrategy(new EcoPrep());
barista.makeDrink();
barista.setStrategy(new StrongPrep());
barista.makeDrink();
