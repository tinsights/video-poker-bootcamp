const cardTally = (hand) => {
  hand.sort((firstCard, secondCard) => firstCard.rank - secondCard.rank);
  // Create Object as tally
  const cardNameTally = {};
  const firstSuit = hand[0].suit;
  const firstRank = hand[0].rank;
  let isFlush = true;
  let isStraight = true;

  // Loop over hand
  for (let i = 0; i < hand.length; i += 1) {
    const cardName = hand[i].name;
    // If we have seen the card name before, increment its count
    if (cardName in cardNameTally) {
      cardNameTally[cardName] += 1;
    }
    // Else, initialise count of this card name to 1
    else {
      cardNameTally[cardName] = 1;
    }
    if (isStraight) {
      isStraight = hand[i].rank === firstRank + i;
    }
    if (isFlush) {
      isFlush = hand[i].suit === firstSuit;
    }
  }
  cardNameTally.Flush = isFlush;
  cardNameTally.Straight = isStraight;
  // eslint-disable-next-line
  for (const cardName in cardNameTally) {
    console.log(`There are ${cardNameTally[cardName]} ${cardName}s in the hand`);
  }
  console.log(cardNameTally);
  return cardNameTally;
};

const pairs = (tally) => tally.Jack === 2 || tally.Queen === 2 || tally.King === 2 || tally.Ace === 2;
const twoPairs = (tally) => getKeyByValue(tally, 2).length === 2;
const threeOfAKind = (tally) => getKeyByValue(tally, 3).length === 1;
const fourOfAKind = (tally) => getKeyByValue(tally, 4).length === 1;
const fullHouse = (tally) => getKeyByValue(tally, 3).length === 1 && getKeyByValue(tally, 2).length === 1;
const royalFlush = (tally) => tally.Ace === 1 && tally.Straight && tally.Flush;

const calcScore = () => {
  const tally = cardTally(hand);
  let score = 0;

  score = pairs(tally) ? 1 : score;
  score = twoPairs(tally) ? 2 : score;
  score = threeOfAKind(tally) ? 3 : score;
  score = tally.Straight ? 4 : score;
  score = tally.Flush ? 5 : score;
  score = fullHouse(tally) ? 6 : score;
  score = fourOfAKind(tally) ? 7 : score;
  score = tally.Straight && tally.Flush ? 8 : score;
  score = royalFlush(tally) ? 9 : score;
  console.log(score);
  return score;
};

const getKeyByValue = (object, value) => Object.keys(object).filter((key) => object[key] === value);
