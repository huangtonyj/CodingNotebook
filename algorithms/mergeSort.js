function mergeSort(arr, sortFn) {
  if (arr.length <= 1) { return arr; }

  const sortASC = (a, b) => a - b;
  sortFn = sortFn || sortASC;

  const merge = (arrA, arrB) => {
    let result = [];
    while (arrA.length > 0 && arrB.length > 0) {
      result.push(sortFn(arrA[0], arrB[0]) < 0 ? arrA.shift() : arrB.shift());
    }
    return result.concat(arrA, arrB);
  };

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left, sortFn), mergeSort(right, sortFn), sortFn);
}

// mergeSort TEST
console.log(mergeSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
console.log(mergeSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

console.log(mergeSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
console.log(mergeSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);