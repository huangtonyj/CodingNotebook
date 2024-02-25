/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

function setZeroes(matrix) {
  const rowToSetZero = new Set();
  const colToSetZero = new Set();

  matrix.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (cell == 0) {
        rowToSetZero.add(rowIdx);
        colToSetZero.add(colIdx);
      }
    });
  });

  console.log({
    rowToSetZero,
    colToSetZero,
  });

  rowToSetZero.forEach((row) => {
    console.table({ row });
    const numOfCol = matrix[0].length;

    for (let col = 0; col < numOfCol; col++) {
      matrix[row][col] = 0;
    }
  });

  colToSetZero.forEach((col) => {
    console.table({ col });
    const numOfRow = matrix.length;

    for (let row = 0; row < numOfRow; row++) {
      matrix[row][col] = 0;
    }
  });

  return matrix;
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
