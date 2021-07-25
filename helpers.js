// generate a card object with rank/value, suit, and name
const generateCard = (rank, suitIndex) => {
  let name = '';
  let cardDisplay = '';
  switch (rank) {
    case 14:
      name = 'Ace';
      cardDisplay = 'A';
      break;
    case 11:
      name = 'Jack';
      cardDisplay = 'J';
      break;
    case 12:
      name = 'Queen';
      cardDisplay = 'Q';
      break;
    case 13:
      name = 'King';
      cardDisplay = 'K';
      break;
    default:
      name = rank;
      cardDisplay = rank;
  }
  const card = {
    title: `${name} of ${suits[suitIndex]}`,
    name,
    cardDisplay,
    rank,
    suit: suits[suitIndex],
    colour: suitIndex < 2 ? 'red' : 'black',
    symbol: symbols[suitIndex],
    selected: false,
    replaced: false,
  };
  return card;
};

// generate a shuffled standard deck of cards
const generateDeck = () => {
  for (let i = 2; i <= 14; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      // generates cards and inserts randomly into deck
      deck.splice(randomInt(deck.length + 1), 0, generateCard(i, j));
    }
  }
};

// returns the specified number of cards from the deck
const deal = (cards = 1) => deck.splice(0, cards);

const printHand = (hand) => {
  hand.sort((firstCard, secondCard) => firstCard.rank - secondCard.rank);
  playArea.innerHTML = '';
  console.log('Printing Hand');
  const displayHand = document.createElement('div');
  for (let i = 0; i < hand.length; i += 1) {
    displayHand.appendChild(printCard(hand[i], i));
  }
  return displayHand;
};

const printCard = (cardInfo, index) => {
  console.log(cardInfo);
  const suit = document.createElement('div');
  suit.classList.add('suit', cardInfo.colour);
  suit.innerText = cardInfo.symbol;

  const name = document.createElement('div');
  name.classList.add('name', cardInfo.colour);
  name.innerText = cardInfo.cardDisplay;

  const card = document.createElement('div');
  card.classList.add('card');

  card.appendChild(name);
  card.appendChild(suit);

  card.addEventListener('click', () => selectToSwap(card, index));
  // card.addEventListener('dragstart', () => dragToSwap(card, index));
  // card.addEventListener('dragend', () => unselect(card, index));
  card.draggable = true;

  return card;
};

// DOM output helper
const output = (message) => {
  gameInfo.innerHTML += `<br>${message}`;
};

// returns random interger betw 0 and max exclusive
const randomInt = (max) => Math.floor(Math.random() * max);
