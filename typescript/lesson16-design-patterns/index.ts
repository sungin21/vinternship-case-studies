// ======================
// Singleton Pattern
// ======================

class CafeManager {

    private static instance:
        CafeManager;

    private constructor() {}

    static getInstance():
        CafeManager {

        if (
            !CafeManager.instance
        ) {

            CafeManager.instance =
                new CafeManager();
        }

        return CafeManager.instance;
    }

    manageCafe(): void {

        console.log(
            "Cafe Manager is managing the cafe."
        );
    }
}


const manager1 =
    CafeManager.getInstance();

const manager2 =
    CafeManager.getInstance();

console.log(
    manager1 === manager2
);

manager1.manageCafe();


// ======================
// Factory Pattern
// ======================

interface Drink {

    serve(): void;
}


class Latte
implements Drink {

    serve(): void {

        console.log(
            "Serving Latte!"
        );
    }
}


class Espresso
implements Drink {

    serve(): void {

        console.log(
            "Serving Espresso!"
        );
    }
}


class Tea
implements Drink {

    serve(): void {

        console.log(
            "Serving Tea!"
        );
    }
}


class DrinkFactory {

    static createDrink(
        type: string
    ): Drink {

        if (
            type === "latte"
        ) {

            return new Latte();
        }

        if (
            type === "espresso"
        ) {

            return new Espresso();
        }

        if (
            type === "tea"
        ) {

            return new Tea();
        }

        throw new Error(
            "Unknown drink"
        );
    }
}


const drink1 =
    DrinkFactory.createDrink(
        "latte"
    );

drink1.serve();


const drink2 =
    DrinkFactory.createDrink(
        "espresso"
    );

drink2.serve();


// ======================
// Observer Pattern
// ======================

interface Observer {

    update(
        message: string
    ): void;
}


class Customer
implements Observer {

    update(
        message: string
    ): void {

        console.log(
            "Customer:",
            message
        );
    }
}


class Inventory
implements Observer {

    update(
        message: string
    ): void {

        console.log(
            "Inventory:",
            message
        );
    }
}


// Challenge Observer
class PromotionSystem
implements Observer {

    update(
        message: string
    ): void {

        console.log(
            "Promotion:",
            "Special offer available!",
            message
        );
    }
}


class DrinkOrder {

    private observers:
        Observer[] = [];

    addObserver(
        observer: Observer
    ): void {

        this.observers.push(
            observer
        );
    }

    notifyAll(
        message: string
    ): void {

        this.observers.forEach(
            (observer) => {

                observer.update(
                    message
                );
            }
        );
    }

    completeOrder():
        void {

        this.notifyAll(
            "Order complete!"
        );
    }
}


const order =
    new DrinkOrder();

order.addObserver(
    new Customer()
);

order.addObserver(
    new Inventory()
);

order.addObserver(
    new PromotionSystem()
);

order.completeOrder();


// ======================
// Strategy Pattern
// ======================

interface PrepStrategy {

    prepare(): void;
}


class FastPrep
implements PrepStrategy {

    prepare(): void {

        console.log(
            "Fast preparation!"
        );
    }
}


class EcoPrep
implements PrepStrategy {

    prepare(): void {

        console.log(
            "Eco-friendly preparation!"
        );
    }
}


class StrongPrep
implements PrepStrategy {

    prepare(): void {

        console.log(
            "Strong coffee preparation!"
        );
    }
}


class Barista {

    private strategy:
        PrepStrategy;

    constructor(
        strategy:
        PrepStrategy
    ) {

        this.strategy =
            strategy;
    }

    setStrategy(
        strategy:
        PrepStrategy
    ): void {

        this.strategy =
            strategy;
    }

    makeDrink():
        void {

        this.strategy.prepare();
    }
}


const barista =
    new Barista(
        new FastPrep()
    );

barista.makeDrink();

barista.setStrategy(
    new EcoPrep()
);

barista.makeDrink();

barista.setStrategy(
    new StrongPrep()
);

barista.makeDrink();