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
