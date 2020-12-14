/*
  You're given a two-dimensional array that represents the structure of an
  indoor waterfall and a positive integer that represents the column that the
  waterfall's water source will start at. More specifically, the water source
  will start directly above the structure and will flow downwards.

  Each row in the array contains 0s and 1s, where a
  0 represents a free space and a 1 represents a block
  that water can't pass through. You can imagine that the last row of the array
  contains buckets that the water will eventually flow into; thus, the last row
  of the array will always contain only 0s. You can also imagine
  that there are walls on both sides of the structure, meaning that water will
  never leave the structure; it will either be trapped against a wall or flow
  into one of the buckets in the last row.

  As water flows downwards, if it hits a block, it splits evenly to the left and
  right-hand side of that block. In other words, 50% of the water flows left and
  50% of it flows right. If a water stream is unable to flow to the left or to
  the right (because of a block or a wall), the water stream in question becomes
  trapped and can no longer continue to flow in that direction; it effectively
  gets stuck in the structure and can no longer flow downwards, meaning that 50%
  of the previous water stream is forever lost.

  Lastly, the input array will always contain at least two rows and one column,
  and the space directly below the water source (in the first row of the array)
  will always be empty, allowing the water to start flowing downwards.

  Write a function that returns the percentage of water inside each of the
  bottom buckets after the water has flowed through the entire structure.

  You can refer to the first 4.5 minutes of this question's video explanation
  for a visual example.

  Sample Input
    array = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0],
    ]
    source = 3

  Sample Output
    [0, 0, 0, 25, 25, 0, 0]

    // The water will flow as follows:
    // [
    //   [0, 0, 0, ., 0, 0, 0],
    //   [1, ., ., ., ., ., 0],
    //   [0, ., 1, 1, 1, ., 0],
    //   [., ., ., ., ., ., .],
    //   [1, 1, 1, ., ., 1, 0],
    //   [0, 0, 0, ., ., 0, 1],
    //   [0, 0, 0, ., ., 0, 0],
    // ]
*/

// O(h * w^2) time O(w) space
function waterfallStreams(array, source) {
  const width = array[0].length;
  let prevRow = Array(width).fill(0);

  prevRow[source] = 100;

  for (let i = 1; i < array.length; i++) {
    const currentRow = Array(width).fill(0);
    let waterIndex = prevRow.findIndex(block => block > 0);

    while (waterIndex > -1) {
      const waterAmtAbove = prevRow[waterIndex];
      const currentBlockFree = array[i][waterIndex] === 0;
      const isBlockWihtinBoundaries = waterIndex > 0 && waterIndex < width - 1;
            
      if (currentBlockFree) {
        currentRow[waterIndex] += waterAmtAbove;
        
      } else if (isBlockWihtinBoundaries) {

        // move 50% water left to next empty block unless any block above is blocking flow
        for (let j = waterIndex - 1; j >= 0; j--) {
          if (array[i - 1][j] === 1) break;
          if (array[i][j] === 0) {
            currentRow[j] += waterAmtAbove / 2;
            break;
          }
        }
        
        // move 50% water right to next empty block unless any block above is blocking flow
        for (let k = waterIndex + 1; k < width; k++) {
          if (array[i - 1][k] === 1) break;
          if (array[i][k] === 0) {
            currentRow[k] += waterAmtAbove / 2;
            break;
          }
        }
      }

      prevRow[waterIndex] = 0;
      waterIndex = prevRow.findIndex(block => block > 0);
    }

    prevRow = currentRow;
  }

  return prevRow;
}

module.exports = waterfallStreams;

// console.log(
//   waterfallStreams([
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0],
//   ], 3), [0, 0, 0, 25, 25, 0, 0], '\n',
//   waterfallStreams([
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 1, 0, 1, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0]
//   ], 3), [0, 0, 0, 0, 0, 0, 0], '\n',
// );