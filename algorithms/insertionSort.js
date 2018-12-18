function insertionSort(arr, sortFn) {
  const sortASC = (a, b) => a - b;
  sortFn = sortFn || sortASC;
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

console.log(insertionSort([3,2,1,4]), [1,2,3,4]);
console.log(insertionSort([3,2,1,4], (a,b) => b-a), [4,3,2,1]);
console.log(insertionSort([3,2,5,1,4]), [1,2,3,4,5]);
console.log(insertionSort([3,2,5,1,4], (a,b) => b-a), [5,4,3,2,1]);
