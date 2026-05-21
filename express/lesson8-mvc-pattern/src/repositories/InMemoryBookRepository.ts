import { Book } from "../models/Book";
import { IBookRepository } from "./interfaces/IBookRepository";

export class InMemoryBookRepository
  implements IBookRepository {

  private books: Book[] = [
    {
      id: "1",
      title: "Atomic Habits",
      author: "James Clear",
      isBorrowed: false,
    },
  ];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return (
      this.books.find((book) => book.id === id)
      || null
    );
  }

  async save(book: Book): Promise<void> {
    const index = this.books.findIndex(
      (b) => b.id === book.id
    );

    if (index >= 0) {
      this.books[index] = book;
    } else {
      this.books.push(book);
    }
  }
}