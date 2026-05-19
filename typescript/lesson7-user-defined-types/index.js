"use strict";
// Arrays
let patientIds = [101, 102, 103];
let patientNames = [
    "Alice",
    "Bob",
    "Carol"
];
console.log(patientIds);
console.log(patientNames);
// Tuples
let vitalSigns = [120, 80];
let patientInfo = ["Alice", 30];
console.log(vitalSigns);
console.log(patientInfo);
// Enum
var HospitalStatus;
(function (HospitalStatus) {
    HospitalStatus[HospitalStatus["Admitted"] = 0] = "Admitted";
    HospitalStatus[HospitalStatus["Discharged"] = 1] = "Discharged";
    HospitalStatus[HospitalStatus["UnderObservation"] = 2] = "UnderObservation";
})(HospitalStatus || (HospitalStatus = {}));
let currentHospitalStatus = HospitalStatus.Admitted;
console.log(currentHospitalStatus);
// Array of patients
let patientRecords = [
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
    nurseName;
    constructor(inputName) {
        this.nurseName = inputName;
    }
    takeVitals(patient, newVitals) {
        patient.patientVitals = newVitals;
        console.log(this.nurseName +
            " updated vitals for " +
            patient.patientName);
    }
}
// Using class
let latestVitals = [118, 76];
let nurseWorker = new NurseWorker("Carol");
nurseWorker.takeVitals(patientRecords[0], latestVitals);
// Interactive Challenge
var EmployeeRole;
(function (EmployeeRole) {
    EmployeeRole[EmployeeRole["Doctor"] = 0] = "Doctor";
    EmployeeRole[EmployeeRole["Nurse"] = 1] = "Nurse";
    EmployeeRole[EmployeeRole["Admin"] = 2] = "Admin";
})(EmployeeRole || (EmployeeRole = {}));
let hospitalStaff = [
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
function printHospitalStaff(staffList) {
    for (let worker of staffList) {
        console.log("Name: " +
            worker.employeeName +
            ", Role: " +
            EmployeeRole[worker.employeeRole]);
    }
}
printHospitalStaff(hospitalStaff);
