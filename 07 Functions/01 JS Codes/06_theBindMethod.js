'use strict';
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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;
// bind(): used to create a new function that, when called, has its this keyword set to the provided value.
// It also allows you to preset arguments for the function.
// syntax: function.bind(thisArg,arg1,arg2,...)
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
/*
NOTE: here, book funciton has 2 arguments(flightNum,name)
in bookEW23, bind function has taken this argument
and flightNum argument.
this is called PARTIAL APPLICATION.
means parts of all the arguments of the original funciton
are applied here in bind function.
then we called the funciton with name ('jonas schmedtmann) 

*/

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// let's assume that rate is always 23%
// creating a funciton for that using bind to the upper function.
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
// first arguement is null, as bind takes thisArg first
// since we are not concerend with this keyword here,
// we wrote null.

console.log(addVAT(100));
console.log(addVAT(23));

// challenge: create the addTax function that returns
// another function to calculate tax without using the bind()

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
