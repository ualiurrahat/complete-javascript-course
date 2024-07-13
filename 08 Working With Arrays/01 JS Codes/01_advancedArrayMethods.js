// ARRAY METHODS: PART 2
//..............................................
// SLICE
// slice(): returns selected elements in an array, as a new array.
// selects from a given start, up to a (exclusive) given end.
// does not change the original array.
//slice(start,end)
// slice(start)
// slice(-2): return the last 2 elements
let s = ["a", "b", "c", "d", "e"];
console.log(s);
// creates array from index 0 excluding 3
console.log(s.slice(0, 3));
// creates array from index 3 to end
console.log(s.slice(3));
// will show 2 elements starting from last
console.log(s.slice(-2));
// starts from index 1 and goes till the last 2 elements
console.log(s.slice(1, -2));
// NOTE: slice() doesn't change the original array
console.log(s);
// if no parameters are passed, slice returns the whole array as sliced.
// but it is not the original array
// this is called shallow copy using slice.
console.log(s.slice());
// console.log(s === s.slice()); returns false
// Note: the spread operator does the same shallow copy
console.log([...s]);
// which one to use for shallow copy? Slice() or spread [...]
// well it's up to you.
//..........................

// SPLICE
// splice(): adds or removes elements from the array.
// it overwrites the original array.
//array.splice(index, howmany, item1, ....., itemX)
// index: 	Required.The position to add/remove items.
//Negative value defines the position from the end of the array.
// howmany: Optional.Number of items to be removed.
//item1,....,itemX: Optional.New elements(s) to be added.
// array.splice(index,numElemetnsToBeRemoved, newNumbers)
// returns the deleted numbers and modifies original array

let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("array a: ", a);

a.splice(2, 3, 1000, 2000, 3000);
// it says from index 2 of array a, delete 3 objects, insert 1000,2000,3000 ath those indexes.

console.log("array after perfroming splice in array a:", a); // original array is changed
// removing the last 3 elements of the array
console.log(a.splice(-3)); // [80,90,100]
// no see the orignial array
console.log(a); // 80,90,100 deleted
//............................
// REVERSE
// reverse(): reverse the elements by index-based.it overwrites the original array.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("num array : ", num);
console.log("num array calling reverse funciton: ", num.reverse());
console.log("after reversing num array, now num array becomes:", num);
//...........................
// CONCAT
// concat() : join one or more arrays to the given arrays
// returns a new array. does not change the existing array
let arr2 = [10, 20, 30];
let arr3 = [40, 50];
let arr4 = [69, 420];
let arr5 = arr2.concat(arr3, arr4); //arr5 = arr2.concat(arr3);
// NOTE: what concat does we can do the same using spread operator
// let arr5 = [...arr2, ...arr3, ...arr4];
console.log(arr2, arr3, arr4, arr5);
//..........................
// SORT
// sort() : sort the array elements alphabetically i.e. loxicographically. modifies the original array.
num.sort();
console.log("num array after calling sorting function:", num);

// sort() can take an optional compare() function
// if compare() is added, it sorts the array based on compare function operation

// compare function
let compare = (a, b) => {
  return a - b; // sort value in ascending order
};
// calling the sort funciton adding optional user written compare function
num.sort(compare);
console.log("num array after sorting with compare function:", num);
//....................
// DELETE opeator
// delete operator: deletes element from the array but array length remains same. shows <empty item> in place of the deleted element.
let arr1 = [1, 2, 3, 4, 5];
console.log("array 1:", arr1, ",length: ", arr1.length);
delete arr1[1];
console.log("after deleting index 1 element:");
console.log(
  "array 1:",
  arr1,
  ",length:",
  arr1.length,
  "deleted element: ",
  arr1[1]
  // arr1[1] becomes undefined as it has been deleted.
);
// The New At() method
let digits = [10, 20, 30, 40, 50];

console.log(digits[0]);
console.log(digits.at(0));

// getting last element
console.log(digits[digits.length - 1]);
console.log(digits.slice(-1)[0]);
console.log(digits.at(-1));

// At() also works on strings
console.log("rahat".at(0));
console.log("rahat".at(-1));
