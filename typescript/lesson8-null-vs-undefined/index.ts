// null example
let a: null = null;

console.log(a);
console.log(typeof a);


// undefined example
let b: undefined = undefined;

console.log(b);
console.log(typeof b);


// number or null
let age: number | null = null;

console.log(age);

age = 28;

console.log(age);


// uninitialized variable
let c: number;

console.log(c);


// function with void return
function greet(name: string): void {
    console.log(`Hello ${name}`);
}

let result = greet("Alice");

console.log(result);


// User type
type User = {
    name: string;
    age: number | null;
    email?: string;
};


// Users
let user1: User = {
    name: "John Doe",
    age: null,
    email: "john@example.com"
};

let user2: User = {
    name: "Jane Doe",
    age: 25
};


// Function handling null & undefined
function printUser(user: User): void {

    let ageInfo =
        user.age === null
            ? "Age not provided"
            : `Age: ${user.age}`;

    let emailInfo =
        user.email
            ? `Email: ${user.email}`
            : "Email not set";

    console.log(`${user.name} - ${ageInfo}, ${emailInfo}`);
}

printUser(user1);
printUser(user2);


// Interactive Challenge
type Profile = {
    username: string;
    bio: string | null;
    avatarUrl?: string;
};


let profile1: Profile = {
    username: "alex123",
    bio: null
};

let profile2: Profile = {
    username: "emma456",
    bio: "Frontend Developer",
    avatarUrl: "avatar.png"
};


function showProfile(profile: Profile): void {

    let bioText =
        profile.bio === null
            ? "No bio available"
            : profile.bio;

    let avatar =
        profile.avatarUrl ?? "default-avatar.png";

    console.log(
        `Username: ${profile.username}`
    );

    console.log(
        `Bio: ${bioText}`
    );

    console.log(
        `Avatar: ${avatar}`
    );
}


showProfile(profile1);
showProfile(profile2);