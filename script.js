// Helper cards and hands
const jack = generateCard(11, 0);
const queen = generateCard(12, 0);
const king = generateCard(13, 0);
const ace = generateCard(14, 0);
const ten = generateCard(10, 0);
const nine = generateCard(9, 0);

const testHand = [queen, ace, king, jack, ten];

const initGame = () => {
  if (gameMode % 2 === 0) {
    startButton.innerText = 'Swap!';
    resetClass();
    hand = [];
    // const testHand = [queen, ace, king, jack, ten];
    // hand = testHand;
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
      updateCredit(bet * (odds[score - 1] + 1));
    }
    else {
      updateCredit(-bet);
    }
    gameMode += 1;
  }
};

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

const flashRow = (rowNum) => {
  console.log(rowNum);
  const row = document.getElementById(`${rowNum}row`);
  console.log(row);
  row.className = 'winning-row';
};

const resetClass = () => {
  const row = document.getElementsByClassName('winning-row');
  const change = document.getElementById('win-loss');
  change.className = '';
  change.innerText = '';
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
