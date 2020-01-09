const Heap = require('../dataStructures/Heap');

function heapSort (arr, sort) {
  const result = [];
  const heap = new Heap(sort);

  arr.forEach((el) => heap.insert(el));

  while (heap.length() > 0) {
    result.push(heap.extract());
  }

  return result;
}

module.exports = heapSort;