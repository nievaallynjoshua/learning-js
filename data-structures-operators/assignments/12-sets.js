// 12.1
// Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}

// 12.2
// The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

const uniqueKeywords = new Set(allKeywords);

// 12.3
// Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

// 12.4
// Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete('business');

// 12.5
// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
const uniqueKeywordsArr = [...uniqueKeywords];

// 12.6
// Delete all items from the uniqueKeywords set.
uniqueKeywords.clear();
