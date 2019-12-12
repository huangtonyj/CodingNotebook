const { quickSort } = require('../algorithms/quickSort');

function movingMedian(arr, k) {

  const medianIdx = Math.floor(k/2);
  const result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    const windowArray = quickSort(arr.slice(i, i + k));
    result.push(windowArray[medianIdx]);
  }

  return result;
}

console.log(movingMedian(
  [-1, 5, 13, 8, 2, 3, 3, 1], 3
), [5, 8, 8, 3, 3, 3]);