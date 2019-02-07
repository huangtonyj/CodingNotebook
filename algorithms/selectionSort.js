function selectionSort(arr, sortFn) {
  sortFn = sortFn || ((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let currentMinIdx = i;
    // Look for next min
    for (let j = i + 1; j < arr.length; j++) {
      if (sortFn(arr[currentMinIdx], arr[j]) > 0) {
        currentMinIdx = j;
      } 
    }

    // Swap places
    const temp = arr[i];
    arr[i] = arr[currentMinIdx];
    arr[currentMinIdx] = temp;
  }

  return arr;
}

module.exports = selectionSort;

console.log(selectionSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
console.log(selectionSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

console.log(selectionSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
console.log(selectionSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);