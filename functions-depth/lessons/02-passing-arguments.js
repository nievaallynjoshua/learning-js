'use strict';
const flight = 'LH234';
const allyn = {
  name: 'Allyn Joshua Nieva',
  passport: 1231234123123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 1231234123123) {
    alert('Checked In!');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, allyn);
console.log(flight);
console.log(allyn);

const flightNum = flight;
const passenger = allyn;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(allyn);
checkIn(flight, allyn);

//passing by value
//passing by reference
