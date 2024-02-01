const nums = [-1, 0, 5, 10, 49] // min = -1 , max = 49
// find min and max in array
function findMin(nums) {
    let min = nums[0]
    nums.forEach((nums) => {
        // find min
        if (nums < min)
            min = nums
    })
    return min;
}
function findMax(nums) {
    // const nums = [-1, 0, 5, 10, 49] // min = -1 , max = 49
    let max = nums[0]
    nums.forEach((nums) => {
        // find max
        if (nums > max)
            max = nums
    })
    return max;
}
// console.log(max, min);
console.log(findMin(nums));
console.log(findMax(nums));


// Practice-03 Define Objects A function that represents a book with properties such as isbn, title, author, and page count.
// Write a function that takes two book objects. Volumes are parameters and are combined into a new object,
// preserving specific properties from both books. Replacing values ​​when Duplicate

// Define a book object
function Book(isbn, title, author, pageCount) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
}

// Function to combine two book objects
function combineBooks(book1, book2) {
    // Create a new object to store the combined values
    let combinedBook = {};

    // Combine properties, replacing values when duplicates exist
    combinedBook.isbn = book2.isbn || book1.isbn;
    combinedBook.title = book2.title || book1.title;
    combinedBook.author = book2.author || book1.author;
    combinedBook.pageCount = book2.pageCount || book1.pageCount;

    return new Book(combinedBook.isbn, combinedBook.title, combinedBook.author, combinedBook.pageCount);
}

// Example usage:
const book1 = new Book('123456789', 'The Great Gatsby', 'F. Scott Fitzgerald', 180);
const book2 = new Book('987654321', 'To Kill a Mockingbird', 'Harper Lee', 300);

const combinedBook = combineBooks(book1, book2);

console.log(combinedBook);

// or 
const book3 = { id: 1, title: 'JS Beginner' }
const book4 = { pages: 300, id: 2, title: 'JS Advanced' }

function mergeBook(b3, b4) {
    return { ...b3, ...b4 }
}


// Practice-04 Write a function that determines if a given string is a palindrome.
// Palindromes are words, phrases, or sequences of characters that read the same forward as backward. For examples
// radar, level, civic, racecar, madam, refer, deed, noon, kayak


function isPalindrome(word) {
    const chars = [...word] // string to array with spread [...]
    console.log(chars); // [ 'r', 'a', 'd', 'a', 'r' ]
    for (let i = 0, j = chars.length - 1; j >= i; i++, j--) {
        if (chars[i] === chars[j]) return false
    }
    return true
}
console.log(isPalindrome('apple'));