// Arrays
let patientIds: number[] = [101, 102, 103];

let patientNames: string[] = [
    "Alice",
    "Bob",
    "Carol"
];

console.log(patientIds);
console.log(patientNames);


// Tuples
let vitalSigns: [number, number] = [120, 80];

let patientInfo: [string, number] = ["Alice", 30];

console.log(vitalSigns);
console.log(patientInfo);


// Enum
enum HospitalStatus {
    Admitted,
    Discharged,
    UnderObservation
}

let currentHospitalStatus: HospitalStatus =
    HospitalStatus.Admitted;

console.log(currentHospitalStatus);


// Interface
interface PatientRecord {
    patientId: number;
    patientName: string;
    patientAge: number;
    patientStatus: HospitalStatus;
    patientVitals: [number, number];
}


// Array of patients
let patientRecords: PatientRecord[] = [
    {
        patientId: 1,
        patientName: "Alice",
        patientAge: 30,
        patientStatus: HospitalStatus.Admitted,
        patientVitals: [120, 80]
    },
    {
        patientId: 2,
        patientName: "Bob",
        patientAge: 45,
        patientStatus: HospitalStatus.UnderObservation,
        patientVitals: [130, 85]
    }
];

console.log(patientRecords);


// Class
class NurseWorker {

    nurseName: string;

    constructor(inputName: string) {
        this.nurseName = inputName;
    }

    takeVitals(
        patient: PatientRecord,
        newVitals: [number, number]
    ): void {

        patient.patientVitals = newVitals;

        console.log(
            this.nurseName +
            " updated vitals for " +
            patient.patientName
        );
    }
}


// Using class
let latestVitals: [number, number] = [118, 76];

let nurseWorker = new NurseWorker("Carol");

nurseWorker.takeVitals(
    patientRecords[0],
    latestVitals
);


// Interactive Challenge
enum EmployeeRole {
    Doctor,
    Nurse,
    Admin
}


interface StaffMember {
    staffId: number;
    employeeName: string;
    employeeRole: EmployeeRole;
}


let hospitalStaff: StaffMember[] = [
    {
        staffId: 1,
        employeeName: "John",
        employeeRole: EmployeeRole.Doctor
    },
    {
        staffId: 2,
        employeeName: "Emma",
        employeeRole: EmployeeRole.Nurse
    },
    {
        staffId: 3,
        employeeName: "David",
        employeeRole: EmployeeRole.Admin
    }
];


function printHospitalStaff(
    staffList: StaffMember[]
): void {

    for (let worker of staffList) {

        console.log(
            "Name: " +
            worker.employeeName +
            ", Role: " +
            EmployeeRole[worker.employeeRole]
        );
    }
}


printHospitalStaff(hospitalStaff);