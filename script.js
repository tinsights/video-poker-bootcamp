// Helper cards and hands
const jack = generateCard(11, 0);
const queen = generateCard(12, 0);
const king = generateCard(13, 0);
const ace = generateCard(14, 0);
const ten = generateCard(10, 0);
const nine = generateCard(9, 0);

const testHand = [queen, ace, king, jack, ten];

const initGame = () => {
  startButton.disabled = true;
  replaceButton.disabled = false;
  hand = [];
  generateDeck();
  // hand = testHand;
  hand = hand.concat(deal(5));

  displayHand = printHand(hand);
  playArea.appendChild(displayHand);
};
