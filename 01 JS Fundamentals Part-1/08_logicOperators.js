// Define two variables
let x = 5;
let y = 10;

// Logical AND (&&)
console.log("Logical AND (&&):");
console.log(x < 10 && y > 5); // true (when all conditions are true)
console.log(x < 10 && y < 5); // false (First condition is true but second is false)

// Logical OR (||)
console.log("\nLogical OR (||):");
console.log(x < 10 || y > 5); // true (true when At least one condition is true)
console.log(x > 10 || y < 5); // false (Both conditions are false)

// Logical NOT (!)
console.log("\nLogical NOT (!):");
console.log(!(x == y)); // true (The condition x == y is false)
console.log(!(x < 10)); // false (The condition x < 10 is true)

// Logical AND (&&) with Logical OR (||)
console.log("\nLogical AND (&&) with Logical OR (||):");
console.log((x < 10 && y > 5) || (x > 10 && y < 5)); // true (At least one of the OR conditions is true)
console.log((x < 10 && y < 5) || (x > 10 && y < 5)); // false (Both OR conditions are false)
console.log((x > 10 && y < 5) || (x < 10 && y > 5)); // true (At least one of the OR conditions is true)
