// Q1: create an array of numbers and take input from users to insert them in the array.
console.log("solution of question 1:............");
let totalNumbers = prompt("total how many numbers: ");
totalNumbers = Number.parseInt(totalNumbers);
let array = [];
for (let i = 0; i < totalNumbers; i++) {
    let num = prompt("enter number: ");
    num = Number.parseInt(num);
    array.push(num);
}
console.log("The array is: ");
console.log(array);

// Q2: keep adding numbers to the array until 0 is added to the array.
console.log("Solution for question 2..........:")
let flag = true;
while (flag) {
    let number = prompt("Enter number:");
    number = Number.parseInt(number);
    if (number != 0) {
        array.push(number);
    }
    else {
        array.push(0);
        flag = false;
    }
}
console.log("array after inserting 0: ");
console.log(array);

// Q3: filters the numbers divisible by 10 from a given array.
let arr = [0, 10, 80, 7, 6, 50, 9, 3, 55, 1, 18, 33, 87];
console.log("solution for question 3:..........");
let ans = arr.filter((val) => {
    return (val % 10) == 0;
});
console.log("array of numbers divisible by 10:");
console.log(ans);

// Q4: create an array of square of given numbers.
console.log("solution of question 4:........");
let square = arr.map((val) => {
    return val * val;
});
console.log("array of numbers with their squared value:");
console.log(square);

// Q5: Use reducer to calculate factorial of a given number from an array of first n natural numbers.
console.log("Solution for quesiton 5:.........");
let nums = [1, 2, 3, 4, 5, 6, 7];
// lets find 7!
let n = nums.reduce((a, b) => {
    return a * b;
});
console.log("Factorials of first 7 natural numbers are: ");
console.log(n);