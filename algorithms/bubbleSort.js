function bubbleSort(arr, sortFn) {
  const sortASC = (a,b) => a - b;
  sortFn = sortFn || sortASC;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (sortFn(arr[j], arr[j + 1])) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        // console.log(arr);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
console.log(bubbleSort([1, 2, 3, 4, 5], (a, b) => b - a), [5, 4, 3, 2, 1]);