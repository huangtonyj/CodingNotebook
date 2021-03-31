const Heap = require('../dataStructures/Heap');

function kLargest(k, arr) {
  const minHeap = new Heap((a,b) => a-b);

  arr.forEach((el) => {
    minHeap.insert(el);

    if (minHeap.length() > k) { minHeap.extract(); }
  });

  return minHeap._store;
}

// O(n log k)
console.log(kLargest(3, [1,2,3,4,5,6,7,8,9,10]));
