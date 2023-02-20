/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

/* ---- ES6 Updates to this file ----
  * Change let for Const
  * Exported module and imported at index.js as 'dom'
  * */

const SectionBook = document.getElementById('section-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBook = document.getElementById('add-book');
const textDate = document.getElementById('date');
const bookListSection = document.getElementById('books-list-section');
const addBookSection = document.getElementById('add-book-section');
const contactSection = document.getElementById('contact-section');
const linkList = document.getElementById('link-list');
const linkNew = document.getElementById('link-new');
const linkContact = document.getElementById('link-contact');

export {
  SectionBook, bookTitle, bookAuthor, addBook, textDate, bookListSection,
  addBookSection, contactSection, linkList, linkNew, linkContact,
};
