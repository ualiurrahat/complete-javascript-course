// Initialize a variable to track the loop iteration
let i = 1;

// Start a while loop that runs as long as i is less than or equal to 5
while (i <= 5) {
  // If i is equal to 3, skip the current iteration and move to the next one
  if (i === 3) {
    console.log("Skipping iteration", i);
    i++; // Increment i to avoid an infinite loop
    continue; // Continue to the next iteration of the loop
  }

  // If i is equal to 5, exit the loop
  if (i === 5) {
    console.log("Breaking loop at", i);
    break; // Exit the loop
  }

  // Display the current value of i
  console.log("Current value of i:", i);

  // Increment i to move to the next iteration
  i++;
}

console.log("Loop finished.");
