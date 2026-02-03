// Maps: Iteration
// 14.1
// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(book[0]));

// 14.2
// Use the for-of loop to iterate over firstBookMap, and log to the console, keys that have numbers as values.
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') console.log(key);
}
