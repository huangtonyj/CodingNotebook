// RECURSIVE quickSort
function quickSort(arr, sortFn) {
  if (arr.length < 2) { return arr; }
  
  sortFn = sortFn || ((a, b) => a - b); // Default to ascending sort
  
  const pivot = arr.shift();
  const left = [], right = [];

  arr.forEach(el => {
    (sortFn(el, pivot) < 0) ? left.push(el) : right.push(el);
  });
  
  return quickSort(left, sortFn).concat([pivot], quickSort(right, sortFn));
}

// ITERATIVE quickSort
function quickSort2(arr, sortFn) {
  sortFn = sortFn || ((a, b) => a - b);
  let result = [];
  let stack = [arr];

  while (stack.length) {
    const currentArr = stack.pop();
    
    if (currentArr.length < 2) { 
      result = result.concat(currentArr); 
      continue;
    }

    const pivot = currentArr.shift();
    const left = [], right = [];

    currentArr.forEach(el => {
      (sortFn(el, pivot) < 0) ? left.push(el): right.push(el);
    });

    stack.push(right, [pivot], left);
  }

  return result;
}

module.exports = quickSort;

// console.log(quickSort([3, 4, 1, 5, 2, 1]), [1, 1, 2, 3, 4, 5]);
// console.log(quickSort([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
// console.log(quickSort([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

// console.log(quickSort([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
// console.log(quickSort([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);


// console.log(quickSort2([3, 4, 1, 5, 2, 1]), [1, 1, 2, 3, 4, 5]);
// console.log(quickSort2([3, 4, 1, 5, 2]), [1, 2, 3, 4, 5]);
// console.log(quickSort2([3, 4, 1, 5, 2, 6]), [1, 2, 3, 4, 5, 6]);

// console.log(quickSort2([3, 4, 1, 5, 2], (a, b) => b - a), [5, 4, 3, 2, 1]);
// console.log(quickSort2([3, 4, 1, 5, 2, 6], (a, b) => b - a), [6, 5, 4, 3, 2, 1]);