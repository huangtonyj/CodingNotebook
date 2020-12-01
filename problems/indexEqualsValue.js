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

// O(log(n)) time
function indexEqualsValue(arr) {
  const ans = _indexEqualsValue(arr);
  return ans === Infinity ? -1 : ans;
}

function _indexEqualsValue(arr, startIdx = 0) {
  const midIdx = Math.floor(arr.length / 2);
  const midVal = arr[midIdx];
  const idx = startIdx + midIdx;

  if (midVal === idx) {
    return Math.min(idx, _indexEqualsValue(arr.slice(0, midIdx), startIdx));
  } else if (midVal > idx) {
    return _indexEqualsValue(arr.slice(0, midIdx), startIdx);
  } else if (midVal < idx) {
    return _indexEqualsValue(arr.slice(midIdx + 1), idx + 1);
  }

  return Infinity;
}

// O(n) time O(1) space
// function indexEqualsValue(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if (el === i) return i;
//   }

//   return -1;
// }

console.log(
  indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]) === 3,
  indexEqualsValue([-5, -4, -3, -2, -1, 0, 1, 3, 5, 6, 7, 11, 12, 14, 19, 20]) === 11,
  indexEqualsValue([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) === -1,
);