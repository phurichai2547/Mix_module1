class Book {
    constructor(isbn, title = 'untitled', ebook = false) {
        this.isbn = isbn;
        this.title = title;
        this.authors = [];
        this.ebook = ebook;
    }

    addAuthor(fn, ln) {
        let author = { firstname: fn, lastname: ln };
        this.authors.push(author);
        return this.authors.length;
    }

    getFirstAuthor() {
        return this.authors[0]
    }

    getLastAuthor() {
        return this.authors[this.authors.length - 1]
    }

    getCoAuthors() {
        return this.authors.slice(1, this.authors.length);
    }

    findAuthor(firstname, lastname) {
        return this.authors.find(author =>
            author.firstname.toLowerCase() === firstname.toLowerCase() &&
            author.lastname.toLowerCase() === lastname.toLowerCase()
        );
    }

    hasEbook() {
        return this.ebook;
    }
}

// Example usage:
let book = new Book("978-7-888-14362-4", "Book Title 1", true);
book.addAuthor("John", "Scott");
book.addAuthor("Adam", "Kim");

// console.log(book.getFirstAuthor());
// console.log(book.getLastAuthor());
console.log(book.getCoAuthors());
// console.log(book.findAuthor("john", "scott"));
// console.log(book.hasEbook());
