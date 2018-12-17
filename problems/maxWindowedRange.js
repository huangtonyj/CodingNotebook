const MinMaxStackQueue = require('../data_structures/MinMaxStackQueue');

function maxWindowedRange(arr, windowSize) {
  const windowedRange = new MinMaxStackQueue(arr.slice(0, windowSize));
  let ans = windowedRange.max() - windowedRange.min();

  for (let i = windowSize; i < arr.length; i++) {
    windowedRange.dequeue();
    windowedRange.enqueue(arr[i]);
    ans = Math.max(ans, windowedRange.max() - windowedRange.min());
  }

  return ans;
}

console.log(maxWindowedRange([1, 0, 2, 5, 4, 8], 2), 4); // 4, 8
console.log(maxWindowedRange([1, 0, 2, 5, 4, 8], 3), 5); // 0, 2, 5
console.log(maxWindowedRange([1, 0, 2, 5, 4, 8], 4), 6); // 2, 5, 4, 8
console.log(maxWindowedRange([1, 3, 2, 5, 4, 8], 5), 6); // 3, 2, 5, 4, 8