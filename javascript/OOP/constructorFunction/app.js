// Constructor Function
function Book(title, author, numPages) {
  // properties
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.currentPage = 0;
}



// methods via prototype
Book.prototype.read = function () {
    this.currentPage = this.numPages / 2;
    console.log(`You are on Page ${this.currentPage}.`);
};

// Instantiating a new object
let book = new Book('Heart of a Samurai', 'IDK', 200);

function ComicBook(title, author, numPages, cover) {
  // properties
  Book.call(this, title, author, numPages);
  this.cover = cover;
}
// Extending the Book Object
ComicBook.prototype = Object.create(Book.prototype);

ComicBook.prototype.burn = function(){
    console.log(`You burnt all ${this.numPages} pages`)
}

const comic = new ComicBook('Superman','Some guy',15,'Ima cover')

console.log(comic.burn());
// console.log(book.read());
