// Working with Strings - Part 1
// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

console.log(books[0][ISBN][6]);
console.log(books[0][ISBN][4]);
console.log(books[0][ISBN][9]);
console.log(books[0][ISBN][8]);

// 15.2
// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 15.3
// Extract the word "boxing" from the same quote string, and log it to the console.

console.log(quote.slice(quote.indexOf('boxing')));

// 15.4
// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.
// function isContributor(author) {
//   if (author.indexOf('Contributor') === -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

function isContributor(author) {
  return author.indexOf('(Contributor)') !== -1;
}
