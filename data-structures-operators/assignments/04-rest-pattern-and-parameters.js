// Rest Pattern and Parameters
// 4.1
// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;

// 4.2
// Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restofTheBook } = books[1];

// 4.3
// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors.`);
}

//From AI
const books = [
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    keywords: ['JS', 'best practices', 'patterns', 'advanced'],
    publisher: "O'Reilly",
    year: 2008,
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    keywords: ['javascript', 'modern', 'beginner', 'free'],
    publisher: 'No Starch Press',
    year: 2018,
    edition: 3,
  },
];

const numbers = [10, 20, 30, 40, 50];

// Q1. Array destructuring with rest
// Destructure the keywords array of the second book so that:  The first two keywords go into variables primary and secondary
// All remaining keywords go into a variable called extraKeywords (an array)

// Write the destructuring line.

// const [primary,secondary,...extraKeywords]= books[1].keywords;
const {
  keywords: [primary, secondary, ...extraKeywords],
} = books[1];

// Q2. Object destructuring with rest (basic)
// Destructure the first book so that:  You get the title in a variable called bookTitle
// All other properties go into a variable called bookDetails (an object)

// Write the destructuring line.

const { title: bookTitle, ...bookDetails } = books[0];

// Q3. Combining rest in array and skipping elements
// From the numbers array, extract:  The first number into first
// The third number into third
// All the numbers after the third into tail (using rest)

// (You must skip the second number using a comma placeholder.)Write the destructuring line.

const [first, , third, ...tail] = numbers;

// Q4. Rest parameters in a function
// Write a function called sumFirstAndRest that:  Takes at least one number (the first argument)
// Accepts any number of additional numbers using rest parameters
// Returns the first number plus the sum of all the rest

// Example:  js

// sumFirstAndRest(100, 1, 2, 3)   // → 106
// sumFirstAndRest(5)              // → 5

function sumFirstAndRest(number, ...rest) {
  let sum = number;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
}

// Q5. Nested rest in object destructuring
// Destructure the second book so that:  You get the title
// You get the publisher renamed to pub
// All remaining properties (including nested ones if any) go into everythingElse

// Write the destructuring line.

const { title, publisher: pub, ...everthingElse } = books[1];
