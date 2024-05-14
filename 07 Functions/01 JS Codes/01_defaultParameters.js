'use strict';
// Default Parameters
const bookings = [];

const createBooking = function (
  // ES6(way to assign default values)
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 (to assign default values)
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // numPassangers and price take default values
createBooking('LH123', 2, 800); // here, they take passed values.
createBooking('LH123', 2); // numPassenger is 2
createBooking('LH123', 5); // numPassenger is 5

// use 'undefined' to not set value of numPassengers
// then it will take default value which is 1.
createBooking('LH123', undefined, 1000);
