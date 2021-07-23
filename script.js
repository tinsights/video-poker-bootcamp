// Helper cards and hands
const jack = generateCard(11, 0);
const queen = generateCard(12, 0);
const king = generateCard(13, 0);
const ace = generateCard(14, 0);
const ten = generateCard(10, 0);
const nine = generateCard(9, 0);

const testHand = [queen, ace, king, jack, ten];

const initGame = () => {
  generateDeck();
  const hand = testHand;
  hand.sort((firstCard, secondCard) => firstCard.rank - secondCard.rank);

  const displayHand = printHand(hand);
  playArea.appendChild(displayHand);
  const tally = cardTally(hand);
  const score = calcScore(tally);
};
