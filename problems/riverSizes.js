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
        // visitedCoord = currentRiverSize.visitedCoord; // update visitedCoord matrix;
      }
    });
  });

  return result;
}

const getRiverSize = (landMatrix, currentCoord, visitedCoord) => {
  let ans = 0;

  let stack = [currentCoord].concat(adjacentLands(landMatrix, currentCoord));
  
  while (stack.length) {
    const currentStackCoord = stack.pop();
    const [r, c] = currentStackCoord;
    
    if (visitedCoord[r][c]) continue;
    visitedCoord[r][c] = true;
    
    if (landMatrix[r][c]) {
      ans += 1;
      stack = stack.concat(adjacentLands(landMatrix, currentStackCoord));
    }
  }
  
  return {riverSize: ans, visitedCoord: visitedCoord};
};

const adjacentLands = (landMatrix, [r, c]) => { 
  const neighboringLand = [];

  const potentialNeighboringLand = [
    [r - 1, c    ], // N 
    [r + 1, c    ], // S 
    [r    , c + 1], // E 
    [r    , c - 1]  // W 
  ];

  potentialNeighboringLand.forEach(landCoord => {
    const [r, c] = landCoord;
    if (landMatrix[r] && landMatrix[r][c] >= 0) neighboringLand.push(landCoord);
  });

  return neighboringLand;
};



class Land {
  constructor(landMatrix) {
    this.landMatrix = landMatrix;
  }

  isRiver(coordinate) {
    const [r, c] = coordinate;
    return this.landMatrix[r][c] === 1;
  }
  
  isWithinLandBoundry([r,c]) {
    return this.landMatrix[r] && (this.landMatrix[r][c] >= 0);
  }

  getAdjacentLands([r, c]) {
    const potentialNeighboringLand = [
      [r - 1, c], // N 
      [r + 1, c], // S 
      [r, c + 1], // E 
      [r, c - 1] // W 
    ];

    return potentialNeighboringLand.filter(landCoord => {
      return this.isWithinLandBoundry(landCoord);
    });
  }

  getRiverSize(currentCoord, visitedCoord) {
    let ans = 0;

    let stack = [currentCoord].concat(this.getAdjacentLands(currentCoord));

    while (stack.length) {
      const currentStackCoord = stack.pop();
      const [r, c] = currentStackCoord;

      if (visitedCoord[r][c]) continue;
      visitedCoord[r][c] = true;

      if (this.isRiver(currentStackCoord)) {
        ans += 1;
        stack = stack.concat(this.adjacentLands(currentStackCoord));
      }
    }

    return {
      riverSize: ans,
      visitedCoord: visitedCoord
    };
  }

  riverSizes() {
    const result = [];

    let visitedCoord = this.landMatrix.map(row => row.map(col => false));

    this.landMatrix.forEach((r, rIdx) => {
      r.forEach((c, cIdx) => {
        if (this.landMatrix[rIdx][cIdx] && !visitedCoord[rIdx][cIdx]) {
          const currentRiverSize = getRiverSize(this.landMatrix, [rIdx, cIdx], visitedCoord);
          result.push(currentRiverSize.riverSize);
          // visitedCoord = currentRiverSize.visitedCoord; // update visitedCoord matrix;
        }
      });
    });

    return result;
  }

}

module.exports = {
  riverSizes,
  Land
};
