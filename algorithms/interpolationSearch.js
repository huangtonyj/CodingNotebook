function interpolationSearch (arr, k) {
  let min = arr[0];
  let max = arr[arr.length-1];
  // let idx = Math.floor((max-min) * k + min);
  let idx = Math.floor((k / (max-min) + min));
  console.log('idx', idx);
  

  return arr[idx];
}


console.log(interpolationSearch([0,1,2,3,4,5,6,7,8,9], 1));
console.log(interpolationSearch([10,11,12,13,14,15,16,17,18,19], 12));