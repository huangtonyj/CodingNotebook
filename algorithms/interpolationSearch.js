function interpolationSearch (arr, k) {
  let min = arr[0];
  let max = arr[arr.length-1];

  // let idx = Math.floor((k - min) / (max - min));
  let idx = Math.floor((k - min) / (max - min) * arr.length);
  // console.log('min', min, 'max', max, 'k - min', k - min);
  console.log('idx', idx);
  
  if (arr[idx] === k) { return true; }
  if (arr[idx] < k) { return interpolationSearch(arr.slice(0, idx), k); }
  if (arr[idx] > k) { return interpolationSearch(arr.slice(idx), k); }
  
  return false;
}


console.log(interpolationSearch([0,1,2,3,4,5,6,7,8,9], 4));
console.log(interpolationSearch([2,4,6,8,10], 10));
console.log(interpolationSearch([2,6,8,10,12,14,16,18,20], 10));