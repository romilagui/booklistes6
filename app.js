// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI(){
}
// Create a prototype under the function 
// Add book to  list
UI.prototype.addBookToList = function(book){
  //console.log(book);
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML =`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X<a></td>
`;
list.appendChild(row);
  //console.log(row);
}

// Show Alert
UI.prototype.showAlert =  function(message, className){
// Create div
const div = document.createElement('div');
// Add Classes
div.className = `alert ${className}`;
// Add test
div.appendChild(document.createTextNode(message));
// Get parent
const container = document.querySelector('.container');

// Get form
const form = document.querySelector('#book-form');
container.insertBefore(div, form);

// Time out (desappear) after 3 sec
// setTimeout is a window object that takes in a function 
setTimeout(function() {
  document.querySelector('.alert').remove();
}, 3000);
}

// Clear Fields
// Is not working 
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for Add book
document.getElementById('book-form').addEventListener('submit', function(e){
  //console.log('test');
  // When we click submit we get test on thw console

  // Creating variables to get form values:
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  //console.log(title, author, isbn);

  // Instanciate the book constructor/object
  const book = new Book(title, author, isbn);
  //console.log(book);

  // Instantiate a UI Object
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
   // Error Alert
   ui.showAlert('Please fill in all fields', 'error');
  } else {
    
  // Add book to list
  //console.log(ui);
  ui.addBookToList(book);

  // Show success
  ui.showAlert('Book Added!', 'success');

  // Delete Book
  UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }}


// Clear fields 
ui.clearFields();
  }

e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
  
   // Instantiate a UI Object
 const ui = new UI();

 // Delete book
 ui.deleteBook(e.target);

 // Show message
 ui.showAlert('Book Removed', 'success')
  console.log(123);
  e.preventDefault();
} );