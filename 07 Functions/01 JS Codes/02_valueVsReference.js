'use strict';
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // flight remains unchanged
console.log(jonas); // chaneges made by function is added.
// WHY?
// fligh is acting just like passing a copy of the value
// of it. so, the changes made inside the function
// does not change its original value.

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
// for object passenger, the change made by the function call
// is found in the orignal object.
// it is nust like acting pass by reference like in c++.
//REMEMBER: JS does not have pass by reference thing.
// it only has pass by value thing.
// but passing dynamic data type(object,array) works
// just like pass by reference like in c++.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
