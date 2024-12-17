"use strict";

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initialize the score to 20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const scoreReset = function (number) {
  document.querySelector(".score").textContent = number;
};

// add click event listener to the check button
document.querySelector(".check").addEventListener("click", function () {
  // get the users guess from input and convert to number
  const guess = Number(document.querySelector(".guess").value);

  // if no valid number was entered
  if (!guess) {
    // document.querySelector('.message').textContent = 'Wrong Input Format 😐';
    displayMessage("Wrong Input Format 😐");
  }
  // if guess matches secret number
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   "You've Guessed it Right!! 😁";
    displayMessage("You've Guessed it Right!! 😁");
    // display the secret number in the UI
    document.querySelector(".number").textContent = secretNumber;
    // changing the background-color as soon as user get's the correct number
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // increase score by 1 for correct guess
    score++;
    document.querySelector(".score").textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High 😐' : 'Too Low 😒';
      // score--;
      displayMessage(guess > secretNumber ? "Too High 😐" : "Too Low 😒");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😥';
      displayMessage("You lost the game 😥");
      scoreReset(0);
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});
// resetting game functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
