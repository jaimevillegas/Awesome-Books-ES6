import { DateTime } from './luxon.js';
import * as dom from './getDomElements.js';

class Book {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }

  static books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

  addNewBook() {
    Book.books.push(this);
    localStorage.setItem('books', JSON.stringify(Book.books));
    dom.bookTitle.value = '';
    dom.bookAuthor.value = '';
    this.updateList();
  }

  removeBook(id) {
    Book.books = Book.books.filter((book) => book.id !== +id);
    localStorage.setItem('books', JSON.stringify(Book.books));
    this.updateList();
  }

  showDate() {
    this.now = DateTime.now();
    this.now = this.now.toLocaleString(DateTime.DATETIME_MED);
    dom.textDate.innerHTML = this.now;
  }

  updateList() {
    this.showDate();
    dom.SectionBook.innerHTML = '';
    Book.books.forEach((book) => {
      dom.SectionBook.insertAdjacentHTML('beforeend', `
      <article class='book-item'>
      <p>${book.name}</p>
      <span> by </span>
      <p>${book.author}</p>
      <button class='remove-book btn' data-id='${book.id}'>Remove</button>
      </article>
      `);
    });

    const removeBookBtn = document.querySelectorAll('.remove-book');

    removeBookBtn.forEach((button) => button.addEventListener('click', (e) => {
      this.removeBook(e.target.dataset.id);
    }));
  }
}

export default Book;
