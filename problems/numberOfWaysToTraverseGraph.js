// ***
/*
  You're given two positive integers representing the width and height of a
  grid-shaped, rectangular graph. Write a function that returns the number of
  ways to reach the bottom right corner of the graph when starting at the top
  left corner. Each move you take must either go down or right. In other words,
  you can never move up or left in the graph.

  For example, given the graph illustrated below, with
  width = 2 and height = 3, there are three ways to
  reach the bottom right corner when starting at the top left corner:
   _ _
  |_|_|
  |_|_|
  |_|_|

  Down, Down, Right
  Right, Down, Down
  Down, Right, Down

  Note: you may assume that width * height >= 2. In other words,
  the graph will never be a 1x1 grid.

  Sample Input
    width = 4
    height = 3

  Sample Output
    10
*/

// O(n * m) time O(n) space
function numberOfWaysToTraverseGraph(width, height) {
  let prev = new Array(width).fill(1);
  prev[0] = 0;
  let current = [];

  for (let i = 1; i < height; i++) {
    current.push(1);

    for (let j = 1; j < width; j++) {
      const prevRow = prev[j];
      const prevCol = current[j - 1];
      current.push(prevRow + prevCol);
    }

    prev = current;
    current = [];
  }

  return prev[width - 1];
}


module.exports = numberOfWaysToTraverseGraph;