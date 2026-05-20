"use strict";
// ======================
// Abstract Class
// ======================
class Content {
    title;
    author;
    published = false;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    publish() {
        this.published = true;
        console.log(`${this.title} has been published.`);
    }
    isPublished() {
        return this.published;
    }
}
// ======================
// Quiz Class
// ======================
class Quiz extends Content {
    questions = [];
    constructor(title, author, questions = []) {
        super(title, author);
        this.questions =
            questions;
    }
    addQuestion(question, isInstructor) {
        if (!this.isPublished() &&
            isInstructor) {
            this.questions.push(question);
            console.log("Question added successfully.");
        }
        else {
            throw new Error("Cannot add questions after publishing or if not an instructor.");
        }
    }
    getQuestions() {
        return [
            ...this.questions
        ];
    }
    getType() {
        return "Quiz";
    }
}
// ======================
// Lesson Class
// ======================
class Lesson extends Content {
    lessonContent;
    constructor(title, author, content) {
        super(title, author);
        this.lessonContent =
            content;
    }
    editContent(newContent, isInstructor) {
        if (!this.isPublished() &&
            isInstructor) {
            this.lessonContent =
                newContent;
            console.log("Lesson content updated.");
        }
        else {
            throw new Error("Cannot edit content after publishing or if not an instructor.");
        }
    }
    getContent() {
        return this.lessonContent;
    }
    getType() {
        return "Lesson";
    }
}
// ======================
// Assignment Class
// ======================
class Assignment extends Content {
    dueDate;
    constructor(title, author, dueDate) {
        super(title, author);
        this.dueDate =
            dueDate;
    }
    updateDueDate(newDueDate, isInstructor) {
        if (!this.isPublished() &&
            isInstructor) {
            this.dueDate =
                newDueDate;
            console.log("Due date updated successfully.");
        }
        else {
            throw new Error("Cannot update due date after publishing or if not an instructor.");
        }
    }
    getDueDate() {
        return this.dueDate;
    }
    getType() {
        return "Assignment";
    }
}
// ======================
// Quiz Example
// ======================
const quiz1 = new Quiz("TypeScript Basics", "Instructor A");
quiz1.addQuestion("What is TypeScript?", true);
console.log(quiz1.getQuestions());
console.log(quiz1.getType());
quiz1.publish();
// ======================
// Lesson Example
// ======================
const lesson1 = new Lesson("OOP Concepts", "Instructor B", "Introduction to OOP");
lesson1.editContent("Updated OOP Content", true);
console.log(lesson1.getContent());
console.log(lesson1.getType());
lesson1.publish();
// ======================
// Assignment Example
// ======================
const assignment1 = new Assignment("Mini Project", "Instructor C", new Date("2026-01-15"));
assignment1.updateDueDate(new Date("2026-01-20"), true);
console.log(assignment1.getDueDate());
console.log(assignment1.getType());
assignment1.publish();
