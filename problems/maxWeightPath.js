// You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers.
// For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:
//   1
//  2 3
// 1 5 1
// We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, 
// eventually ending with an entry on the bottom row. For example, 1 - > 3 - > 5. 
// The weight of the path is the sum of the entries.


function maxWeightPath(triangle) {
  let prevRow, currentRow;
  let runningRow = triangle[0];

  // Create a running sum of weights for each path
  for (let row = 1; row < triangle.length; row++) {   
    prevRow = runningRow;
    runningRow = [];
    currentRow = triangle[row];

    // Compute left edge
    runningRow.push(currentRow[0] + prevRow[0]);

    // Compute middle
    for (let i = 1; i < currentRow.length - 1; i++) {
      runningRow.push(currentRow[i] + Math.max(prevRow[i-1], prevRow[i]));
    }

    // Compute right edge
    runningRow.push(currentRow[currentRow.length - 1] + prevRow[prevRow.length-1]);

    // console.log(runningRow);
  }

  return Math.max(...runningRow);
}

console.log(maxWeightPath([
  [1],
  [2, 3],
  [1, 5, 1]
]), 1 + 3 + 5);

console.log(maxWeightPath([
  [1],
  [2, 3],
  [1, 5, 1],
  [16, 7, 6, 7]
]), 1 + 2 + 1 + 16);

