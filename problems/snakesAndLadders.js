// Snakes and Ladders is a game played on a 10 x 10 board, 
// the goal of which is get from square 1 to square 100. 
// On each turn players will roll a six-sided die and move forward a number of spaces equal to the result. 
// If they land on a square that represents a snake or ladder, 
// they will be transported ahead or behind, respectively, to a new square.

// Find the smallest number of turns it takes to play snakes and ladders.
// Here are the squares representing snakes and ladders, and their outcomes:

const SNAKES = {
  16: 6,
  48: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78
};
const LADDERS = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100
};

function snakesAndLadders(snakes = SNAKES, ladders = LADDERS) {


  return;
}

console.log(snakesAndLadders());