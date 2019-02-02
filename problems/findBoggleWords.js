function findBoggleWords(dictionary, boggle) {

  // dictionary.filter((word => {
  //   findBoggleWord(word, boggle, startPos);
  // }));


}

const findBoggleWord = (word, boggle, startPos, visited = new Set()) => {
  if (word.length === 1) { return true; }
  
  visited.add(startPos);
  word = word.slice(1);

  const neighbors = findUnvisitedNeighbor(startPos, boggle, visited);
  
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
      
      if (boggle[newX] && boggle[newX][newY] && !visited.has([newX, newY])) {
        result.push([newX, newY]);
      }
    }
  }

  return result;
};




const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
const boggle = [
  ['G', 'I', 'Z'],
  ['U', 'E', 'K'],
  ['Q', 'S', 'E']
];

console.log(findBoggleWord('GEEKS', boggle, [0, 0]), true);
console.log(findBoggleWord('QUIZ', boggle, [2, 0]), true);
console.log(findBoggleWord('QUIZS', boggle, [2, 0]), false);

// console.log(findBoggleWords(dictionary, boggle), ['GEEKS', 'QUIZ']);