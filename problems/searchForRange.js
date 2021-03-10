function searchForRange(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let targetIdx = -1;
  
  // binary search for any instance of target
  while (left <= right && targetIdx < 0) {
    const mid = Math.floor((right- left) / 2) + left;
    const midVal = arr[mid];
    
    if (target < midVal) {
      right = mid - 1;
    } else if (target > midVal) {
      left = mid + 1;
    } else {
      targetIdx = mid;
    }
  }

  if (targetIdx < 0) return [-1, -1];

  // binary search lower and upper bounds
  let lowerBound = targetIdx;
  let upperBound = targetIdx;

  while (left + 1 < lowerBound) {
    const mid = Math.floor((lowerBound - left) / 2) + left;
    const midVal = arr[mid];
    
    if (midVal === target) {
      lowerBound = mid;
    } else {
      left = mid + 1;
    }
  }

  while (upperBound < right - 1) {
    const mid = Math.floor((right - upperBound) / 2) + upperBound;
    const midVal = arr[mid];

    if (midVal === target) {
      upperBound = mid;
    } else {
      right = mid - 1;
    }
  }

  if (arr[left] === target) lowerBound = left;
  if (arr[right] === target) upperBound = right;

  return [lowerBound, upperBound];
}

module.exports = searchForRange;