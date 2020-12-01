/*
  Write a function that takes in a sorted array of distinct integers and returns
  the first index in the array that is equal to the value at that index. In
  other words, your function should return the minimum index where
  index == array[index].
  If there is no such index, your function should return -1 .

  Sample Input
  array = [-5, -3, 0, 3, 4, 5, 9]

  Sample Output
  3 === array[3]

*/



// O(n) time O(1) space
function indexEqualsValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === i) return i;
  }

  return -1;
}


console.log(
  indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]) === 3,
  indexEqualsValue([-5, -4, -3, -2, -1, 0, 1, 3, 5, 6, 7, 11, 12, 14, 19, 20]) === 11,
  indexEqualsValue([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) === -1,
);