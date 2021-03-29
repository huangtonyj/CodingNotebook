/*
 https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solution/
  A row-sorted binary matrix means that all elements are 0 or 1 
  and each row of the matrix is sorted in non-decreasing order.

  Given a row-sorted binary matrix binaryMatrix, 
  return the index (0-indexed) of the leftmost column with a 1 in it. 
  If such an index does not exist, return -1.

  You can't access the Binary Matrix directly. 
  You may only access the matrix using a BinaryMatrix interface:

  BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
  BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], 
  which means the matrix is rows x cols.
  Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. 
  Also, any solutions that attempt to circumvent the judge will result in disqualification.

  For custom testing purposes, the input will be the entire binary matrix mat. 
  You will not have access to the binary matrix directly.

  Example 1:
    Input: mat = [[0,0],[1,1]]
    Output: 0

  Example 2:
    Input: mat = [[0,0],[0,1]]
    Output: 1

  Example 3:
    Input: mat = [[0,0],[0,0]]
    Output: -1

  Example 4:
    Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
    Output: 1
*/

/*
  O(n) time O(1) space
  At each row, look at columns left of previously found minCol.
*/
function leftMostColumnWithOne(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let minCol = Infinity;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (binaryMatrix.get(row, col)) {
      minCol = Math.min(minCol, col);
      col--;
    } else {
      row++;
    }
  }

  return minCol === Infinity ? -1 : minCol;
};


// O(r log c) time O(1) space
function leftMostColumnWithOne1(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  let minCol = Infinity;
  
  for (let row = 0; row < rows; row++) {
    minCol = Math.min(minCol, _binarySearch(binaryMatrix, row, cols));
  }
  
  return minCol === Infinity ? - 1: minCol;
};

function _binarySearch(binaryMatrix, row, cols) {
  let l = 0;
  let r = cols - 1;
  
  while (l < r) {
    const col = Math.floor((l + r) / 2);
    
    if (binaryMatrix.get(row, col)) {
      r = col;
    } else {
      l = col + 1;
    }
  }
  
  return binaryMatrix.get(row, l) ? l : Infinity;
}