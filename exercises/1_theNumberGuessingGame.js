/*
Question: Write a JS program to generate a rondom number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater than or lower than the generated random number.
(100-no. of guesses) is the score of the user.
The program is expected to terminate once the correct number is guessed. The number should be between 1 to 100.
*/
console.log("The Number guessing Game:........................");
// generating a random number between 1 to 100
let randomNumber = Math.floor(Math.random() * 100 + 1);
// take user guessed number.
let guessedNumber = prompt("Enter your guessing number between 1-100: ");
// guessedNumber is in string format since it is taken by prompt.
// converting it into number variable.
guessedNumber = Number.parseInt(guessedNumber);
// to calculate score of the user or player.
let score = 100;



// confidition to check first guess is correct
if (randomNumber == guessedNumber) {
    console.log("Congrats! You guessed the number in first attempt!");
    // first correct guess gets 100 score.
    console.log("Your score: " + score);

}
else
//  first guess is not correct
{
    // reduced score by 1 for each wrong guess
    --score;
    // take input from user untill it mathches the generated random number.
    while (guessedNumber != randomNumber) {
        // if user given number is less than computer generated number.
        if (guessedNumber < randomNumber) {
            // show the message to input greater number.
            console.log("Greater than " + guessedNumber);
            // take user guessed number as input
            guessedNumber = prompt("Enter your number: ");
            // reduce the score since it is not the correct one.
            --score;
        }
        // case for guessed number being lower than random number.
        else {
            // show the message for lesser number input
            console.log("lesser than " + guessedNumber);
            // again take input from user.
            guessedNumber = prompt("Enter your number: ");
            // reduce score by 1 as it is not the correct guess.
            --score
        }
    }

}
// code comes out of the loop. means wright number is guessed.
console.log("You guessed the number right at " + (100 - score) + " attempts.");
// show the score.
console.log("Your Score: " + score);
