// Generic Function
function identity<T>(
    value: T
): T {

    return value;
}


let numberResult =
    identity<number>(42);

console.log(numberResult);


let stringResult =
    identity<string>("hello");

console.log(stringResult);


let booleanResult =
    identity(true);

console.log(booleanResult);


// Generic vs Any
function echoAny(
    arg: any
): any {

    return arg;
}


function echoGeneric<T>(
    arg: T
): T {

    return arg;
}


let anyValue =
    echoAny(123);

console.log(anyValue);


let genericValue =
    echoGeneric(123);

console.log(genericValue);


// Generic Class
class Box<T> {

    contents: T;

    constructor(value: T) {

        this.contents = value;
    }
}


const stringBox =
    new Box<string>("hello");

console.log(stringBox);


const numberBox =
    new Box<number>(42);

console.log(numberBox);


// Generic Interface
interface ApiResponse<T> {

    data: T;
    status: number;
}


const response:
    ApiResponse<string> = {

    data: "Success",
    status: 200
};

console.log(response);


// Generic Type Alias
type Pair<K, V> = {

    key: K;
    value: V;
};


let pairData:
    Pair<number, string> = {

    key: 1,
    value: "Book"
};

console.log(pairData);


// Generic Constraint
interface HasId {

    id: string;
}


function printId<T extends HasId>(
    item: T
): void {

    console.log(
        "ID:",
        item.id
    );
}


printId({
    id: "abc123",
    name: "Alice"
});


// Multiple Type Parameters
function merge<A, B>(
    a: A,
    b: B
): A & B {

    return {
        ...a,
        ...b
    };
}


const mergedData =
    merge(
        { id: 1 },
        { name: "Alice" }
    );

console.log(mergedData);


// Default Type Parameter
type DefaultResponse<T = string> = {

    data: T;
    status: number;
};


const defaultResp:
    DefaultResponse = {

    data: "OK",
    status: 200
};

console.log(defaultResp);


// Utility Types
type User = {

    id: string;
    name: string;
    age: number;
};


type UserPreview =
    Pick<User, "id" | "name">;


const previewUser:
    UserPreview = {

    id: "U101",
    name: "John"
};

console.log(previewUser);


// Generic List Class
class List<T> {

    private items: T[] = [];

    add(item: T): void {

        this.items.push(item);
    }

    getAll(): T[] {

        return [...this.items];
    }
}


const numberList =
    new List<number>();

numberList.add(10);

numberList.add(20);

console.log(numberList.getAll());


// Challenge

// Generic FeedbackBox
class FeedbackBox<T> {

    private feedbacks: T[] = [];

    addFeedback(
        feedback: T
    ): void {

        this.feedbacks.push(feedback);
    }

    getAllFeedback(): T[] {

        return [...this.feedbacks];
    }
}


// Quiz Feedback
const quizFeedback =
    new FeedbackBox<string>();

quizFeedback.addFeedback(
    "Great quiz!"
);

quizFeedback.addFeedback(
    "Too hard!"
);

console.log(
    quizFeedback.getAllFeedback()
);


// Lesson Feedback
type LessonFeedback = {

    rating: number;
    comment: string;
};


const lessonFeedback =
    new FeedbackBox<LessonFeedback>();

lessonFeedback.addFeedback({
    rating: 5,
    comment: "Loved it!"
});

console.log(
    lessonFeedback.getAllFeedback()
);


// Generic Function
function getFirstItem<T>(
    items: T[]
): T | undefined {

    return items[0];
}


const firstQuizFeedback =
    getFirstItem(
        quizFeedback.getAllFeedback()
    );

console.log(firstQuizFeedback);


const firstLessonFeedback =
    getFirstItem(
        lessonFeedback.getAllFeedback()
    );

console.log(firstLessonFeedback);