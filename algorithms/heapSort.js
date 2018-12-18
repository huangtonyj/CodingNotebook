const Heap = require('../data_structures/Heap');

function heapSort (arr, sort) {
  const result = [];
  const heap = new Heap(sort);

  arr.forEach((el) => heap.insert(el));

  while (heap.length() > 0) {
    result.push(heap.extract());
  }

  return result;
}

// Test
const arr = [3,5,4,1,2,0];
console.log(heapSort(arr), [0, 1, 2, 3, 4, 5]);
console.log(heapSort(arr, (a, b) => b - a), [5, 4, 3, 2, 1, 0]);

const arr2 = [3,5,4,1,2,0,6];
console.log(heapSort(arr2), [0, 1, 2, 3, 4, 5, 6]);
console.log(heapSort(arr2, (a, b) => b - a), [6, 5, 4, 3, 2, 1, 0]);
