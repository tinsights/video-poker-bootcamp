const selectToSwap = (card, index) => {
  console.log(index);
  if (hand[index].returned) return;
  if (hand[index].selected) {
    card.classList.remove('selected');
  }
  else if (!hand[index].replaced) {
    card.classList.add('selected');
  }
  hand[index].selected = !hand[index].selected;
};

const swapCards = () => {
  for (i = 0; i < hand.length; i += 1) {
    if (hand[i].selected && !hand[i].replaced) {
      [hand[i]] = deal();
      hand[i].replaced = true;
    }
  }
  const replacedCards = document.getElementsByClassName('replaced');
  console.log(replacedCards);
  for (let i = 0; i < replacedCards.length; i++) {
    replacedCards[i].draggable = false;
  }

  console.log(hand);
  displayHand = printHand(hand);
  playArea.appendChild(displayHand);
};
