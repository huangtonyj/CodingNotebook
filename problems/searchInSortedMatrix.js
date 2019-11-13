function searchInSortedMatrix(matrix, target) {
  let ans = null;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const value = matrix[r][c];
      if (target === value) {
        ans = [r, c];
        break;
      }
    }
    if (ans !== null) break;
  }

  return ans || [-1, -1];
}

module.exports = searchInSortedMatrix;