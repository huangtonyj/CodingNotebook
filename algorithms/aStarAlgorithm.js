/*
  You're given a two-dimensional array containing 0s and
  1s, where each 0 represents a free space and each
  1 represents an obstacle (a space that cannot be passed through).
  You can think of this array as a grid-shaped graph. You're also given four
  integers startRow, startCol, endRow,
  and endCol, representing the positions of a start node and an end
  node in the graph.

  Write a function that finds the shortest path between the start node and the
  end node using the A* search algorithm and returns it.

  The shortest path should be returned as an array of node positions, where each
  node position is an array of two elements: the [row, col] of the
  respective node in the graph. The output array should contain the start node's
  position, the end node's position, and all of the positions of the remaining
  nodes in the shortest path, and these node positions should be ordered from
  start node to end node.

  If there is no path from the start node to the end node, your function should
  return an empty array.

  Note that:

    - From each node in the graph, you can only travel in four directions: up,
    left, down and right; you can't travel diagonally.
  
    - The distance between all neighboring nodes in the graph is the same; you
    can treat it as a distance of 1.
  
    - The start node and end node are guaranteed to be located in empty spaces
    (cells containing 0).
  
    - The start node and end node will never be out of bounds and will never
    overlap.
  
    - There will be at most one shortest path from the start node to the end
    node.

  Sample Input
    startRow = 0
    startCol = 1
    endRow = 4
    endCol = 3
    graph = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0],
    ]

  Sample Output
    [[0, 1], [0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1], [4, 2], [4, 3]]

    // The shortest path can be clearly seen here:
    // [
    //   [x, x, 0, 0, 0],
    //   [x, 1, 1, 1, 0],
    //   [x, x, 0, 0, 0],
    //   [1, x, 1, 1, 1],
    //   [0, x, x, x, 0],
    // ]
*/

const HeapItem = require('../dataStructures/HeapItem');
const ascSort = (a, b) => a - b;

function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  const visited = new Set();
  const priorityQueue = new HeapItem([], ascSort, 'fScore');
  const initialHeuristicGuess = manhattanDistance(startRow, startCol, endRow, endCol);
  const startingPath = new PathObject([], startRow, startCol, initialHeuristicGuess);

  priorityQueue.insert(startingPath);

  while (priorityQueue.length()) {
    const mostPromisingNode = priorityQueue.extract();
    const {row, col, path} = mostPromisingNode;
    const neighbors = getUnvistedNeighbors(row, col, graph, visited);

    visited.add(`${row}-${col}`);

    for (const [neighborRow, neighborCol] of neighbors) {
      if (neighborRow === endRow && neighborCol === endCol) {
        return [...path, [neighborRow, neighborCol]];
      }
      const hScore = manhattanDistance(neighborRow, neighborCol, endRow, endCol);
      const newPath = new PathObject([...path], neighborRow, neighborCol, hScore);
      priorityQueue.insert(newPath);
    }
  }

  return [];
}

class PathObject {
  constructor(path, newRow, newCol, hScore) {
    this.path = [...path, [newRow, newCol]];
    this.row = newRow;
    this.col = newCol;
    this.gScore = this.path.length;
    this.hScore = hScore;
    this.fScore = this.gScore + this.hScore;
  }
}

function getUnvistedNeighbors(r, c, graph, visited) {
  const neighbors = [];

  if (graph[r-1] && graph[r-1][c] === 0 && !visited.has(`${r-1}-${c}`)) neighbors.push([r-1, c]);
  if (graph[r+1] && graph[r+1][c] === 0 && !visited.has(`${r+1}-${c}`)) neighbors.push([r+1, c]);
  if (graph[r]   && graph[r][c+1] === 0 && !visited.has(`${r}-${c+1}`)) neighbors.push([r, c+1]);
  if (graph[r]   && graph[r][c-1] === 0 && !visited.has(`${r}-${c-1}`)) neighbors.push([r, c-1]);

  return neighbors;
}

function manhattanDistance(currentRow, currentCol, endRow, endCol) {
  return Math.abs(endRow - currentRow) + Math.abs(endCol - currentCol);
}

module.exports = aStarAlgorithm;