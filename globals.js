/* eslint-disable no-undef */
/* eslint-disable prefer-const */
// GLOBAL DOM ELEMENTS
const mainContainer = document.createElement('div');
const startButton = document.createElement('button');
const replaceButton = document.createElement('button');
const submitButton = document.createElement('button');
const playArea = document.createElement('div');
const gameInfo = document.createElement('div');

// const testCard = document.createElement('img');
// testCard.className = 'card-image';
// testCard.src = '/video-poker/img/Minicard/Minicard_9D.svg.png';
// playArea.appendChild(testCard);

playArea.className = 'card-container';
mainContainer.id = 'main-container';
startButton.innerText = 'Start New Game';
replaceButton.innerText = 'Replace Cards';
submitButton.innerText = 'Done!';

replaceButton.disabled = true;

mainContainer.appendChild(playArea);
document.body.appendChild(startButton);
document.body.appendChild(replaceButton);
document.body.appendChild(submitButton);
document.body.appendChild(mainContainer);
document.body.appendChild(gameInfo);

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', initGame);
  replaceButton.addEventListener('click', swapCards);
  submitButton.addEventListener('click', calcScore);
});

// GLOBAL Constants
const suits = ['H', 'D', 'C', 'S'];
const symbols = ['♥', '♦', '♣', '♠'];
const deck = [];
let hand = [];
let displayHand = '';
