
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w6/tuesday/partner-a.md

// You are given a two-dimensional array (matrix) of potentially unequal height and width containing only 0s and 1s. 
// Each 0 represents land, and each 1 represents part of a river. 
// A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). 
// The number of adjacent 1s forming a river determines its size. 
// Write a function that returns an array of the sizes of all rivers represented in the input matrix.

function riverSize(matrix) {

  const result = [];
  const visited = {};

  return findAdjacentRiver(matrix, [0, 0]);

}

const findAdjacentRiver = (matrix, currentPos, visited = {}) => {
  const unexploredNeighbors = [];

  const potentialAdjacentRiver = {
    N: [currentPos[0] - 1, currentPos[1] + 0],
    S: [currentPos[0] + 1, currentPos[1] + 0],
    E: [currentPos[0] + 0, currentPos[1] + 1],
    W: [currentPos[0] + 0, currentPos[1] - 1]
  };

  Object.values(potentialAdjacentRiver).forEach(neighbor => {
    if (!visited[neighbor]) { unexploredNeighbors.push(neighbor); }
  });

  return unexploredNeighbors;
};

console.log(riverSize([
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]), [1, 2, 2, 2, 5]);


// do a loop example;