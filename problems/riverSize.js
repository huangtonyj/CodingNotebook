// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. 
// A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). 
// The number of adjacent 1s forming a river determines its size. 
// Write a function that returns an array of the sizes of all rivers represented in the input matrix.

function riverSizes(landMatrix) {
  const result = [];

  let visited = landMatrix.map(row => row.map(col => false));  

  landMatrix.forEach((r, rIdx) => {
    r.forEach((c, cIdx) => {
      if (landMatrix[rIdx][cIdx] && !visited[rIdx][cIdx]) {
        console.log(rIdx, cIdx);
        const reply = riverSize(landMatrix, [rIdx, cIdx], visited);
        console.log(reply);
        result.push(reply.riverSize);
        visited = reply.visited;
      }
    });
  });

  return result;
}

const riverSize = (landMatrix, currentPos, visited) => {
  let ans = 0;

  let stack = [currentPos].concat(adjacentLands(landMatrix, currentPos));
  
  while (stack.length) {
    const currentStackPos = stack.pop();
    const r = currentStackPos[0], c = currentStackPos[1];   
    
    if (visited[r][c]) continue;
    visited[r][c] = true;
    
    if (landMatrix[r][c]) {
      // console.log('currentStackPos', currentStackPos);
      ans += 1;
      stack = stack.concat(adjacentLands(landMatrix, currentStackPos));
    }
  }
  
  return {riverSize: ans, visited: visited};
};

const adjacentLands = (landMatrix, currentPos) => { 
  const neighboringLand = [];

  const potentialNeighboringLand = [
    [currentPos[0] - 1, currentPos[1]    ], // N 
    [currentPos[0] + 1, currentPos[1]    ], // S 
    [currentPos[0]    , currentPos[1] + 1], // E 
    [currentPos[0]    , currentPos[1] - 1]  // W 
  ];

  potentialNeighboringLand.forEach(landPos => {
    const r = landPos[0], c = landPos[1];
    if (landMatrix[r] && landMatrix[r][c] >= 0) neighboringLand.push(landPos);
  });

  return neighboringLand;
};






console.log(riverSizes([
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]), [1, 2, 2, 2, 5]);


// do a loop test case example;