function findBoggleWords(dictionary, boggle) {



}

const findBoggleWord = (word, boggle, startPos) => {

  const visited = new Set();
  let currentLetter;


  return findUnvisitedNeighbor([1,1], boggle, visited);


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
// console.log(findBoggleWords(dictionary, boggle), ['GEEKS', 'QUIZ']);