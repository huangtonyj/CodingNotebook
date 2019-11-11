const quickSort = require('../algorithms/quickSort');

function smallestDifference(arr1, arr2) {

  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);

  let currentIdx1 = 0;
  let currentIdx2 = 0;
  let currentSmallestDifference = Infinity;
  let result;

  while (currentIdx1 < arr1.length && currentIdx2 < arr2.length) {
    const currentValue1 = arr1[currentIdx1];
    const currentValue2 = arr2[currentIdx2];
    const currentDifference = Math.abs(currentValue1 - currentValue2);

    if (currentDifference < currentSmallestDifference) {
      currentSmallestDifference = currentDifference;
      result = [currentValue1, currentValue2];
    }

    if (currentValue1 > currentValue2) {
      currentIdx2++;
    } else {
      currentIdx1++;
    }
  }

  return result;
}

module.exports = smallestDifference;