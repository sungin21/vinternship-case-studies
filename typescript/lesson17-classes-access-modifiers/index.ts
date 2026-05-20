// ======================
// Abstract Class
// ======================

abstract class Content {

    public readonly title:
        string;

    public readonly author:
        string;

    private published:
        boolean = false;

    constructor(
        title: string,
        author: string
    ) {

        this.title = title;

        this.author = author;
    }

    public publish():
        void {

        this.published = true;

        console.log(
            `${this.title} has been published.`
        );
    }

    protected isPublished():
        boolean {

        return this.published;
    }

    abstract getType():
        string;
}


// ======================
// Quiz Class
// ======================

class Quiz extends Content {

    private questions:
        string[] = [];

    constructor(
        title: string,
        author: string,
        questions: string[] = []
    ) {

        super(
            title,
            author
        );

        this.questions =
            questions;
    }

    public addQuestion(
        question: string,
        isInstructor: boolean
    ): void {

        if (
            !this.isPublished() &&
            isInstructor
        ) {

            this.questions.push(
                question
            );

            console.log(
                "Question added successfully."
            );

        } else {

            throw new Error(
                "Cannot add questions after publishing or if not an instructor."
            );
        }
    }

    public getQuestions():
        string[] {

        return [
            ...this.questions
        ];
    }

    getType(): string {

        return "Quiz";
    }
}


// ======================
// Lesson Class
// ======================

class Lesson extends Content {

    private lessonContent:
        string;

    constructor(
        title: string,
        author: string,
        content: string
    ) {

        super(
            title,
            author
        );

        this.lessonContent =
            content;
    }

    public editContent(
        newContent: string,
        isInstructor: boolean
    ): void {

        if (
            !this.isPublished() &&
            isInstructor
        ) {

            this.lessonContent =
                newContent;

            console.log(
                "Lesson content updated."
            );

        } else {

            throw new Error(
                "Cannot edit content after publishing or if not an instructor."
            );
        }
    }

    public getContent():
        string {

        return this.lessonContent;
    }

    getType(): string {

        return "Lesson";
    }
}


// ======================
// Assignment Class
// ======================

class Assignment extends Content {

    private dueDate:
        Date;

    constructor(
        title: string,
        author: string,
        dueDate: Date
    ) {

        super(
            title,
            author
        );

        this.dueDate =
            dueDate;
    }

    public updateDueDate(
        newDueDate: Date,
        isInstructor: boolean
    ): void {

        if (
            !this.isPublished() &&
            isInstructor
        ) {

            this.dueDate =
                newDueDate;

            console.log(
                "Due date updated successfully."
            );

        } else {

            throw new Error(
                "Cannot update due date after publishing or if not an instructor."
            );
        }
    }

    public getDueDate():
        Date {

        return this.dueDate;
    }

    getType(): string {

        return "Assignment";
    }
}


// ======================
// Quiz Example
// ======================

const quiz1 =
    new Quiz(
        "TypeScript Basics",
        "Instructor A"
    );

quiz1.addQuestion(
    "What is TypeScript?",
    true
);

console.log(
    quiz1.getQuestions()
);

console.log(
    quiz1.getType()
);

quiz1.publish();


// ======================
// Lesson Example
// ======================

const lesson1 =
    new Lesson(
        "OOP Concepts",
        "Instructor B",
        "Introduction to OOP"
    );

lesson1.editContent(
    "Updated OOP Content",
    true
);

console.log(
    lesson1.getContent()
);

console.log(
    lesson1.getType()
);

lesson1.publish();


// ======================
// Assignment Example
// ======================

const assignment1 =
    new Assignment(
        "Mini Project",
        "Instructor C",
        new Date("2026-01-15")
    );

assignment1.updateDueDate(
    new Date("2026-01-20"),
    true
);

console.log(
    assignment1.getDueDate()
);

console.log(
    assignment1.getType()
);

assignment1.publish();
