import * as dom from './modules/getDomElements.js';
import Book from './modules/book.js';

new Book().updateList();

dom.addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    Math.floor((Math.random() * Date.now())), dom.bookTitle.value, dom.bookAuthor.value,
  );
  newBook.addNewBook();
});
