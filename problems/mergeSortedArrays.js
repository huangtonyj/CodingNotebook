// Merge n sorted subarrays
const HeapItem = require('../dataStructures/HeapItem');

function mergeSortedArrays(arr) {
  const minHeap = new HeapItem();
  const result = [];

  // Initialize heap with first element of each subArray
  arr.forEach((subArray, idx) => {
    minHeap.insert({
      value: subArray.shift(), 
      arrayIdx: idx
    });
  });

  // Loop till heap is empty.
  // Extract min value from heap and push to result
  // Add next element from the array the min value was from (if any).
  while (minHeap.length()) {
    const {value, arrayIdx} = minHeap.extract();

    result.push(value);
    
    if (arr[arrayIdx][0]) {
      minHeap.insert({
        value: arr[arrayIdx].shift(), 
        arrayIdx
      });
    }
  }

  return result;
}

console.log(
  mergeSortedArrays([
    [10, 20, 30, 40], 
    [15, 25, 35],
    [27, 29, 37, 48, 93],
    [32, 33]
  ]), 
  // [10, 15, 20, 25, 27, 29, 30, 32, 33, 35, 37, 40, 48, 93],

  mergeSortedArrays([
    [1, 5, 9, 21],
    [-1, 0],
    [-124, 81, 121],
    [3, 6, 12, 20, 150],
  ]), 
  // [-124, -1,  1, 3, 5, 6,  9, 12, 20, 21, 81, 121, 150],
);
