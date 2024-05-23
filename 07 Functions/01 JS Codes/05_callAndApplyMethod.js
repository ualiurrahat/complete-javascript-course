'use strict';
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');
// because the book inside lufthansa obj is a method
// For a method, this keyword takes value of the current object
// but here, the single const book function is not a method
// it is just a regular function. for a regular function
// value of 'this' is undefined. so book(23,'Sarah Williams') does not work.

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// call and apply: both usef for borrowing method of other objects.
// Call: a method for funciton
// calls a function with a given this value and arguments provided individually.
// func.call(thisArg, arg1, arg2, ...);
book.call(swiss, 583, 'Mary Cooper');

// Apply method
//takes an array of arguments instead of listing them individually.
// func.apply(thisArg, [argsArray]);
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// NOTE: Apply() is now not used much in modern JS
// we use call most of the time.
book.call(swiss, ...flightData);
