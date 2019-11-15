// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. 
// A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). 
// The number of adjacent 1s forming a river determines its size. 
// Write a function that returns an array of the sizes of all rivers represented in the input matrix.

function riverSizes(landMatrix) {
  const result = [];

  let visitedCoord = landMatrix.map(row => row.map(col => false));  

  landMatrix.forEach((r, rIdx) => {
    r.forEach((c, cIdx) => {
      if (landMatrix[rIdx][cIdx] && !visitedCoord[rIdx][cIdx]) {
        const currentRiverSize = getRiverSize(landMatrix, [rIdx, cIdx], visitedCoord);
        result.push(currentRiverSize.riverSize);
        visitedCoord = currentRiverSize.visitedCoord; // update visitedCoord matrix;
      }
    });
  });

  return result;
}

const getRiverSize = (landMatrix, currentCoord, visitedCoord) => {
  let ans = 0;

  let stack = [currentCoord].concat(adjacentLands(landMatrix, currentCoord));
  
  while (stack.length) {
    const currentStackPos = stack.pop();
    const r = currentStackPos[0], c = currentStackPos[1];   
    
    if (visitedCoord[r][c]) continue;
    visitedCoord[r][c] = true;
    
    if (landMatrix[r][c]) {
      ans += 1;
      stack = stack.concat(adjacentLands(landMatrix, currentStackPos));
    }
  }
  
  return {riverSize: ans, visitedCoord: visitedCoord};
};

const adjacentLands = (landMatrix, currentCoord) => { 
  const neighboringLand = [];

  const potentialNeighboringLand = [
    [currentCoord[0] - 1, currentCoord[1]    ], // N 
    [currentCoord[0] + 1, currentCoord[1]    ], // S 
    [currentCoord[0]    , currentCoord[1] + 1], // E 
    [currentCoord[0]    , currentCoord[1] - 1]  // W 
  ];

  potentialNeighboringLand.forEach(landPos => {
    const r = landPos[0], c = landPos[1];
    if (landMatrix[r] && landMatrix[r][c] >= 0) neighboringLand.push(landPos);
  });

  return neighboringLand;
};

module.exports = riverSizes;