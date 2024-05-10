'use strict';
// Map: a data structure that stores data in key-value pairs.
// object does the same too.
// differnece is that, object's keys are strings
// in map, keys can be anything, number,strings,array,objects...anything.

// creating a map.
const rest = new Map();
// to add elements in map
// set:use this funciton with key-value pair.
rest.set('name', 'Classico Italiano');
// key = name, value = Classico Italiano.
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// set() funciton alwasy returns a map. so we can use
// this funciton multiple times. as many times we want.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// to get values from map
// get:use this funciton. get(keyName)
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// deleting elements
// delete(keyName)
rest.delete(2);
// rest.clear();

// adding elements taking array as key
const arr = [1, 2];
rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
// to get size of map
console.log(rest.size);

console.log(rest.get(arr));
