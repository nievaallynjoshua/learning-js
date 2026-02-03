'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

//Destructuring Arrays
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   orderDeliver: function ({
//     startIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
//     );
//   },
// };

// restaurant.orderDeliver({
//   time: '22:30',
//   address: 'Via del Sole, 21 ',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDeliver({
//   address: 'Via del Sole, 21 ',
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //destructuring objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//The Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //itterable - arrays, strings, maps, sets X objects
// const str = 'Allyn';
// const letters = [...str, ' ', 'N.'];
// console.log(letters);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisseppe' };

//Rest Pattern and Parameters
//
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('AND');
// console.log(3 && 'Jonas');
// console.log('' && 'Jonas');
// console.log(true && 0);
// console.log(undefined && null);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Capri',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// rest2.owner &&= '<ANONYMOUS>';

// //for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// //Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //since the only existing days are the ones that are open
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orders?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Allyn', email: 'nievaallynjoshua@gmail.com' }];
// console.log(users[1]?.name ?? 'User array empty');

// //Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days:`;

// for (const day of Object.entries(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// //[key, property:{open, close}]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close at ${close}.`);
// }

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);
// console.log(new Set('Allyn'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(staff).size);
// console.log(new Set('allynjoshuacachonieva').size);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log(...commonFoods);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanFusion);

// //only containts the unique foods in the first set
// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference Italian:', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference Mexican: ', uniqueMexicanFoods);

// //symmetric difference
// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are Open :>')
//   .set(false, 'We are Closed :<');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// // will get the true or false key based on the condition inside of .get()
// // should satify both conditions to be true
// //if true open: if false close message
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));
// //will not work if used the literal arr

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🏆'],
//   [false, 'Try Again? 🐗'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your Answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// //convert map to array (these methods are for itterables)
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const airline = 'TAP Air Philippines';
// const plane = 'A320 ';

// //retrieving based on the given index
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// //length
// console.log(airline.length);
// console.log('B737'.length);

// //position in a string
// console.log(airline.indexOf('P'));
// console.log(airline.lastIndexOf('P'));
// console.log(airline.indexOf('Philippines'));

// //extract the string
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); //it will start at index 4 //stops before index 7

// //application u can use indexOf inside
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// //starts at the end // 2 digits from last
// console.log(airline.slice(-2));

// //will cut off the last letter
// console.log(airline.slice(1, -1));

// //
// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😨');
//   } else {
//     console.log('You got lucky 🧑‍🎄');
//   }
//   // what i made
//   //  string.slice(-1) === 'B' || string.slice(-1) === 'E'
//   //   ? console.log('You are in middle seat')
//   //   : console.log('You are not in middle seat ');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Allyn'));
// //Boxing convert string to string object to apply the methods behind the scenes
// // All string return string/primitives

// const airline = 'TAP Air Philippines';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //Fix capitalization
// const passenger = 'aLLyn';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.io \n';

// //trim removing spaces //trimStart() and trimEnd()
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(trimmedEmail === normalizedEmail);

// //replace part of strings replace() and replaceAll()
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));
// //g global

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320n'));
// console.log(plane.startsWith('A32'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome Aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//Split and Join
//Split the string into an array based on their dividers
// console.log('a+very+nice+string'.split('+'));
// console.log('Allyn Joshua C. Nieva'.split(' '));

// const [firstName1, firstName2, middleInitial, lastName] =
//   'Allyn Joshua C. Nieva'.split(' ');

// //join the array into string and specify the character between them
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const nameArr = name.trim().split(' ');
//   let namesUpper = [];
//   for (const name of nameArr) {
//     // namesUpper.push(name.replace(name[0], name[0].toUpperCase));
//     namesUpper.push(name[0].toUpperCase() + name.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('allyn joshua nieva');

// //padding a string padStart(,) padEnd(,)
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Allyn'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(2342123123));
// console.log(maskCreditCard('12312331'));

// //Repeat
// const message2 = 'Bad Weather... All Departures Delayed... ';
// console.log(message.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes on line ${'🛬'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output =
    `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
      36,
    );
  console.log(output);
}
