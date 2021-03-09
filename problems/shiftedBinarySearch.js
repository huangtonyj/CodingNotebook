// ***
/*
  Shifted Binary Search

  Write a function that takes in a sorted array of distinct integers as well as a target
  integer. The caveat is that the integers in the array have been shifted by
  some amount; in other words, they've been moved to the left or to the right by
  one or more positions. 
  For example, [1, 2, 3, 4] might have
  turned into [3, 4, 1, 2].

  The function should use a variation of the Binary Search algorithm to
  determine if the target integer is contained in the array and should return
  its index if it is, otherwise -1.

  If you're unfamiliar with Binary Search, we recommend watching the Conceptual
  Overview section of the Binary Search question's video explanation before
  starting to code.

  Sample Input
    array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]
    target = 33

  Sample Output
    8
*/

// O(log n) time (log n) space
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