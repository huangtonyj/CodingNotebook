/*
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at <span>output[i] is equal to the product of
  every number in the input array other than <span>input[i].

  Note that you're expected to solve this problem without using division.
  Sample Input
  array = [5, 1, 4, 2]

  Sample Output
  [8, 40, 10, 20]
  8 is equal to 1 x 4 x 2
  40 is equal to 5 x 4 x 2
  10 is equal to 5 x 1 x 2
  20 is equal to 5 x 1 x 4
*/

function arrayOfProducts(arr) {
  const ans = Array(arr.length).fill(1);
  let leftRunning = 1;
  let rightRunning = 1;

  for (let i = 0; i < arr.length; i++) {
    ans[i] *= leftRunning;
    leftRunning *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    ans[i] *= rightRunning;
    rightRunning *= arr[i];
  }

  return ans;
}

/*
  i-th result is the product of all elements before it
  and elements after it

  traverse left with running product
  traverse right with running product
*/

console.log(
  arrayOfProducts([5, 1, 4, 2], [ 8, 40, 10, 20 ])
);