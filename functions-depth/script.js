'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const allyn = {
//   name: 'Allyn Joshua Nieva',
//   passport: 1231234123123,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 1231234123123) {
//     alert('Checked In!');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// checkIn(flight, allyn);
// console.log(flight);
// console.log(allyn);

// const flightNum = flight;
// const passenger = allyn;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(allyn);
// checkIn(flight, allyn);

// //passing by value
// //passing by reference

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);
// //callback function allows us to create abstraction

// // A "Hilda" Bonus Challenge 🎮
// // If you want to apply this to your game knowledge, try this:
// // Create a function checkHP that takes a number and returns "Low Health!" if it's below 30.
// // Create a function checkRole that takes a string and returns "Tanky!" if the string is "Roamer".
// // Create a Higher-Order Function analyzeHero that takes a hero object and a "checker" function.

// function checkHP(health) {
//   if (health.hp < 30) return 'Low Health!'; // Added return
//   return 'Healthy'; // Added a fallback so it doesn't return undefined if HP is high
// }

// function checkRole(str) {
//   if (str.role === 'Roamer') return 'Tanky'; // Added return
//   return 'Not a Roamer';
// }

// const hilda = { name: 'Hilda', hp: 25, role: 'Roamer' };

// const analyzeHero = function (hero, fn) {
//   // Abstraction: We don't care what 'fn' does, we just run it!
//   // We pass the property the function needs (like hero.hp or hero.role)
//   const result = fn(hero);

//   console.log(`--- Hero Analysis: ${hero.name} ---`);
//   console.log(`Analysis Result: ${result}`);
//   console.log(`Checked by function: ${fn.name}`);
// };

// analyzeHero(hilda, checkHP);
// analyzeHero(hilda, checkRole);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Allyn');
// greeterHey('Angel');

// greet('Hello')('Allyn');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('ALlyn');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Allyn Joshua');
lufthansa.book(635, 'Angel Clores');
console.log(lufthansa);

const eurowings = {
  airline: 'Euro Wings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams');
// wont work since this will result to undefined since book is now a regular function call not a method

book.call(eurowings, 23, 'Angel Clores');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

//Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Stephen Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200);

//more specific function for add tax
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
