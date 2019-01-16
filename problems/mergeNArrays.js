// Merge n sorted subarrays
const HeapItem = require('../data_structures/HeapItem');

function mergeNArrays(arr) {
  const minHeap = new HeapItem();
  const result = [];
  let currentMin;

  arr.forEach((subArray, idx) => {
    minHeap.insert({
      value: subArray.shift(), 
      arrayIdx: idx
    });
  });

  while (minHeap.length()) {
    console.log(result, minHeap.store, minHeap.peek());
    currentMin = minHeap.extract();
    result.push(currentMin.value);
    
    if (arr[currentMin.arrayIdx][0]) {
      minHeap.insert({
        value: arr[currentMin.arrayIdx].shift(), 
        arrayIdx: currentMin.arrayIdx
      });
    }
  }

  return result;
}

const list = [
  [10, 20, 30, 40], 
  [15, 25, 35],
  [27, 29, 37, 48, 93],
  [32, 33]
];

console.log(mergeNArrays(list), [ 10, 15, 20, 25, 27, 29, 30, 32, 33, 35, 37, 40, 48, 93 ]);
