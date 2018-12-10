function quickSort(arr, sort) {
  if (arr.length < 2) {return arr};

  const sortASC = (a, b) => a - b;
  const sortFn = sort || sortASC;
  let pivot = arr[0];
  let left = [], right = [];

  arr.forEach((el, idx) => {
    if (idx > 0 && sortFn(el, pivot) <= 0) {
      left.push(el);
    } else if (idx > 0 && sortFn(el, pivot) > 0) {
      right.push(el);
    }
  })

  return quickSort(left, sort).concat([pivot], quickSort(right, sort))
}

console.log(quickSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
console.log(quickSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

console.log(quickSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
console.log(quickSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);