// JS array methods : part 2
let arr1 = [1, 2, 3, 4, 5];
console.log("array 1:", arr1, ",length: ", arr1.length);
// delete operator: deletes element from the array but array length remains same. shows <empty item> in place of the deleted element.
delete arr1[1];
console.log("after deleting index 1 element:");
console.log("array 1:", arr1, ",length:", arr1.length, "deleted element: ", arr1[1]);
// arr1[1] becomes undefined as it has been deleted.

// concat() : join one or more arrays to the given arrays
// returns a new array. does not change the existing array
let arr2 = [10, 20, 30];
let arr3 = [40, 50];
let arr4 = [69, 420];
let arr5 = arr2.concat(arr3, arr4); //arr5 = arr2.concat(arr3);
// but it does not change arr2, arr3 or arr4
console.log("array 5 concatanationg arr2,arr3,arr4: ");
console.log(arr5);

console.log("array 2: ", arr2, "array 3: ", arr3, "array 4: ", arr4);



let num = [18, 1, 8, 5, 20, 25, 7, 9, 4, 3, 88];
console.log("num array : ", num);
// reverse(): reverse the elements by index-based.it overwrites the original array.
console.log("num array calling reverse funciton: ", num.reverse());
console.log("after reversing num array, now num array becomes:", num);
// sort() : sort the array elements alphabetically. modifies the original array.
num.sort();
console.log("num array after calling sorting function:", num);

// sort() can take an optional compare() function
// if compare() is added, it sorts the array based on compare function operation

// compare function
let compare = (a, b) => {
    return a - b; // sort value in ascending order
}
// calling the sort funciton adding optional user written compare function
num.sort(compare);
console.log("num array after sorting with compare function:", num);


// array.splice(index,numberOfElemetnsToBeRemoved, newNumbers)
// returns the deleted numbers and modifies source array

let a = [20, 1, 13, 5, 14, 24, 8];
console.log("array a: ", a);
// splice(): adds or removes elements from the array.
// it overwrites the original array.
//array.splice(index, howmany, item1, ....., itemX)
// index: 	Required.The position to add/remove items.
//Negative value defines the position from the end of the array.
// howmany: Optional.Number of items to be removed.
//item1,....,itemX: Optional.New elements(s) to be added.
a.splice(2, 3, 1000, 2000, 3000);
// it says from index 2 of array a, delete 3 objects, insert 1000,2000,3000.

console.log("array after perfroming splice in array a:", a);

// slice(): returns selected elements in an array, as a new array.
// selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.
//slice(start,end)
// slice(start)
let s = [10, 20, 30, 40, 50, 60];
console.log("array s before slicing: ", s);
let s1 = s.slice(3);// creates array from index 3 to end
console.log("array s1:", s1);
let s2 = s.slice(0, 3); // creates array from index 0 excluding 3
console.log("array s2:", s2);
console.log("array s after slicing: ", s);