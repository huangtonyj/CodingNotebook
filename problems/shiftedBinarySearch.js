// ***
function shiftedBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((right - left) / 2) + left;
  const leftVal = arr[left];
  const midValue = arr[mid];
  const rightVal = arr[right];

  if (target === leftVal) return left; // not neccessary, might speed up search?
  if (target === midValue) return mid;
  if (target === rightVal) return right; // not neccessary, might speed up search?

  if (leftVal <= midValue) {
    if (leftVal <= target && target < midValue) {
      return shiftedBinarySearch(arr, target, left, mid - 1);
    } else {
      return shiftedBinarySearch(arr, target, mid + 1, right);
    }
  } else if (midValue < rightVal) {
    if (midValue < target && target <= rightVal) {
      return shiftedBinarySearch(arr, target, mid + 1, right);
    } else {
      return shiftedBinarySearch(arr, target, left, mid - 1);
    }
  }
}

module.exports = shiftedBinarySearch;