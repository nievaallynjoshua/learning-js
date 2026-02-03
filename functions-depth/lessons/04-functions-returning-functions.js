'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Allyn');
greeterHey('Angel');

greet('Hello')('Allyn');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('ALlyn');
