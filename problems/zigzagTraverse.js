/*  Write a function that takes in a two-dimensional array and 
    returns a one-dimensional array of all the array's elements in zigzag order. 
    Zigzag order starts at the top left corner of the two-dimensional array, 
    goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.

    input = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16],
    ];
*/

function zigzagTraverse (mat) {
  const h = mat.length; // num of rows
  const w = mat[0].length;  // num of cols
  const ans = [];

  let [r, c] = [0, 0];

  while (ans.length < h * w) {
    // sharp SW turn if out of bounds
    if (!(mat[r] && mat[r][c] !== undefined)) {
      c--;
      r++;
    }

    // go SW
    while (mat[r] && mat[r][c] !== undefined) {
      ans.push(mat[r][c]);
      r++;
      c--;
    }
    
    // step East
    c++;

    // sharp NE turn if out of bounds
    if (!(mat[r] && mat[r][c] !== undefined)) {
      c++;
      r--;
    }
    
    // go NE
    while (mat[r] && mat[r][c] !== undefined) {      
      ans.push(mat[r][c]);
      r--;
      c++;
    }

    // step South
    r++;
  }

  return ans;
}

module.exports = zigzagTraverse;