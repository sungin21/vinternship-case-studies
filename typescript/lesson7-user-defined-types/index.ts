// Arrays
let patientIds: number[] = [101, 102, 103];

let patientNames: Array<string> = ["Alice", "Bob", "Carol"];

console.log(patientIds);
console.log(patientNames);


// Tuples
let vitalSigns: [number, number] = [120, 80];

let patientInfo: [string, number] = ["Alice", 30];

console.log(vitalSigns);
console.log(patientInfo);


// Enum
enum PatientStatus {
    Admitted,
    Discharged,
    UnderObservation
}

let patientStatus: PatientStatus = PatientStatus.Admitted;

console.log(patientStatus);


// Interface
interface Patient {
    id: number;
    name: string;
    age: number;
    status: PatientStatus;
    vitals: [number, number];
}


// Array of patients
let patients: Patient[] = [
    {
        id: 1,
        name: "Alice",
        age: 30,
        status: PatientStatus.Admitted,
        vitals: [120, 80]
    },
    {
        id: 2,
        name: "Bob",
        age: 45,
        status: PatientStatus.UnderObservation,
        vitals: [130, 85]
    }
];

console.log(patients);


// Class
class Nurse {

    constructor(public name: string) {}

    takeVitals(
        patient: Patient,
        vitals: [number, number]
    ): void {

        patient.vitals = vitals;

        console.log(
            `${this.name} updated vitals for ${patient.name}`
        );
    }
}


// Using class
let newVitals: [number, number] = [118, 76];

let nurse = new Nurse("Carol");

nurse.takeVitals(patients[0], newVitals);


// Interactive Challenge
enum Role {
    Doctor,
    Nurse,
    Admin
}

interface Staff {
    id: number;
    name: string;
    role: Role;
}


let staffMembers: Staff[] = [
    { id: 1, name: "John", role: Role.Doctor },
    { id: 2, name: "Emma", role: Role.Nurse },
    { id: 3, name: "David", role: Role.Admin }
];


function printStaffSummary(staffList: Staff[]): void {

    for (let staff of staffList) {

        console.log(
            `Name: ${staff.name}, Role: ${Role[staff.role]}`
        );
    }
}


printStaffSummary(staffMembers);