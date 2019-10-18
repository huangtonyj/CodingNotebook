const Heap = require('../dataStructures/Heap');

function findThreeLargestNumbers(array) {
  let result = [];
  const heap = new Heap(); // min Heap by default

  array.forEach((el) => {
    heap.insert(el);
    if (heap.length() > 3) heap.extract();
  });

  while (heap.length()) {
    result.push(heap.extract());
  }

  return result;
}

module.exports = findThreeLargestNumbers;