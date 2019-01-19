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

  // Start at state 0;
  const queue = [[0]]; 
  // Keep track of visited state to avoid loop
  const visitedStep = new Set(); 
  let currentSteps, currentState, nextState;
  
  do {
    currentSteps = queue.shift();
    currentState = currentSteps[currentSteps.length - 1];
    
    // If it has been visited, consequent paths are slower than the first.
    if (visitedStep.has(currentState)) { continue; }

    visitedStep.add(currentState);
      
      // Look at the next 6 possible states to be in.
      for (let i = 1; i <= 6; i++) {
        nextState = currentState + i;

        // If it encounters are snake/ladder state, go there.
        if (snakes[nextState]) {nextState = snakes[nextState];}
        if (ladders[nextState]) {nextState = ladders[nextState];}
          
        queue.push([...currentSteps, nextState]);
    }
    
  } while (currentState !== 100);
  
  return currentSteps;
}

console.log(snakesAndLadders());