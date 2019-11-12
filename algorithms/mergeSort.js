function mergeSort(arr, sortFn) {
  if (arr.length <= 1) { return arr; }

  sortFn = sortFn || ((a, b) => a - b);

  const merge = (arrA, arrB) => {
    const result = [];
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

module.exports = mergeSort;

