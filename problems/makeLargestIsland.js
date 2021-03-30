/*
  https://leetcode.com/problems/making-a-large-island/
  You are given an n x n binary matrix grid. 
  You are allowed to change at most one 0 to be 1.

  Return the size of the largest island in grid after applying this operation.

  An island is a 4-directionally connected group of 1s.

  Example 1:
    Input: grid = [[1,0],[0,1]]
    Output: 3
    Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

  Example 2:
    Input: grid = [[1,1],[1,0]]
    Output: 4
    Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

  Example 3:
    Input: grid = [[1,1],[1,1]]
    Output: 4
    Explanation: Can't change any 0 to 1, only one island with area = 4.
*/

// O(n^2) time O(n^2) space. Group island and precompute group size.
function makeLargestIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const gridObj = _computeGroupObj(grid);
  let largest = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLand = grid[r][c] === 1;

      if (isLand) continue;
      largest = Math.max(largest, _getNewIslandSize(r, c, gridObj));
    }
  }

  return largest > 0 ? largest : rows * cols;
}

function _computeGroupObj(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const gridObj = [...Array(rows)].map((_) => Array(cols).fill(null));
  let id = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLand = grid[r][c] === 1;
      const isVisited = gridObj[r][c] !== null;
      const islandObj = {
        id: id,
        size: 1,
      };

      if (!isLand || isVisited) continue;
      _populateNeighboringLandIslandObj(grid, r, c, gridObj, islandObj);
      id++;
    }
  }

  return gridObj;
}

function _populateNeighboringLandIslandObj(grid, row, col, gridObj, islandObj) {
  const queue = [[row, col]];

  gridObj[row][col] = islandObj;

  while (queue.length) {
    const [r, c] = queue.shift();

    if (grid[r - 1] && grid[r - 1][c] === 1 && gridObj[r - 1][c] === null) {
      islandObj.size++;
      gridObj[r - 1][c] = islandObj;
      queue.push([r - 1, c]);
    }

    if (grid[r + 1] && grid[r + 1][c] === 1 && gridObj[r + 1][c] === null) {
      islandObj.size++;
      gridObj[r + 1][c] = islandObj;
      queue.push([r + 1, c]);
    }

    if (grid[r][c + 1] === 1 && gridObj[r][c + 1] === null) {
      islandObj.size++;
      gridObj[r][c + 1] = islandObj;
      queue.push([r, c + 1]);
    }

    if (grid[r][c - 1] === 1 && gridObj[r][c - 1] === null) {
      islandObj.size++;
      gridObj[r][c - 1] = islandObj;
      queue.push([r, c - 1]);
    }
  }
}

function _getNewIslandSize(r, c, groupObj) {
  const visitedGroup = new Set();
  let islandSize = 1;

  const queue = [
    [r - 1, c], // North
    [r + 1, c], // South
    [r, c + 1], // East
    [r, c - 1], // West
  ];

  while (queue.length) {
    const [row, col] = queue.shift();
    const currentIslandObj = groupObj[row] && groupObj[row][col];

    // Don't double add visited group
    if (!currentIslandObj || visitedGroup.has(currentIslandObj.id)) continue;

    const { id, size } = currentIslandObj;
    visitedGroup.add(id);
    islandSize += size;
  }

  return islandSize;
}

////////////////////////////////////////////////////////////////////////////////

// O(n^4) time O(n^2) space. Find a ocean coord, BFS size of surrounding island
function makeLargestIsland2(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let largest = 0;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isLand = grid[r][c] === 1;
      
      if (isLand) continue;
      
      const currentIslandSize = _getIslandSize(grid, r, c);
      largest = Math.max(largest, currentIslandSize);
    }
  }
  
  return largest > 0 ? largest : rows * cols;
}

function _getIslandSize(grid, startingRow, startingCol) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = [...Array(rows)].map((_) => Array(cols).fill(false));
  const queue = [[startingRow, startingCol]];
  let size = 0;

  visited[startingRow][startingCol] = true;

  while (queue.length) {
    const [r, c] = queue.shift();

    size++;
    visited[r][c] = true;
    _enqueueUnvisitedNeighboringLand(grid, r, c, queue, visited);
  }

  return size;
}

function _enqueueUnvisitedNeighboringLand(grid, r, c, queue, visited) {
  // North
  if (grid[r - 1] && grid[r - 1][c] === 1 && !visited[r - 1][c]) {
    queue.push([r - 1, c]);
    visited[r - 1][c] = true;
  }
  // South
  if (grid[r + 1] && grid[r + 1][c] === 1 && !visited[r + 1][c]) {
    queue.push([r + 1, c]);
    visited[r + 1][c] = true;
  }
  // East
  if (grid[r][c + 1] === 1 && !visited[r][c + 1]) {
    queue.push([r, c + 1]);
    visited[r][c + 1] = true;
  }
  // West
  if (grid[r][c - 1] === 1 && !visited[r][c - 1]) {
    queue.push([r, c - 1]);
    visited[r][c - 1] = true;
  }
}


////////////////////////////////////////////////////////////////////////////////

console.log(makeLargestIsland([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]), 9);

console.log(makeLargestIsland([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]), 9);

console.log(makeLargestIsland([
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
]), 7);

console.log(makeLargestIsland([
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 1],
]), 5);