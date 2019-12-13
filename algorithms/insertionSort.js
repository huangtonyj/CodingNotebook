function insertionSort(arr, sortFn = (a, b) => a - b) {
  let key, j;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && sortFn(key, arr[j]) < 0) {
      arr[j+1] = arr[j];
      j -= 1;
    }
    arr[j+1] = key;
  }
  return arr;
}

module.exports = insertionSort;