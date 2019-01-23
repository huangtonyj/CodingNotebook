function quickSort(arr, sortFn) {
  if (arr.length < 2) { return arr; }
  
  sortFn = sortFn || ((a, b) => a - b); // Default to ascending sort
  
  const pivot = (arr[0] + arr[arr.length -1]) / 2;
  const left = [], right = [];

  arr.forEach((el) => {
    (sortFn(el, pivot) < 0) ? left.push(el) : right.push(el);
  });

  return quickSort(left, sortFn).concat(quickSort(right, sortFn));
}

module.exports = quickSort;

// console.log(quickSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
// console.log(quickSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

// console.log(quickSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
// console.log(quickSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);