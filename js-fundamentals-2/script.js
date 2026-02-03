"use strict";
// function logger() {
//   console.log("My name is Allyn!");
// }
// //calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

//function declaration
// function calcAge1(birthYear) {
//   return 2026 - birthYear;
// }

// const age1 = calcAge1(2002);
// console.log(age1);

// //funtion expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2002);
// console.log(age1, age2);

//arrow function
// const calcAge3 = (birthYear) => 2026 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2026 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(2002, "Allyn"));
// console.log(yearsUntilRetirement(2004, "Angel"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(2002, "Allyn Joshua"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const friend1 = "Angel";
// const friend2 = "Faith";
// const friend3 = "Reign";

// const friends = [friend1, friend2, friend3];
// console.log(friends);

// const years1 = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Gae";
// console.log(friends);

// const firstName = "Allyn Joshua";
// const allyn = [firstName, "Nieva", 2026 - 2002, "developer", friends];
// console.log(allyn);
// console.log(allyn.length);

// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend named Steven.");
// }

// const allynArray = [
//   "Allyn",
//   "Nieva",
//   2026 - 2002,
//   "developer ",
//   ["Angel", "Faith", "Reign"],
// ];

// const allyn = {
//   firstName: "Allyn Joshua",
//   lastName: "Nieva",
//   age: 2026 - 2002,
//   job: "Developer",
//   friends: ["Angel", "Faith", "Reign"],
// };

// console.log(allyn.lastName);
// console.log(allyn["lastName"]);

// const nameKey = "Name";
// console.log(allyn["first" + nameKey]);
// console.log(allyn["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Allyn? Choose between firstName, lastName, age, job, and friends",
// );

// if (allyn[interestedIn]) {
//   console.log(allyn[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends",
//   );
// }

// allyn.location = "Philippines";
// allyn["twitter"] = "@nallynjoshua";
// console.log(allyn);

// //Challenge
// //"Allyn Joshua has 3 friends, and his best friend is called Angel"

// console.log(
//   `${allyn.firstName} has ${allyn.friends.length} friends, and his best friend is called ${allyn.friends[0]}`,
// );

// const allyn = {
//   firstName: "Allyn Joshua",
//   lastName: "Nieva",
//   birthYear: 2002,
//   age: 2026 - 2002,
//   job: "developer",
//   friends: ["Angel", "Faith", "Reign"],
//   hasDriversLicense: false,
//   calcAge: function () {
//     this.age = 2026 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(allyn.calcAge());
// console.log(allyn["calcAge"](1991));
// console.log(allyn.age);
// console.log(allyn.age);
// console.log(allyn.age);

//Challenge
// Allyn Joshua is a 24 year old developer and he has a/no driver's license

// console.log(allyn.getSummary());

// console.log("Lifting weights repetition 1 ");
// console.log("Lifting weights repetition 2 ");
// console.log("Lifting weights repetition 3 ");
// console.log("Lifting weights repetition 4 ");
// console.log("Lifting weights repetition 5 ");
// console.log("Lifting weights repetition 6 ");
// console.log("Lifting weights repetition 7 ");
// console.log("Lifting weights repetition 8 ");
// console.log("Lifting weights repetition 9 ");
// console.log("Lifting weights repetition 10 ");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const allynArray = [
//   "Allyn Joshua",
//   "Nieva",
//   2026 - 2002,
//   "developer ",
//   ["Angel", "Faith", "Reign"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < allynArray.length; i++) {
//Reading the array from start to finish
// console.log(allynArray[i], typeof allynArray[i]);

//Filling an array
//types[i] = typeof allynArray[i];
//   types.push(typeof allynArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2026 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log(`--Only Strings--`);
// for (let i = 0; i < allynArray.length; i++) {
//   if (typeof allynArray[i] !== "string") continue;
//   console.log(allynArray[i], typeof allynArray[i]);
// }

// console.log(`--Break if Number is Found`);
// for (let i = 0; i < allynArray.length; i++) {
//   if (typeof allynArray[i] === "number") break;
//   console.log(allynArray[i], typeof allynArray[i]);
// }

// const allynArray = [
//   "Allyn Joshua",
//   "Nieva",
//   2026 - 2002,
//   "developer ",
//   ["Angel", "Faith", "Reign"],
//   true,
// ];

// for (let i = allynArray.length - 1; i >= 0; i--) {
//   console.log(allynArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting Exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
}
