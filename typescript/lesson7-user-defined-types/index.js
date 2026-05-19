"use strict";
// Arrays
let patientIds = [101, 102, 103];
let patientNames = ["Alice", "Bob", "Carol"];
console.log(patientIds);
console.log(patientNames);
// Tuples
let vitalSigns = [120, 80];
let patientInfo = ["Alice", 30];
console.log(vitalSigns);
console.log(patientInfo);
// Enum
var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["Admitted"] = 0] = "Admitted";
    PatientStatus[PatientStatus["Discharged"] = 1] = "Discharged";
    PatientStatus[PatientStatus["UnderObservation"] = 2] = "UnderObservation";
})(PatientStatus || (PatientStatus = {}));
let patientStatus = PatientStatus.Admitted;
console.log(patientStatus);
// Array of patients
let patients = [
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
    name;
    constructor(name) {
        this.name = name;
    }
    takeVitals(patient, vitals) {
        patient.vitals = vitals;
        console.log(`${this.name} updated vitals for ${patient.name}`);
    }
}
// Using class
let newVitals = [118, 76];
let nurse = new Nurse("Carol");
nurse.takeVitals(patients[0], newVitals);
// Interactive Challenge
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
let staffMembers = [
    { id: 1, name: "John", role: Role.Doctor },
    { id: 2, name: "Emma", role: Role.Nurse },
    { id: 3, name: "David", role: Role.Admin }
];
function printStaffSummary(staffList) {
    for (let staff of staffList) {
        console.log(`Name: ${staff.name}, Role: ${Role[staff.role]}`);
    }
}
printStaffSummary(staffMembers);
