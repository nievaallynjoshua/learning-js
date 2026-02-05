const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
//closure remembers birthplace variables
booker();
booker();
booker();

console.dir(booker);
secureBooking()();
