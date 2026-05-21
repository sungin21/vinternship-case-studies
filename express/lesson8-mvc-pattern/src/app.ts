import express from "express";

import { BookController }
from "./controllers/BookController";

import { BookService }
from "./services/BookService";

import { InMemoryBookRepository }
from "./repositories/InMemoryBookRepository";

const app = express();

app.use(express.json());

const bookRepository =
  new InMemoryBookRepository();

const bookService =
  new BookService(bookRepository);

const bookController =
  new BookController(bookService);

app.post(
  "/books/:id/borrow",
  (req, res) =>
    bookController.borrowBook(req, res)
);

app.post(
  "/books/:id/return",
  (req, res) =>
    bookController.returnBook(req, res)
);

app.get("/", (req, res) => {
  res.send("Library API Running");
});

app.listen(3000, () => {
  console.log(
    "Server running on http://localhost:3000"
  );
});