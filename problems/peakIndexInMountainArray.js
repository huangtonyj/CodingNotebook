/*
  Let's call an array arr a mountain if the following properties hold:

  arr.length >= 3
  There exists some i with 0 < i < arr.length - 1 such that:
  arr[0] < arr[1] < ... arr[i-1] < arr[i]
  arr[i] > arr[i+1] > ... > arr[arr.length - 1]
  Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

  Example 1:
    Input: arr = [0,1,0]
  Output: 1

  Example 2:
    Input: arr = [0,2,1,0]
    Output: 1

  Example 3:
    Input: arr = [0,10,5,2]
    Output: 1

  Example 4:
    Input: arr = [3,4,5,1]
    Output: 2

  Example 5:
    Input: arr = [24,69,100,99,79,78,67,36,26,19]
    Output: 2
*/


// O(log n) time O(1) space
function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// O(n) time O(1) space
function peakIndexInMountainArray1(arr) {
  let max = arr[0];
  let maxIdx = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIdx = i;
    }
  }
  
  return maxIdx;
}