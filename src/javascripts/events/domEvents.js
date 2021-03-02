import firebase from 'firebase/app';
import 'firebase/auth';
import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import { createAuthor, deleteAuthor } from '../helpers/data/authorData';
import { createBook, deleteBook } from '../helpers/data/bookData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        // pull the firebasekey off the button
        const firebaseKey = e.target.id.split('--')[1];
        deleteBook(firebaseKey, firebase.auth().currentUser.uid).then((booksArray) => showBooks(booksArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
        uid: firebase.auth().currentUser.uid,
      };
      createBook(bookObject, firebase.auth().currentUser.uid).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      if (window.confirm('Want to delete?')) {
        // pull the firebasekey off the button
        const firebaseKey = e.target.id.split('--')[1];
        deleteAuthor(firebaseKey, firebase.auth().currentUser.uid).then((authorsArray) => showAuthors(authorsArray));
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorObject = {
        email: document.querySelector('#authorEmail').value,
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        favorite: document.querySelector('#favorite').checked,
        uid: firebase.auth().currentUser.uid,
      };
      createAuthor(authorObject, firebase.auth().currentUser.uid).then((authorsArray) => showAuthors(authorsArray));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
