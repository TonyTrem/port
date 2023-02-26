const bookList = document.getElementById("bookList");
let books = getBooksFromStorage();

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked; 

  const book = {
    title,
    author,
    pages: parseInt(pages),
    read
  };

  books.push(book);

  displayBooks();
  saveBooksToStorage();
}

function displayBooks() {
  bookList.innerHTML = "";

  books.forEach(function(book, index) {
    const li = document.createElement("li");
  
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = book.title;
    li.appendChild(titleDiv);

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.textContent = book.author;
    li.appendChild(authorDiv);

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages");
    pagesDiv.textContent = book.pages;
    li.appendChild(pagesDiv);

    const readDiv = document.createElement("div");
    readDiv.classList.add("read");
    readDiv.textContent = book.read ? "Read" : "Not read";
    li.appendChild(readDiv);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      books.splice(index, 1);
      displayBooks();
      saveBooksToStorage();
    });
    li.appendChild(deleteButton);

    bookList.appendChild(li);
  });
}

function sortBooks() {
  books.sort(function(a, b) {
  return a.title.localeCompare(b.title);
  });

  displayBooks();
}

function deleteAllBooks() {
  if (confirm("Are you sure you want to delete all books?")) {
  books = [];
  displayBooks();
  saveBooksToStorage();
  }
}

function getBooksFromStorage() {
  const booksString = localStorage.getItem("books");
  return booksString ? JSON.parse(booksString) : [];
}

function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

displayBooks();