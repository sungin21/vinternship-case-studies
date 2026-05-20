// Union Type
type StringOrNumber =
    string | number;


let value: StringOrNumber;

value = "hello";

console.log(value);

value = 42;

console.log(value);


// Intersection Types
type Learner = {
    id: string;
    quizzesCompleted: number;
};


type Instructor = {
    id: string;
    coursesTaught: number;
};


type Admin = {
    id: string;
    accessLevel:
        "basic" | "super";
};


type MultiRoleUser =
    Learner & Instructor;


type AnyUser =
    Learner |
    Instructor |
    Admin;


// Function using Union Types
function printUserInfo(
    user: AnyUser
): void {

    if (
        "quizzesCompleted" in user
    ) {

        console.log(
            `Learner: ${user.quizzesCompleted} quizzes completed`
        );

    } else if (
        "coursesTaught" in user
    ) {

        console.log(
            `Instructor: ${user.coursesTaught} courses taught`
        );

    } else {

        console.log(
            `Admin Access: ${user.accessLevel}`
        );
    }
}


// Using Intersection Type
const alice:
    MultiRoleUser = {

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


// Mapped Types
type ModuleStatus =
    "not-started" |
    "in-progress" |
    "completed";


type ProgressMap<
    Modules extends string
> = {

    [K in Modules]:
        ModuleStatus;
};


type MyModules =
    "quiz1" |
    "video2" |
    "assignment3";


type MyProgress =
    ProgressMap<MyModules>;


const learnerProgress:
    MyProgress = {

    quiz1: "completed",
    video2: "in-progress",
    assignment3: "not-started"
};

console.log(
    learnerProgress
);


// Conditional Types
type FeedbackAllowed<T extends ModuleStatus> =

    T extends "completed"
        ? string
        : never;


type FeedbackForQuiz =
    FeedbackAllowed<"completed">;


let feedback:
    FeedbackForQuiz =
    "Excellent work!";

console.log(feedback);


// Utility Types
type LearnerReport = {

    name: string;
    score: number;
    feedback: string;
};


type DraftReport =
    Partial<LearnerReport>;


const reportDraft:
    DraftReport = {

    name: "John"
};

console.log(reportDraft);


type ReadonlyReport =
    Readonly<LearnerReport>;


const finalReport:
    ReadonlyReport = {

    name: "Emma",
    score: 95,
    feedback: "Great job"
};

console.log(finalReport);


// Interactive Challenge

// InstructorOrAdmin
type InstructorOrAdmin =
    Instructor | Admin;


const user1:
    InstructorOrAdmin = {

    id: "I500",
    coursesTaught: 8
};

console.log(user1);


const user2:
    InstructorOrAdmin = {

    id: "A500",
    accessLevel: "basic"
};

console.log(user2);


// ReadonlyAssignment
type Assignment = {

    title: string;
    dueDate: Date;
    points: number;
};


type ReadonlyAssignment =
    Readonly<Assignment>;


const assignmentData:
    ReadonlyAssignment = {

    title: "TypeScript Project",
    dueDate: new Date(),
    points: 100
};

console.log(
    assignmentData
);


// StatsAsStrings
type LearnerStats = {

    quizzes: number;
    videos: number;
    assignments: number;
};


type StatsAsStrings = {

    [K in keyof LearnerStats]:
        string;
};


const statsData:
    StatsAsStrings = {

    quizzes: "10",
    videos: "5",
    assignments: "7"
};

console.log(statsData);