import addAuthorForm from './forms/addAuthorForm';

// FIXME: STUDENTS show your authors
const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  addAuthorForm();
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
    <div class="card-body" style="height: 210px;">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p>Contact:</p>
      <p>${item.email}</p>
      <hr>
      <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-author-btn--${item.firebaseKey}">Edit Author</button>
      <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
    </div>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
