/*
  You're given a two-dimensional array (a matrix) of potentially unequal height
  and width containing only 0s and 1s. The matrix
  represents a two-toned image, where each 1 represents black and
  each 0 represents white. An island is defined as any number of
  1s that are horizontally or vertically adjacent (but not
  diagonally adjacent) and that don't touch the border of the image. In other
  words, a group of horizontally or vertically adjacent 1s isn't an
  island if any of those 1s are in the first row, last row, first
  column, or last column of the input matrix.

  Note that an island can twist. In other words, it doesn't have to be a
  straight vertical line or a straight horizontal line; it can be L-shaped, for
  example.

  You can think of islands as patches of black that don't touch the border of
  the two-toned image.

  Write a function that returns a modified version of the input matrix, where
  all of the islands are removed. You remove an island by replacing it with
  0s.

  Naturally, you're allowed to mutate the input matrix.
  Sample Input
    matrix = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1]
    ]

  Sample Output
    [
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1]
    ] 
    // The islands that were removed can be clearly seen here:
    // [
    //   [ ,  ,  ,  ,  , ],
    //   [ , 1,  ,  ,  , ],
    //   [ ,  , 1,  ,  , ],
    //   [ ,  ,  ,  ,  , ],
    //   [ ,  , 1, 1,  , ],
    //   [ ,  ,  ,  ,  , ] 
    // ]
*/

function removeIslands(matrix) {
  const h = matrix.length - 1;
  const w = matrix[0].length - 1;
  const ans = [...Array(h + 1)].map(_ => Array(w + 1).fill(0));
  const queue = [];

  // mark every corner;
  ans[0][0] = matrix[0][0];
  ans[0][w] = matrix[0][w];
  ans[h][0] = matrix[h][0];
  ans[h][w] = matrix[h][w];
  
  // go around border except corners, add land cord to queue.
  for (let c = 0; c < w; c++) {
    if (matrix[0][c] === 1) queue.push([0, c]); // top row
    if (matrix[h][c] === 1) queue.push([h, c]); // bottom row
  }

  for (let r = 0; r < h; r++) {
    if (matrix[r][0] === 1) queue.push([r, 0]); // left col
    if (matrix[r][w] === 1) queue.push([r, w]); // right col
  }

  // bfs traverse each unvisited land coord
  while (queue.length) {
    const [r, c] = queue.shift();
    const isNorthVisited = ans[r - 1] && ans[r - 1][c];
    const isSouthVisited = ans[r + 1] && ans[r + 1][c];
    const isEastVisited = ans[r] && ans[r][c + 1];
    const isWestVisited = ans[r] && ans[r][c - 1];
    const isNorthLand = matrix[r - 1] && matrix[r - 1][c];
    const isSouthLand = matrix[r + 1] && matrix[r + 1][c];
    const isEastLand = matrix[r] && matrix[r][c + 1];
    const isWestLand = matrix[r] && matrix[r][c - 1];

    ans[r][c] = 1;

    if (!isNorthVisited && isNorthLand) queue.push([r - 1, c]);
    if (!isSouthVisited && isSouthLand) queue.push([r + 1, c]);
    if (!isEastVisited && isEastLand) queue.push([r, c + 1]);
    if (!isWestVisited && isWestLand) queue.push([r, c - 1]);
  }

  return ans;
}

module.exports = removeIslands;