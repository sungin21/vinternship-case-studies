"use strict";
let value;
value = "hello";
console.log(value);
value = 42;
console.log(value);
// Function using Union Types
function printUserInfo(user) {
    if ("quizzesCompleted" in user) {
        console.log(`Learner: ${user.quizzesCompleted} quizzes completed`);
    }
    else if ("coursesTaught" in user) {
        console.log(`Instructor: ${user.coursesTaught} courses taught`);
    }
    else {
        console.log(`Admin Access: ${user.accessLevel}`);
    }
}
// Using Intersection Type
const alice = {
    id: "alice123",
    quizzesCompleted: 10,
    coursesTaught: 2
};
console.log(alice);
// Calling Function
printUserInfo({
    id: "L101",
    quizzesCompleted: 5
});
printUserInfo({
    id: "I101",
    coursesTaught: 3
});
printUserInfo({
    id: "A101",
    accessLevel: "super"
});
const learnerProgress = {
    quiz1: "completed",
    video2: "in-progress",
    assignment3: "not-started"
};
console.log(learnerProgress);
let feedback = "Excellent work!";
console.log(feedback);
const reportDraft = {
    name: "John"
};
console.log(reportDraft);
const finalReport = {
    name: "Emma",
    score: 95,
    feedback: "Great job"
};
console.log(finalReport);
const user1 = {
    id: "I500",
    coursesTaught: 8
};
console.log(user1);
const user2 = {
    id: "A500",
    accessLevel: "basic"
};
console.log(user2);
const assignmentData = {
    title: "TypeScript Project",
    dueDate: new Date(),
    points: 100
};
console.log(assignmentData);
const statsData = {
    quizzes: "10",
    videos: "5",
    assignments: "7"
};
console.log(statsData);
