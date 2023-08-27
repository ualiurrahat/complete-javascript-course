/* ..........Snake,Water,Gun Game........
use JS to create a game of snake,water and gun.
The game should ask you to enter S,W or G.
The computer should be able to randomly generate S,W or G and
declare win or less using alert.



*/


// take user input: s,w or g for snake, water, gun

let userInput;
// var to store computer choice for snake, gun or water
let randomComputerChoice;
// var to count score and total no. of time game played
let scores = 0;
let numberOfTurns = 0;

// funtion to create value as snake,water or gun for computer
const randomChoiceGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 100);


    if (randomNumber <= 33) {
        randomComputerChoice = 's';
    }
    else if (randomNumber > 33 && randomNumber <= 66) {
        randomComputerChoice = 'w';
    }
    else {
        randomComputerChoice = 'g';
    }
    return randomComputerChoice;
}

// function to make results based on user and computer choice
// returns 1 for user's win, 0 for draw, -1 for lose
const result = (userInput, randomComputerChoice) => {

    // case 1 - draw case : s-s or g-g or w-w
    if (userInput == randomComputerChoice)
        return 0;
    // case 2 : win case for snake, water and gun
    if ((userInput == 's' && randomComputerChoice == 'w') || (userInput == 'w' && randomComputerChoice == 'g') || (userInput == 'g' && randomComputerChoice == 's')) {
        // update scores

        return 1;
    }
    // all other case are lose case
    else {
        return -1;
    }
}

// show winning shoutout
const showResult = () => {
    if (result(userInput, randomComputerChoice) == 1) {
        alert("You chose " + userInput + " and AI Chose " + randomComputerChoice + " \nYou won!");
    }
    // show losing shoutout
    else if (result(userInput, randomComputerChoice) == -1) {
        alert("You chose " + userInput + " and AI Chose " + randomComputerChoice + " \nYou lost!");
    }
    else {
        alert("You chose " + userInput + " and AI Chose " + randomComputerChoice + "\n Match Drawn!");
    }

}
let playAgain;
// loop to run games as per user's wish
do {
    // generating random computer choice
    randomComputerChoice = randomChoiceGenerator();
    userInput = prompt("Enter s for snake, w for water or g for gun: ");
    result(userInput, randomComputerChoice);
    showResult();
    playAgain = confirm("wanna play again? ");
    // update total turns
    ++numberOfTurns;
    if (result(userInput, randomComputerChoice) == 1) {
        ++scores;
    }

} while (playAgain);

// complete result Show
alert("Total played: " + numberOfTurns + " times. \nTotal won: " + scores);


