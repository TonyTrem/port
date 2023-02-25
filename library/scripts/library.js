let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }   
}

function addBookToLibrary() {
    let title = prompt('Enter the title of the book');
    let author = prompt('Enter the author of the book');
    let pages = prompt('Enter the number of pages');
    let read = prompt('Have you read the book?');
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    let library = document.querySelector('#library');
    library.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList.add('book');
        book.innerHTML = myLibrary[i].info();
        library.appendChild(book);
    }
}



let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
let theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1216, 'read');

console.log(theHobbit.info());
console.log(theLordOfTheRings.info());