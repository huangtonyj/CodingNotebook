// You are given a 2D matrix of 1s and 0s where 1 represents land and 0 represents water.
// Grid cells are connected horizontally orvertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// An island is a group is cells connected horizontally or vertically, but not diagonally. There is guaranteed to be exactly one island in this grid, and the island doesn't have water inside that isn't connected to the water around the island. Each cell has a side length of 1.

function landPerimeter(landMatrix) { 
  let perimeterCount = 0;

  landMatrix.forEach((r, rIdx) => {
    r.forEach((c, cIdx) => {

      if (landMatrix[rIdx][cIdx] === 0) return;
      
      perimeterCount += 4;

      const myadjacentLands = adjacentLands(landMatrix, [rIdx, cIdx]);

      myadjacentLands.forEach((coord) => {

      if (landMatrix[coord[0]][coord[1]] === 1) perimeterCount -= 1;
      });

    });
  });

  return perimeterCount;
}

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

const landMatrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0]
];


console.log(landPerimeter(landMatrix), 14);