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