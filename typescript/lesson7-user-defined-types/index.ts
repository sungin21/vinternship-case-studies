type Student = {
    id: number;
    name: string;
    course: string;
};

let student1: Student = {
    id: 1,
    name: "Alex",
    course: "MERN Stack"
};

console.log(student1);

// Interface example
interface Employee {
    empId: number;
    empName: string;
    salary: number;
}

let employee1: Employee = {
    empId: 101,
    empName: "John",
    salary: 50000
};

console.log(employee1);

// Function using custom type
function printStudent(student: Student): void {
    console.log(
        `Student: ${student.name}, Course: ${student.course}`
    );
}

printStudent(student1);