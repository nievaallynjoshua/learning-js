// Working with Strings - Part 3
// 17.1
// Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (categories) {
  const catArr = categories.split(';');

  for (const cat of catArr) {
    console.log(cat);
  }
};

logBookCategories(bookCategories);

// 17.2
// Now, the opposite. Each book from the books array has the keywords property.

// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

const books = [
  {
    title: 'Algorithms',
    keywords: ['science', 'computing', 'math'],
  },
  {
    title: 'Clean Code',
    keywords: ['computing', 'programming', 'development'],
  },
];

const getKeywordsAsString = function (books) {
  const allKeywords = [];

  for (const book of books) {
    allKeywords.push(...book.keywords);
  }

  const uniqueKeywords = [...new Set(allKeywords)].join(';');
};

// 17.3
// Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

// Use the padEnd method.

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

const logBookChapters = function (chapters) {
  for (const [chapter, page] of chapters) {
    console.log(`${chapter.padEnd(20, '_')} ${page}`);
  }
};

logBookChapters(bookChapters);
