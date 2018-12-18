function binarySearch(arr, target) {
  if (arr.length <= 1 && arr[0] !== target) { return null; }
  
  const mid = Math.floor(arr.length / 2);

  if (target === arr[mid]) { return mid; } 
  if (target < arr[mid]) { return binarySearch(arr.slice(0, mid), target); } 
  if (target > arr[mid]) {
    let ans = binarySearch(arr.slice(mid), target);
    return ans ? ans + mid : null;
  }
  
  return null;
}

// TEST
// console.log(binarySearch([1,2,3], 1), 0);
// console.log(binarySearch([1,2,3], 2), 1);
// console.log(binarySearch([1,2,3], 3), 2);

// console.log(binarySearch([1,2,3], 0), null);
// console.log(binarySearch([1,2,3], 4), null);

// console.log(binarySearch([1,2,3,4], 1), 0);
// console.log(binarySearch([1,2,3,4], 2), 1);
// console.log(binarySearch([1,2,3,4], 3), 2);
// console.log(binarySearch([1,2,3,4], 4), 3);

// console.log(binarySearch([1,2,3,4], 0), null);
// console.log(binarySearch([1,2,3,4], 5), null);
