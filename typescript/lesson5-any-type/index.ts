let surveyAnswer: any;

surveyAnswer = "Yes";
console.log("Answer:", surveyAnswer);

surveyAnswer = 5;
console.log("Answer:", surveyAnswer);

surveyAnswer = ["Option A", "Option B"];
console.log("Answer:", surveyAnswer);


// Array with any type
let allAnswers: any[] = [];

allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });

for (let ans of allAnswers) {
    console.log("Received answer:", ans);
}


// Interactive Challenge
let recordedAnswers: { [key: number]: any } = {};

function recordAnswer(questionId: number, answer: any): void {
    recordedAnswers[questionId] = answer;
}


// Add different answer types
recordAnswer(1, "Blue");
recordAnswer(2, 42);
recordAnswer(3, ["Apple", "Banana"]);


// Print all answers
console.log("Recorded Answers:");
console.log(recordedAnswers);