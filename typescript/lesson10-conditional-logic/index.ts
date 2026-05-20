// 1. Check eligibility
function checkEligibility(
    attendance: number
): boolean {

    if (attendance >= 75) {

        console.log(
            "Eligible: attendance is sufficient."
        );

        return true;

    } else {

        console.log(
            "Not eligible: attendance below 75%."
        );

        return false;
    }
}


// 2. Pass or Fail
function passOrFail(
    score: number
): boolean {

    if (score >= 40) {

        console.log("Result: Pass");

        return true;

    } else {

        console.log("Result: Fail");

        return false;
    }
}


// 3. Assign Grade
function assignGrade(
    score: number
): string {

    if (score >= 90) {

        return "A";

    } else if (score >= 80) {

        return "B";

    } else if (score >= 70) {

        return "C";

    } else if (score >= 60) {

        return "D";

    } else {

        return "F";
    }
}


// 4. Provide Feedback
function provideFeedback(
    grade: string
): void {

    switch (grade) {

        case "A":

            console.log(
                "Feedback: Excellent performance!"
            );

            break;

        case "B":

            console.log(
                "Feedback: Great job! Keep it up."
            );

            break;

        case "C":

            console.log(
                "Feedback: Good effort; aim higher next time."
            );

            break;

        case "D":

            console.log(
                "Feedback: Needs improvement."
            );

            break;

        default:

            console.log(
                "Feedback: Unsatisfactory performance."
            );

            break;
    }
}


// Main Function
function evaluateStudent(
    attendance: number,
    score: number
): void {

    if (!checkEligibility(attendance)) {
        return;
    }

    if (!passOrFail(score)) {
        return;
    }

    let grade: string = assignGrade(score);

    console.log(
        "Assigned Grade:",
        grade
    );

    provideFeedback(grade);
}


// Example Run
evaluateStudent(80, 85);


// Interactive Challenge

// if statement
function checkSign(
    num: number
): void {

    if (num > 0) {

        console.log(
            num + " is positive"
        );
    }
}

checkSign(10);


// if...else statement
function evenOrOdd(
    num: number
): void {

    if (num % 2 === 0) {

        console.log(
            num + " is even"
        );

    } else {

        console.log(
            num + " is odd"
        );
    }
}

evenOrOdd(7);


// else if ladder
function getGrade(
    score: number
): string {

    if (score >= 90) {

        return "A";

    } else if (score >= 80) {

        return "B";

    } else if (score >= 70) {

        return "C";

    } else if (score >= 60) {

        return "D";

    } else {

        return "F";
    }
}

console.log(
    "Grade:",
    getGrade(88)
);


// switch statement
function feedbackMessage(
    grade: string
): void {

    switch (grade) {

        case "A":

            console.log("Excellent");

            break;

        case "B":

            console.log("Very Good");

            break;

        case "C":

            console.log("Good");

            break;

        case "D":

            console.log("Needs Improvement");

            break;

        default:

            console.log("Fail");

            break;
    }
}

feedbackMessage("B");