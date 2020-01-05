// You are given a 2D matrix of 1s and 0s where 1 represents land and 0 represents water.
// Grid cells are connected horizontally orvertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// An island is a group is cells connected horizontally or vertically, but not diagonally. There is guaranteed to be exactly one island in this grid, and the island doesn't have water inside that isn't connected to the water around the island. Each cell has a side length of 1.

function landPerimeter(landMatrix) { 
  let perimeterCount = 0;

  for (let r = 0; r < landMatrix.length; r++) {
    for (let c = 0; c < landMatrix[r].length; c++) {
      if (landMatrix[r][c] === 0) continue;

      perimeterCount += 4;
      const adjacentCoord = getAdjacentCoords(r, c);

      for (let coord of adjacentCoord) {
        const [r, c] = coord;
        //Subtract perimeter count if adjacent coord is land;
        if (landMatrix[r] && landMatrix[r][c] === 1) perimeterCount -= 1;
      }
    }
  }

  return perimeterCount;
}

const getAdjacentCoords = (r, c) => { 
  return [
    [r - 1, c    ], // N 
    [r + 1, c    ], // S 
    [r    , c + 1], // E 
    [r    , c - 1]  // W 
  ];
};

module.exports = landPerimeter;