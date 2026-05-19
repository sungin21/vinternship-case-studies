
let studentName: string = "Sungin";
let age: number = 21;
let isStudent: boolean = true;

console.log(studentName);
console.log(age);
console.log(isStudent);

// Array
let marks: number[] = [85, 90, 78];

console.log("Marks:", marks);

// Tuple
let person: [string, number] = ["Rahul", 25];

console.log("Tuple:", person);

// Enum
enum Direction {
    North,
    South,
    East,
    West
}

let move: Direction = Direction.North;

console.log("Direction:", move);

// Object
let user: { name: string; city: string } = {
    name: "Sungin",
    city: "Bangalore"
};

console.log(user);