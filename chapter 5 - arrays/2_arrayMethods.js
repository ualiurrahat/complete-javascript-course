// js array methods: part 1
let num = [18, 1, 8, 5, 20];
console.log(num);
let a = num.toString(); // converts whole elements into string with comma
console.log(a, typeof a);

let b = num.join("+"); // joins all elements using a seperator
console.log(b, typeof b);

let c = num.pop(); // removes last element. returns the element. update the array
console.log(c, num);


let d = num.push(25); // adds element at the end of the array. returns array length. updates the array.
console.log(d, num);


let e = num.shift(); // removes first element and returns it.updates the array.
console.log(e, num);

let f = num.unshift(100); // adds element at start. returns new array length.updates the array
console.log(f, num);