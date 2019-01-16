// Return an array of size of 3 elements that adds up to k.

function twoSumToK(arr, k) {
  // Sort array
  // two pointers, one left and on right

  // Loop through each one
    // while pointers aren't crossed
    // move left and right respective to their sum
    // push to result if it adds up to k

  arr = arr.sort((a,b) => a - b);

  const result = [];

  let leftPointer = 0, rightPointer = arr.length - 1;
  let leftVal, rightVal;

  while(leftPointer < rightPointer) {
    leftVal = arr[leftPointer];
    rightVal = arr[rightPointer];
console.log(leftVal, rightVal);
    if (leftVal + rightVal > k) {
      rightPointer--;
    } else if (leftVal + rightVal < k) {
      leftPointer++;
    } else {
      result.push([leftVal, rightVal]);
      rightPointer--;
      leftPointer++;
    }
  }
  return result;
}

// O(n^2)

// console.log(threeSumToK([1, 3, 5, 2, 4], 7), [1, 2, 4]);
console.log(twoSumToK([1, 3, 5, 2, 4, 6, 0, 7], 8), [
  [1, 7],
  [2, 6],
  [3, 5]
]);