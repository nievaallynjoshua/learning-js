//Functions
// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const philippines = describeCountry("Philippines", 112, "Manila");
console.log(philippines);
const indonesia = describeCountry("Indonesia", 287, "Jakarta");
console.log(indonesia);
const malaysia = describeCountry("Malaysia", 34, "Kuala Lumpur");
console.log(malaysia);

// Function Declarations vs. Expressions
// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

//function expression
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
const philippinesPercentage1 = percentageOfWorld1(112);
console.log(philippinesPercentage1);
const indonesiaPercentage1 = percentageOfWorld1(287);
console.log(indonesiaPercentage1);
const malaysiaPercentage1 = percentageOfWorld1(34);
console.log(malaysiaPercentage1);

//function declaration
function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}
const philippinesPercentage2 = percentageOfWorld2(112);
console.log(philippinesPercentage2);
const indonesiaPercentage2 = percentageOfWorld2(287);
console.log(indonesiaPercentage2);
const malaysiaPercentage2 = percentageOfWorld2(34);
console.log(malaysiaPercentage2);

// Arrow Functions
// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const philippinesPercentage3 = percentageOfWorld3(112);
const indonesiaPercentage3 = percentageOfWorld3(287);
const malaysiaPercentage3 = percentageOfWorld3(34);
console.log(philippinesPercentage3, indonesiaPercentage3, malaysiaPercentage3);

// Functions Calling Other Functions
// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

const describePopulation = (country, population) => {
  const description = `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world. `;
  console.log(description);
};

describePopulation("Philippines", 112);
describePopulation("Indonesia", 287);
describePopulation("Malaysia", 34);

// Introduction to Arrays
// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

const populations = [112, 287, 34, 1400];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic Array Operations (Methods)
// Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

// If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

// Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ["Indonesia", "Malaysia", "Taiwan"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[0] = "Intronesia";

// Introduction to Objects
// Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
  country: "Philippines",
  capital: "Manila City",
  language: "Filipino",
  population: "112.7",
  neighbours: ["Indonesia", "Malaysia", "Taiwan"],
};

// Dot vs. Bracket Notation
// Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);
