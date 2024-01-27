"use strict";

let Score = (document.querySelector(".score").textContent = 10);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = (document.querySelector(".highscore").textContent = 0);
const reset = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 10;
  Score = 10;
  document.querySelector(".check").textContent = "Check!";
  document.querySelector(".check").style.backgroundColor = "#FFFFFF";
};

const Again = document.querySelector(".again").addEventListener("click", reset);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter a Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Guessed Correct";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    highScore += 1;
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".check").textContent = "";
    document.querySelector(".check").style.backgroundColor = "#60b347";
  } else if (Score == 1) {
    document.querySelector(".message").textContent = "You Lose";
    document.querySelector("body").style.backgroundColor = "#FF0000";
    document.querySelector(".highscore").textContent = 0;
    document.querySelector(".score").textContent = 0;
    document.querySelector(".check").textContent = "";
    document.querySelector(".check").style.backgroundColor = "#FF0000";

    highScore = 0;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "To High";
    Score -= 1;
    document.querySelector(".score").textContent = Score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "To Low";
    Score -= 1;
    document.querySelector(".score").textContent = Score;
  }
});
