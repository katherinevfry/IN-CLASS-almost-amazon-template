const editAuthorForm = (authorObject) => {
  document.querySelector('#modal-body-author').innerHTML = `
  <form id="edit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="firstName" placeholder="Enter First Name" value="${authorObject.first_name}"required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" value="${authorObject.last_name}" required>
      </div>
      <div class="form-group">
        <label for="email">Author's Email</label>
        <input type="text" class="form-control" id="authorEmail" placeholder="Enter Author's Email" required>
      </div>
      <button type="submit" id="update-author--${authorObject.firebaseKey}" class="btn btn-primary">Edit Author</button>
    </form>`;
};

export default editAuthorForm;
