const binarySearch = require('../algorithms/binarySearch');

function searchInSortedMatrix(matrix, target) {
  for (let r = 0; r < matrix.length; r++) {
    const binarySearchResult = binarySearch(matrix[r], target);
    if (binarySearchResult !== null) return [r, binarySearchResult];
  }

  return [-1, -1];
}

module.exports = searchInSortedMatrix;