let userName: string | null = null;
let userEmail: string | undefined = undefined;

console.log("User Name:", userName);
console.log("User Email:", userEmail);

// Assigning values later
userName = "Alex";
userEmail = "alex@example.com";

console.log("Updated Name:", userName);
console.log("Updated Email:", userEmail);

// Function with optional parameter
function greet(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}`);
    } else {
        console.log("Hello, Guest");
    }
}

greet("John");
greet();

// Null checking example
function printLength(text: string | null): void {
    if (text !== null) {
        console.log("Length:", text.length);
    } else {
        console.log("Text is null");
    }
}

printLength("TypeScript");
printLength(null);