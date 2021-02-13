"use strict";

// Select Elements
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");

const diceEL = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

//Start
let currentScore, activePlayer, playing, scores;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // Display
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;
    // Check and switch

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //dice is 1 - Switch
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add currnt score of actve player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score<100
    //finish game or switch
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEL.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
