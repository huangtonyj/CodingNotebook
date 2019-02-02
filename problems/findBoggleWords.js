function findBoggleWords(dictionary, boggle) {

  // Create a mapping of where each letter is located
  const letterPosMap = createLetterPosMap(boggle);

  return dictionary.filter((word => {
    if (letterPosMap[word[0]] === undefined) {
      return false;
    } else {
      return letterPosMap[word[0]].some((startPos) => { // Check each starting point for the same first letter
        return findBoggleWord(word, boggle, startPos); // Return boolean if word was found at that starting position in the boggle.
      });
    }
  }));
}

const createLetterPosMap = (boggle) => {
  const letterPosMap = {};
  let currentLetter;
  boggle.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      currentLetter = boggle[rowIdx][colIdx];
      if (!letterPosMap[currentLetter]) { letterPosMap[currentLetter] = []; }
      letterPosMap[currentLetter].push([rowIdx, colIdx]);
    });
  });

  return letterPosMap;
};

const findBoggleWord = (word, boggle, startPos, visited = {}) => {
  if (word.length === 1) { return true; }
  
  visited[startPos] = true; // Mark current position on Boggle as visited.
  
  // Helper to find adjacent neighbors
  const neighbors = findUnvisitedNeighbor(startPos, boggle, visited);  
  
  // DFS check each neighbor to see if the next part of the word is found.
  word = word.slice(1);
  return neighbors.some( pos => {
    if (word[0] === boggle[pos[0]][pos[1]]) {
      return findBoggleWord(word, boggle, pos, visited);
    }
  });
};

const findUnvisitedNeighbor = (startPos, boggle, visited) => {
  const result = [];
  let newX, newY;

  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      if (x === 0 && y === 0) continue;

      newX = startPos[0] + x;
      newY = startPos[1] + y;
      
      if (boggle[newX] && boggle[newX][newY] && !visited[[newX, newY]]) {
        result.push([newX, newY]);
      }
    }
  }

  return result;
};



const dictionary = ["GEEKS", "FOR", "QUIZ", "GO", "SEEK", "SEEKS"];
const boggle = [
  ['G', 'I', 'Z'],
  ['U', 'E', 'K'],
  ['Q', 'S', 'E']
];

console.log(findBoggleWord('GEEKS', boggle, [0, 0]), true);
console.log(findBoggleWord('QUIZ', boggle, [2, 0]), true);
console.log(findBoggleWord('QUIZS', boggle, [2, 0]), false);
console.log(findBoggleWord('GO', boggle, [0, 0]), false);
console.log(findBoggleWord('SEEK', boggle, [2, 1]), true);
console.log(findBoggleWord('SEEKS', boggle, [2, 1]), false);
console.log(findBoggleWord('SEEKSEEK', boggle, [2, 1]), false);

console.log(findBoggleWords(dictionary, boggle), ['GEEKS', 'QUIZ', 'SEEK']);