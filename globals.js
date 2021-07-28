/* eslint-disable no-undef */
/* eslint-disable prefer-const */
// GLOBAL DOM ELEMENTS
const mainContainer = document.getElementById('main-container');
const startButton = document.getElementById('dealBtn');
const addBetButton = document.getElementById('add-bet');
const subBetButton = document.getElementById('sub-bet');
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
let deck = [];
let hand = [];
let displayHand = '';
const odds = [1, 2, 3, 4, 6, 9, 25, 50, 250];
let credit = 100;
let bet = 1;
let gameMode = 0;
