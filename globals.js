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
mainContainer.appendChild(cardContainer);
mainContainer.appendChild(crtEffect);

document.body.appendChild(gameInfo);

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', initGame);
  addBetButton.addEventListener('click', betIncrement);
  subBetButton.addEventListener('click', betDecrement);
});

// GLOBAL Constants
const suits = ['H', 'D', 'C', 'S'];
const symbols = ['♥', '♦', '♣', '♠'];
const deck = [];
const hand = [];
const displayHand = '';
const odds = [1, 2, 3, 4, 6, 9, 25, 50, 250];
const credit = 100;
const bet = 1;
const gameMode = 0;
