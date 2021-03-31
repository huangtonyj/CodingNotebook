// RECURSIVE quickSort
function quickSort(arr, sortFn = (a, b) => a - b, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIdx = left + Math.ceil(Math.random() * (right - left));
  const pivot = arr[pivotIdx];
  let storeIdx = left;

  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]];

  for (let i = left; i < right; i++) {
    if (sortFn(arr[i], pivot) < 0) {
      [arr[i], arr[storeIdx]] = [arr[storeIdx], arr[i]];
      storeIdx++;
    }
  }

  [arr[storeIdx], arr[right]] = [arr[right], arr[storeIdx]];

  quickSort(arr, sortFn, left, storeIdx - 1);
  quickSort(arr, sortFn, storeIdx + 1, right);

  return arr;
}

// ITERATIVE quickSort
function quickSort2(arr, sortFn = (a, b) => a - b) {
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
      if (sortFn(el, pivot) < 0) {
        left.push(el);
      } else {
        right.push(el);
      }
    });

    stack.push(right, [pivot], left);
  }

  return result;
}

module.exports = {quickSort, quickSort2};