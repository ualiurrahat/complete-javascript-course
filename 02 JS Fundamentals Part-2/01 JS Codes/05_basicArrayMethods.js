// js array methods: part 1
let num = [18, 1, 8, 5, 20];
console.log(num);

// Add elements
//  push: ads element at the end
//  the function returns the length of the array after addiona is performed
let d = num.push(25);
console.log(d, num);
// unshift: adds element at start. returns new array length.updates the array
let f = num.unshift(100);
console.log(f, num);
// toString: converts whole elements into string with comma
let a = num.toString();
console.log(a, typeof a);

// join: joins all elements using a seperator
let b = num.join("+");
console.log(b, typeof b);

// remove elements
// pop:removes last element. returns the element. update the array
let c = num.pop();
console.log(c, num);

// shift: removes first element and returns it.updates the array.
let e = num.shift();
console.log(e, num);

// indexOf: returns indexes of an element
// if element is not present, returns -1
console.log(num.indexOf(20));
console.log(num.indexOf(1000));

// includes: returns true if element is present in the array
// either returns false
// includes checks with strict equality. so it doesn't perform type coercion.
console.log(num.includes(18));
console.log(num.includes(1000));
