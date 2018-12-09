function quickSort(arr) {
  if (arr.length < 2) {return arr}
  let pivot = arr[0];

  let left = [], right = [];

  arr.forEach((el, idx) => {
    if (idx > 0 && el <= pivot) {
      left.push(el);
    } else if (idx > 0 && el > pivot) {
      right.push(el);
    }
  })

  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([3,4,1,5,2]));
