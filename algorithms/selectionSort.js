function selectionSort(arr, sortFn) {
  sortFn = sortFn || ((a, b) => a - b);

  

}

module.exports = selectionSort;

console.log(selectionSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
console.log(selectionSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

console.log(selectionSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
console.log(selectionSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);