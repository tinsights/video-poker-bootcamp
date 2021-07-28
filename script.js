/*
function runs on every main button click
deals a new hand of 5 cards when clicked once
swaps cards and calculates hand score when clicked twice
 */
const initGame = () => {
  if (gameMode % 2 === 0) {
    startButton.innerText = 'Swap!';
    resetClass();
    hand = [];
    generateDeck();
    hand = hand.concat(deal(5));

    displayHand = printHand(hand);
    gameMode += 1;
  }
  else if (gameMode % 2 === 1) {
    startButton.innerText = 'Deal!';
    addBetButton.disabled = false;
    subBetButton.disabled = false;
    swapCards();
    const score = calcScore();
    if (score) {
      flashRow(score);
      updateCredit(bet * (odds[score - 1]));
    }
    else {
      updateCredit(-bet);
    }
    gameMode += 1;
  }
};

/**
 * updates the global variable credit
 * @param {number} amount to be added/subtracted
 */
const updateCredit = (amount) => {
  console.log(amount);
  const change = document.getElementById('win-loss');
  change.className = '';
  change.innerText = '';
  if (amount > 0) {
    change.innerText = `+${amount}`;
    change.className = 'credit-increase';
  }
  else {
    change.innerText = `${amount}`;
    change.className = 'credit-decrease';
  }
  credit += amount;
  const creditText = document.getElementById('credits-remaining');
  creditText.innerText = `\₿${credit}`;
};

/**
 * functions that flashes the winning row
 * in the scoring table
 * to let the player easily see the value of his hand
 * @param {number} rowNum
 */
const flashRow = (rowNum) => {
  console.log(rowNum);
  const row = document.getElementById(`${rowNum}row`);
  console.log(row);
  row.className = 'winning-row';
};

/**
 * resets css classes of cards and rows for the next round
 */
const resetClass = () => {
  const row = document.getElementsByClassName('winning-row');
  addBetButton.disabled = true;
  subBetButton.disabled = true;
  if (row.length) {
    row[0].classList.remove('winning-row');
  }
  const cards = document.getElementsByClassName('win');
  for (let i = 0; i < cards.length; i += 1) {
    console.log('here');
    cards[i].classList.remove('win');
  }
};
