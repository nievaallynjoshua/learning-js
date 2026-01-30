'use strict';

// function calcAge(birthYear) {
//   const age = 2026 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log('str');

//       function add(a, b) {
//         return a + b;
//       }
//       const ouput = 'New Output!';
//     }
//     add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Allyn Joshua';

// calcAge(1991);

//Variagbles
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Allyn';
// let job = 'developer';
// const year = 2002;

//FUnctions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2026 - birthYear);
//   console.log(this);
// };
// calcAge(2002);

// const calcAgeExpression = birthYear => {
//   console.log(2026 - birthYear);
//   console.log(this);
// };

// calcAgeExpression(2002);

// const allyn = {
//   firstName: 'Allyn'
//   year: 2002,
//   calcAge: function () {
//     console.log(this);
//     console.log(2026 - this.year);
//   },
// };

// allyn.calcAge();

// const angel = {
//   year: 2017,
// };

// angel.calcAge = allyn.calcAge;
// angel.calcAge();

// const f = allyn.calcAge;
// var firstName = 'Angel';

// const allyn = {
//   year: 2002,
//   calcAge: function () {
// console.log(this);
//  console.log(2026 - this.year);

//Solution 1
// const self = this; //self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey ${this.firstName}`);
//   },
// };

// allyn.greet();
// console.log(this.firstName);
// allyn.calcAge();

// //Argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

//Object References in Practice

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = (jessica1, 'Davis');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//Shallow Copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

//Deep Copy/Clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
