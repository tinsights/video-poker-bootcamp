/**
 * function that adds/removes class and CSS style to the clicked card
 * and changes the 'selected' boolean key in the card object
 * @param {cardObject} card DOM of card to be selected
 * @param {number} index of card in global variable hands
 * @returns nothing
 */
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
/**
 * function that swaps selected cards for new cards
 */
const swapCards = () => {
  for (i = 0; i < hand.length; i += 1) {
    if (!hand[i].selected && !hand[i].replaced) {
      [hand[i]] = deal();
    }
    hand[i].replaced = true;
  }

  console.log(hand);
  printHand();
};
