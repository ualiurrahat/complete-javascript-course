'use strict';
// Set: a data structure that holds only unique elements.
// can containe multiple types of data in the same set
// considers single entry even if multiple entries of
// same element is entered in the set.

// how to declare a set
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// has same element more than one but
// orderSet does not consider them.
console.log(ordersSet);

// set enters each letter if strings is passed onto it.
console.log(new Set('rahat'));
// set functions:
//size: to find size of site
console.log(ordersSet.size);
// has: to check if an element exists in the set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// add: add new element in an existing set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
// delete: delete an exiting item from set.
ordersSet.delete('Risotto');
// clear: to delete all items
// ordersSet.clear();
console.log(ordersSet);

// looping over set
for (const order of ordersSet) console.log(order);

// use case of set:
// 1. to find unique elements in an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUniqueSet = new Set(staff)

// creating unique elements from with the help of set
// using spread operator.
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// we can do the same not even creating new array.
// like this:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// 2. to find unique letters in a string
console.log(new Set('ualiurrahat').size);
for (const letter of new Set('ualiurrahat')) {
  console.log(letter);
}
