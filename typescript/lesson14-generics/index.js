"use strict";
// Generic Function
function identity(value) {
    return value;
}
let numberResult = identity(42);
console.log(numberResult);
let stringResult = identity("hello");
console.log(stringResult);
let booleanResult = identity(true);
console.log(booleanResult);
// Generic vs Any
function echoAny(arg) {
    return arg;
}
function echoGeneric(arg) {
    return arg;
}
let anyValue = echoAny(123);
console.log(anyValue);
let genericValue = echoGeneric(123);
console.log(genericValue);
// Generic Class
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
const stringBox = new Box("hello");
console.log(stringBox);
const numberBox = new Box(42);
console.log(numberBox);
const response = {
    data: "Success",
    status: 200
};
console.log(response);
let pairData = {
    key: 1,
    value: "Book"
};
console.log(pairData);
function printId(item) {
    console.log("ID:", item.id);
}
printId({
    id: "abc123",
    name: "Alice"
});
// Multiple Type Parameters
function merge(a, b) {
    return {
        ...a,
        ...b
    };
}
const mergedData = merge({ id: 1 }, { name: "Alice" });
console.log(mergedData);
const defaultResp = {
    data: "OK",
    status: 200
};
console.log(defaultResp);
const previewUser = {
    id: "U101",
    name: "John"
};
console.log(previewUser);
// Generic List Class
class List {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return [...this.items];
    }
}
const numberList = new List();
numberList.add(10);
numberList.add(20);
console.log(numberList.getAll());
// Challenge
// Generic FeedbackBox
class FeedbackBox {
    feedbacks = [];
    addFeedback(feedback) {
        this.feedbacks.push(feedback);
    }
    getAllFeedback() {
        return [...this.feedbacks];
    }
}
// Quiz Feedback
const quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
console.log(quizFeedback.getAllFeedback());
const lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({
    rating: 5,
    comment: "Loved it!"
});
console.log(lessonFeedback.getAllFeedback());
// Generic Function
function getFirstItem(items) {
    return items[0];
}
const firstQuizFeedback = getFirstItem(quizFeedback.getAllFeedback());
console.log(firstQuizFeedback);
const firstLessonFeedback = getFirstItem(lessonFeedback.getAllFeedback());
console.log(firstLessonFeedback);
