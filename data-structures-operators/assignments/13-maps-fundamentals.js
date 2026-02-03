// 13.1
// Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

// [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// 13.2
// Set a new key in bookMap called pages, and assign it with a number 464.

bookMap.set('pages', 464);

// 13.3
// Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(`${title} by ${author}`);

// 13.4
// Get the size of bookMap, and log it to the console.
console.log(bookMap.size);

// 13.5
// Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
bookMap.has('author') && console.log('The author of the book is known');
