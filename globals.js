// GLOBAL DOM ELEMENTS
const gameInfo = document.createElement('div');
const startButton = document.createElement('button');
const playArea = document.createElement('div');
const mainContainer = document.createElement('div');

playArea.className = 'card-container';
mainContainer.id = 'main-container';

startButton.innerText = 'Start New Game';

mainContainer.appendChild(playArea);

document.body.appendChild(startButton);
document.body.appendChild(mainContainer);
document.body.appendChild(gameInfo);

document.addEventListener('DOMContentLoaded', () => {
  startButton.addEventListener('click', initGame);
});

// GLOBAL Constants
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const symbols = ['♥', '♦', '♣', '♠'];
const deck = [];
