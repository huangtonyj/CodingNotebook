/*
  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.

  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.

  Sample Input = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7],
  ]

  Sample Output
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

function spiralTraverse(arr) {
  let directions = ['east', 'south', 'west', 'north'];
  let directionIdx = 0;
  let eastBoundary = arr[0].length - 1;
  let southBoundary = arr.length - 1;
  let westBoundary = 0;
  let northBoundary = 1;

  let coords = [0, 0];

  const result = [];

  while (result.length < arr.length * arr[0].length) {
    const [row, col]  = coords;
    const current = arr[row][col];
    const direction = directions[directionIdx % 4];

    result.push(current);

    if (direction === 'east') {
      coords = [row, col + 1];

      if (col + 1 === eastBoundary) {
        directionIdx++;
        eastBoundary--;
      }
    } else if (direction === 'south') {
      coords = [row + 1, col];
      
      if (row + 1 === southBoundary) {
        directionIdx++;
        southBoundary--;
      }
    } else if (direction === 'west'){
      coords = [row, col - 1];
      
      if (col - 1 === westBoundary) {
        directionIdx++;
        westBoundary++;
      }
    } else if (direction === 'north'){
      coords = [row - 1, col];
      
      if (row - 1 === northBoundary) {
        directionIdx++;
        northBoundary++;
      }
    } 
    console.log('result', result);
  }

  return result;
}

function spiralTraverse2(arr) {
  let startCol = 0;
  let startRow = 0;
  let endCol = arr[0].length - 1;
  let endRow = arr.length - 1;
  const result = [];

  while (startRow < endRow && startCol < endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(arr[startRow][i]);
    }
    startRow++;
    
    for (let i = startRow; i <= endRow; i++) {
      result.push(arr[i][endCol]);
    }
    endCol--;
    
    for (let i = endCol; i >= startCol; i--) {
      result.push(arr[endRow][i]);
    }
    endRow--;
    
    for (let i = endRow; i >= startRow; i--) {
      result.push(arr[i][startCol]);
    }
    startCol++;
  }

  return result;
}

console.log(
  spiralTraverse(
    [
      [1,   2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8, 7],
    ]
  ).toString() +
  
  '\n' +

  spiralTraverse(
    [
      [1]
    ]
  ).toString() +
  
  '\n' +

  spiralTraverse(
    [
      [1, 2, 3, 4], [10, 11, 12, 5], [9, 8, 7, 6]
    ]
  ).toString() + 
  
  '\n' +

  spiralTraverse(
    [
      [[1, 2, 3], [12, 13, 4], [11, 14, 5], [10, 15, 6], [9, 8, 7]]
    ]
  ).toString()
);