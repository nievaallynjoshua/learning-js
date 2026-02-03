// Short Circuiting (&& and ||)
// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

// {
//   title: 'Algorithms',
//   author: ['Robert Sedgewick', 'Kevin Wayne'],
//   ...
//   programmingLanguage: 'Java',     // <-- HERE
// }

// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// Use short-circuiting.

function hasExamplesInJava(books) {
  return books.programmingLanguage === 'Java' || 'no data available';
}

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

// {
//   title: 'Operating System Concepts',
//   // ... removed for clarity
//   onlineContent: false,          // <-- HERE
// },

for (let i = 0; i < books.length; i++) {
  return books[i].onlineContent && `${books[i].title} provides online content.`;
}

// 5.3
// Some book objects may have an edition property indicating the edition number (e.g., 2 for second edition), while others might not have it at all.
// Write a function called getEditionInfo that takes a book object as an argument. This function should return a string in the format "Edition: ${edition}" if the book has an edition property greater than 1, or the string 'First edition or unknown' if the edition is 1 or if the property doesn't exist. Use short-circuiting to avoid explicit checks for the property's existence.

// Example book object:
// {
//   title: 'Clean Code',
//   author: 'Robert C. Martin',
//   edition: 1  // or missing
// }

function getEditionInfo(book) {
  return (
    (book.edition > 1 && `Edition: ${book.edition}`) ||
    'First edition or unknown'
  );
}

// 5.4
// Loop over the books array and, for each book that has an author property as an array (indicating multiple authors), log a string to the console in the format: "${title}" has multiple authors.. If the author is a single string or missing, do nothing for that book. Use short-circuiting inside the loop to check if author is an array without additional if statements.
// Example book object with multiple authors:
// {
//   title: 'Algorithms',
//   author: ['Robert Sedgewick', 'Kevin Wayne']
// }

for (let i = 0; i < books.length; i++) {
  books[i].author.length > 1 &&
    console.log(`${books[i].title} has multiple authors`);
}
