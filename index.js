/* Import modules */
import * as dom from './modules/getDomElements.js'; // This module declare constants linked to DOM elements
import Book from './modules/book.js'; // This module is the main class 'Book'

// const { DateTime } = require('luxon');
/* New instance of class Book */
new Book().updateList();

/* Changed default functions to Arrow functions
  * Changed let for Const */
dom.addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(
    Math.floor((Math.random() * Date.now())), dom.bookTitle.value, dom.bookAuthor.value,
  );
  newBook.addNewBook();
});

window.addEventListener('load', () => {
  dom.bookListSection.style.display = 'block';

  // dom.textDate = DateTime.now().toString();
});

dom.linkList.addEventListener('click', () => {
  dom.bookListSection.style.display = 'block';
  dom.addBookSection.style.display = 'none';
  dom.contactSection.style.display = 'none';
});

dom.linkNew.addEventListener('click', () => {
  dom.bookListSection.style.display = 'none';
  dom.addBookSection.style.display = 'block';
  dom.contactSection.style.display = 'none';
});

dom.linkContact.addEventListener('click', () => {
  dom.bookListSection.style.display = 'none';
  dom.addBookSection.style.display = 'none';
  dom.contactSection.style.display = 'block';
});
