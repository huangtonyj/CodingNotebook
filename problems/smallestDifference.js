const { quickSort } = require('../algorithms/quickSort');

function smallestDifference(arr1, arr2) {

  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);

  let idx1 = 0;
  let idx2 = 0;
  let currentSmallestDiff = Infinity;
  let smallestPair;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    const num1 = arr1[idx1];
    const num2 = arr2[idx2];
    const currentDiff = Math.abs(num1 - num2);

    if (currentDiff < currentSmallestDiff) {
      currentSmallestDiff = currentDiff;
      smallestPair = [num1, num2];
    }

    if (num1 > num2) {
      idx2++;
    } else {
      idx1++;
    }
  }

  return smallestPair;
}

module.exports = smallestDifference;