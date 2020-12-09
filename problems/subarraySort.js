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
    [4, 9]
*/

function subarraySort(arr) {
  let i = 1;
  let prev = arr[i - 1];
  let current = arr[i];

  // find if there is one out of order from the left
  while (prev < current && i < arr.length) {
    prev = arr[i - 1];
    current = arr[i];
    i++;
  }

  if (i === arr.length) return [-1, -1];

  // find where from left should start
  let left = 0;
  while (arr[left] <= current) {
    left++;
  }


  i = arr.length - 1;
  prev = arr[i - 1];
  current = arr[i];

  // // find where it is out of order from the right
  while (prev < current) {
    prev = arr[i - 1];
    current = arr[i];
    i--;
  }

  if (i === arr.length - 1) return [-1, -1];

  // find where from right should end
  let right = arr.length - 1;
  while (arr[right] > prev) {
    right--;
  }

  return [left, right];
}

console.log(
  // subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]), [4, 9], '\n',
  // subarraySort([1, 2]), [-1, -1], '\n',
  subarraySort([2, 1]), [0, 1], '\n',
  // subarraySort([1, 2, 8, 4, 5]), [2, 4], '\n',
  subarraySort([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [0, 12], '\n',
  subarraySort([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]), [1, 12], '\n',
  subarraySort([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), [-1, -1], '\n',
  subarraySort([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]), [2, 19], '\n',
);