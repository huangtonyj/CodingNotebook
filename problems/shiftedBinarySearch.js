// ***
function shiftedBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  const mid = Math.floor((right - left) / 2) + left;

  const leftVal = arr[left];
  const midValue = arr[mid];
  const rightVal = arr[right];

  if (left === mid && leftVal !== target) return -1;
  if (target === leftVal) return left;
  if (target === midValue) return mid;
  if (target === rightVal) return right;

  if (leftVal <= midValue) {
    if (leftVal < target && target <= midValue) {
      return shiftedBinarySearch(arr, target, left, mid);
    } else {
      return shiftedBinarySearch(arr, target, mid, right);
    }
  } else if (midValue < rightVal) {
    if (midValue < target && target <= rightVal) {
      return shiftedBinarySearch(arr, target, mid, right);
    } else {
      return shiftedBinarySearch(arr, target, left, mid);
    }
  }
}

module.exports = shiftedBinarySearch;