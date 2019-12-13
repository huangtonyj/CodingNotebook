// RECURSIVE quickSort
function quickSort(arr, sortFn = (a, b) => a - b) {
  if (arr.length < 2) { return arr; }
  
  const pivot = arr.shift();
  const left = [], right = [];

  arr.forEach(el => {
    if (sortFn(el, pivot) < 0) { 
      left.push(el); 
    } else {
      right.push(el);
    }
  });
  
  return quickSort(left, sortFn).concat([pivot], quickSort(right, sortFn));
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