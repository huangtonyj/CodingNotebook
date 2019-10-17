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

module.exports = binarySearch;