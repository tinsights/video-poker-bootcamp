/* eslint-disable no-undef */
/* eslint-disable prefer-const */
// GLOBAL DOM ELEMENTS
// const mainContainer = document.createElement('div');
const mainContainer = document.getElementById('main-container');
const startButton = document.getElementById('dealBtn');
const replaceButton = document.getElementById('replaceBtn');
const submitButton = document.getElementById('calcBtn');
const addBetButton = document.getElementById('add-bet');
const subBetButton = document.getElementById('sub-bet');
const betAmount = document.getElementById('betAmount');
const cardContainer = document.createElement('div');
const gameInfo = document.createElement('div');
const crtEffect = document.createElement('div');

crtEffect.className = 'crt';
cardContainer.className = 'card-container';
// mainContainer.id = 'main-container';
// startButton.innerText = 'Start New Game';
// replaceButton.innerText = 'Replace Cards';
// submitButton.innerText = 'Done!';

mainContainer.appendChild(cardContainer);
mainContainer.appendChild(crtEffect);
// document.body.appendChild(startButton);
// document.body.appendChild(replaceButton);
// document.body.appendChild(submitButton);
// document.body.appendChild(mainContainer);
document.body.appendChild(gameInfo);

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', initGame);
  // replaceButton.addEventListener('click', swapCards);
  // submitButton.addEventListener('click', calcScore);
  addBetButton.addEventListener('click', betIncrement);
  subBetButton.addEventListener('click', betDecrement);
});

// GLOBAL Constants
const suits = ['H', 'D', 'C', 'S'];
const symbols = ['♥', '♦', '♣', '♠'];
const deck = [];
let hand = [];
let displayHand = '';
const odds = [1, 2, 3, 4, 6, 9, 25, 50, 250];
let credit = 100;
let bet = 1;
let gameMode = 0;
