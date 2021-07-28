const jacksPayout = document.getElementById('jacksPayout');
const twoPairsPayout = document.getElementById('twoPairsPayout');
const threeKindPayout = document.getElementById('threeKindPayout');
const straightPayout = document.getElementById('straightPayout');
const flushPayout = document.getElementById('flushPayout');
const fullHousePayout = document.getElementById('fullHousePayout');
const fourKindPayout = document.getElementById('fourKindPayout');
const sFlushPayout = document.getElementById('sFlushPayout');
const rFlushPayout = document.getElementById('rFlushPayout');
const betAmount = document.getElementById('betAmount');

/**
 * increases the bet amount to a maximum of 5
 */
const betIncrement = () => {
  bet = bet == 5 ? 5 : bet += 1;
  betAmount.innerHTML = `₿${bet}`;
  updatePayouts(bet);
};
/**
 * decreases the bet amount to a minimum of 1
 */
const betDecrement = () => {
  bet = bet == 1 ? 1 : bet -= 1;
  betAmount.innerHTML = `₿${bet}`;
  updatePayouts(bet);
};
/**
 * changes the payout column in the score table
 * relative to the betting amount
 */
const updatePayouts = (bet) => {
  jacksPayout.innerText = `${bet * odds[0]}`;
  twoPairsPayout.innerText = `${bet * odds[1]}`;
  threeKindPayout.innerText = `${bet * odds[2]}`;
  straightPayout.innerText = `${bet * odds[3]}`;
  flushPayout.innerText = `${bet * odds[4]}`;
  fullHousePayout.innerText = `${bet * odds[5]}`;
  fourKindPayout.innerText = `${bet * odds[6]}`;
  sFlushPayout.innerText = `${bet * odds[7]}`;
  if (bet == 5) {
    rFlushPayout.innerText = '4000';
  }
  else {
    rFlushPayout.innerText = `${bet * odds[8]}`;
  }
};
