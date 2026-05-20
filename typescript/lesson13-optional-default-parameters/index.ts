// Example 1: Optional Parameter
function greetUser(
    name: string,
    age?: number
): void {

    if (typeof age === "number") {

        console.log(
            `Hello ${name}, you are ${age} years old.`
        );

    } else {

        console.log(
            `Hello ${name}`
        );
    }
}


greetUser("Alice");

greetUser("Bob", 30);


// Example 2: Default Parameter
function greetWithDefault(
    name: string,
    age: number = 25
): void {

    console.log(
        `Hello ${name}, you are ${age} years old.`
    );
}


greetWithDefault("Charlie");

greetWithDefault("Diana", 40);


// Example 3: Default Parameter Function
function addNumbers(
    x: number,
    y: number = 10
): number {

    return x + y;
}


console.log(addNumbers(5));

console.log(addNumbers(5, 20));


// Interactive Challenge

// describePerson
function describePerson(
    name: string,
    age?: number
): void {

    if (typeof age === "number") {

        console.log(
            `Name: ${name}, Age: ${age}`
        );

    } else {

        console.log(
            `Name: ${name}, Age: Unknown`
        );
    }
}


// calculatePrice
function calculatePrice(
    basePrice: number,
    discount: number = 0.1
): number {

    return basePrice - (
        basePrice * discount
    );
}


// Test Calls
describePerson("Eve");

describePerson("Frank", 28);


console.log(
    calculatePrice(100)
);

console.log(
    calculatePrice(100, 0.2)
);