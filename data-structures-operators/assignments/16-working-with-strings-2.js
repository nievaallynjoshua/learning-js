// Working with Strings - Part 2
// 16.1
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

// Example;

const normalizeAuthorName = function (author) {
  //Clean the string
  const authorLowerCase = author
    .toLowerCase()
    .replace('(contributor)', '')
    .trim();

  //Capitalize first name
  const spaceIndex = authorLowerCase.indexOf(' ');
  const firstNameCapital =
    authorLowerCase[0].toUpperCase() + authorLowerCase.slice(1, spaceIndex - 1);
  //Capitalize last name
  const lastNameCapital =
    authorLowerCase[indexOf(' ') + 1].toUpperCase +
    authorLowerCase.slice(spaceIndex + 1);

  return firstNameCapital + ' ' + lastNameCapital;
};

normalizeAuthorName('  JuliE sussMan (Contributor)');

// teacher solution
// function normalizeAuthorName(author) {
//   author = author.trim(); //trim the spaces
//   const firstName = author.slice(0, author.indexOf(' ')); //slice thefirst name

//   let lastName = '';
//   if (author.indexOf(' ') === author.lastIndexOf(' ')) {
//     lastName = author.slice(author.indexOf(' ') + 1, author.length);
//   } else {
//     lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
//   }

//   const capitalizedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return capitalizedFirstName + ' ' + capitalizedLastName;
// }

// 16.2
// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

const newBookTitle = books[1].title.replace('Programs', 'Software');

// 16.3
// Write a function called logBookTheme that takes book's title (string), and logs to the console:

// "This book is about computers" if the title starts with the word "computer",

// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

const logBookTheme = function (bookTitle) {
  const book = bookTitle.toLowerCase;
  if (book.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (book.includes('algorithms') && book.includes('structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    book.endsWith('system') ||
    (book.endsWith('systems') && !book.includes('operating'))
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems',
    );
  }
};
