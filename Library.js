// Book.js

// 1.
class Book {
    constructor(title, author, yearPublished) {
      this.title = title || 'no title';
      this.author = author || 'no author';
      this.yearPublished = yearPublished || 0;
    }
  
    getInfo() {
      return `${this.title}, ${this.author}, ${this.yearPublished}`;
    }
  }
  
  // 2.
  const practice1 = new Book("Sample Title", "Sample Author", 2022);
  console.log(practice1.getInfo()); // Output: Sample Title, Sample Author, 2022
  
  // 3.
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(newBook) {
      this.books.push(newBook);
    }
  
    getBooksByGenre(genre) {
      return this.books.filter(book => book.genre === genre);
    }
  
    getTotalPagesByGenre(genre) {
      return this.books
        .filter(book => book.genre === genre)
        .reduce((totalPages, book) => totalPages + book.pages, 0);
    }
  }
  
  // 4.
  const book1 = new Book("Harry Wick", "Conan", 345, "Sci-Fi");
  const library1 = new Library("Sample Library");
  
  library1.addBook(book1);
  
  // 5.
  console.log(library1.books); 
  // Output: [Book {title: "Harry Wick", author: "Conan", pages: 345, genre: "Sci-Fi"}]
  
  // 6.
  class Elevator {
    constructor(maxFloor, minFloor) {
      this.maxFloor = maxFloor;
      this.minFloor = minFloor;
      this.currentFloor = 0;
    }
  
    goUp() {
      if (this.currentFloor < this.maxFloor) {
        this.currentFloor++;
      }
    }
  
    goDown() {
      if (this.currentFloor > this.minFloor) {
        this.currentFloor--;
      }
    }
  
    goToFloor(floor) {
      if (floor >= this.minFloor && floor <= this.maxFloor) {
        this.currentFloor = floor;
      }
    }
  
    displayFloor() {
      console.log(`Current Floor: ${this.currentFloor}`);
    }
  }
  
  // 7.
  const elevator1 = new Elevator(10, 0);
  
  elevator1.goUp();
  elevator1.displayFloor(); // Output: Current Floor: 1
  
  elevator1.goDown();
  elevator1.displayFloor(); // Output: Current Floor: 0
  
  elevator1.goToFloor(5);
  elevator1.displayFloor(); // Output: Current Floor: 5
  