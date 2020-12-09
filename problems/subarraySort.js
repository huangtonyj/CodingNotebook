/*
  Write a function that takes in an array of at least two integers and that
  returns an array of the starting and ending indices of the smallest subarray
  in the input array that needs to be sorted in place in order for the entire
  input array to be sorted (in ascending order).

  If the input array is already sorted, the function should return
  [-1, -1].

  Sample Input
    array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

  Sample Output
    [3, 9]
*/

function subarraySort(arr) {
  // find which number is out of order from left
  let leftIdx = 0;
  let prev = arr[0];
  let current = arr[1];

  while (prev <= current && leftIdx < arr.length) {
    leftIdx++;
    prev = arr[leftIdx - 1];
    current = arr[leftIdx - 0];
  }

  // if none, return [-1, -1];
  if (current === undefined) return [-1, -1];

  // find which number is out of order from right
  let rightIdx = arr.length - 1;
  prev = arr[rightIdx - 1];
  current = arr[rightIdx];

  while (prev <= current && rightIdx > 0) {
    rightIdx--;
    prev = arr[rightIdx - 1];
    current = arr[rightIdx - 0];
  }

  // find where the min(left, right) num should go
  const leftValue = Math.min(...arr.slice(leftIdx));
  leftIdx = 0;
  
  while (arr[leftIdx] <= leftValue) {
    leftIdx++;
  }
  
  // find where the max(left, right) num should go
  const rightValue = Math.max(...arr.slice(0, rightIdx));
  rightIdx = arr.length - 1;

  while (arr[rightIdx] >= rightValue) {
    rightIdx--;
  }

  // return left n right indices
  return [leftIdx, rightIdx];
}

module.exports = subarraySort;