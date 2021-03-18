/*
  You are given an n x n 2D matrix representing an image,
  rotate the image by 90 degrees (clockwise).

  You have to rotate the image in-place, 
  which means you have to modify the input 2D matrix directly. 
  DO NOT allocate another 2D matrix and do the rotation.

  Example 1:
    Input: matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
    Output: [
      [7,4,1],
      [8,5,2],
      [9,6,3]
    ]

  Example 2:
    Input: matrix = [
      [5,1,9,11],
      [2,4,8,10],
      [13,3,6,7],
      [15,14,12,16]
    ]
    Output: [
      [15,13,2,5],
      [14,3,4,1],
      [12,6,8,9],
      [16,7,10,11]
    ]

  Example 3:
    Input: matrix = [[1]]
    Output: [[1]]

  Example 4:
    Input: matrix = [
      [1,2],
      [3,4]
    ]
    Output: [
      [3,1],
      [4,2]
    ]
*/

function rotateImage(matrix) {
  const length = matrix.length;
  const half = Math.floor(length / 2);
  
  for (let i = 0; i < half; i++) {
    for (let j = i; j < length - i - 1; j++) {
      const topLeft = matrix[i][j];
      const topRight = matrix[j][length - 1 - i];
      const bottomRight = matrix[length - 1 - i][length - 1 - j];
      const bottomLeft = matrix[length - 1 - j][i];

      matrix[i][j] = bottomLeft;
      matrix[j][length - 1 - i] = topLeft;
      matrix[length - 1 - i][length - 1 - j] = topRight;
      matrix[length - 1 - j][i] = bottomRight;
    }
  }
}


/*
  1) Reflect across diagonal
  2) Reflect across middle vertical
*/
function rotateImage2(matrix) {
  const length = matrix.length;
  const half = Math.floor(length / 2);
  
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const aboveDiagonal = matrix[i][j];
      const belowDiagonal = matrix[j][i];
      
      matrix[j][i] = aboveDiagonal;
      matrix[i][j] = belowDiagonal;   
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < half; j++) {
      const left = matrix[i][j];
      const right = matrix[i][length - 1 - j];

      matrix[i][j] = right;
      matrix[i][length - 1 - j] = left;
    }
  }
}