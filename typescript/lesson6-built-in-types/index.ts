let accountBalance: number = 1000.50;
let accountName: string = "Savings Account";
let isActive: boolean = true;

console.log(accountBalance);
console.log(accountName);
console.log(isActive);


// Array
let marks: number[] = [85, 90, 78];
console.log("Marks:", marks);


// Tuple
let person: [string, number] = ["User", 25];
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


// Symbol
const UNIQUE_KEY = Symbol("txn");

let transaction = {
    [UNIQUE_KEY]: "TXN1001"
};

console.log(transaction);


// Null & Undefined
let missingValue: null = null;
let notSet: undefined = undefined;

console.log(missingValue);
console.log(notSet);


// Object
let account: object = {
    id: 1,
    name: "Main Account"
};

console.log(account);


// Void Function
function printStatement(): void {
    console.log("Statement printed.");
}

printStatement();


// Never Function
function criticalError(message: string): never {
    throw new Error(message);
}


// Interactive Challenge
function processTransaction(
    amount: number,
    description: string | undefined,
    isCredit: boolean
): void {

    if (amount < 0) {
        criticalError("Negative transaction amount!");
    }

    let desc = description ?? "No Description";

    console.log(
        `Transaction: ${desc}, Amount: ${amount}, Credit: ${isCredit}`
    );
}

processTransaction(5000, "Salary Credit", true);

processTransaction(2000, undefined, false);