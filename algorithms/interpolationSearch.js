function interpolationSearch (arr, k) {
  let min = arr[0];
  let max = arr[arr.length-1];

  let idx = Math.floor((k - min) / (max - min) * (arr.length - 1));
  // console.log('min', min, 'max', max, '(k - min)', k - min, '(max - min)', (max - min), 'idx', idx);
  
  if (arr[idx] === k) { return true; }
  if (arr[idx] < k) { return interpolationSearch(arr.slice(0, idx), k); }
  if (arr[idx] > k) { return interpolationSearch(arr.slice(idx), k); }
  
  return false;
}

console.log(interpolationSearch([2, 4, 6, 8, 10], 2), true);
console.log(interpolationSearch([2, 4, 6, 8, 10], 8), true);
console.log(interpolationSearch([2, 4, 6, 8, 10], 10), true);
console.log(interpolationSearch([2, 4, 6, 7, 8, 10], 2), true);
console.log(interpolationSearch([2, 4, 6, 7, 8, 10], 10), true);
console.log(interpolationSearch([2, 4, 6, 7, 8, 10], 6), true);
console.log(interpolationSearch([2, 4, 6, 7, 8, 10], 7), true);
console.log(interpolationSearch([2, 4, 6, 8, 10], 7), false);
