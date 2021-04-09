// Book Constructor
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to list
  UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');
  
  // inserts cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href=" " class="delete">X</a></td>
  `;
  list.appendChild(row)
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form'); 

  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);

}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners 

document.getElementById('book-form').addEventListener('submit',
  function(e){

    // Get Form Values :
    const title = document.getElementById('title').value ,
          author = document.getElementById('author').value ,
          isbn = document.getElementById('isbn').value ;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // vallidation 
    if(title === '' || author === '' || isbn === '') {
      
      // Error Alert
      ui.showAlert('Please fill in all fields', 'error')

    } else {

       // add book to list
       ui.addBookToList(book);

      //  Show Success
      ui.showAlert('Book Added','success')

       // Clear Fields 
       ui.clearFields();

    }

    e.preventDefault();
});

// Event Listner for delete 
document.getElementById('book-list').addEventListener('click', function(e){

  
    // Instantiate UI
    const ui = new UI();
    
    ui.deleteBook(e.target);

    // show message

    ui.showAlert('Book Removed','success');


  e.preventDefault();
});