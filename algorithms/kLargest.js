// ***
const Heap = require('../dataStructures/Heap');

// O(n) avg, O(n^2) worst depending on random pivot;
function kLargest(k, arr) {
  return _quickSelect(arr, k);
}

function _quickSelect(arr, k, left = 0, right = arr.length - 1) {
  if (arr.length - k === left) return arr.slice(left);

  let pivotIdx = Math.ceil(left + Math.random() * (right - left));

  pivotIdx = _partition(arr, pivotIdx, left, right);
  console.table({ arr, pivotIdx });

  if (pivotIdx === arr.length - k) return arr.slice(pivotIdx);

  if (pivotIdx < arr.length - k) {
    return _quickSelect(arr, k, pivotIdx + 1, right);
  } else {
    return _quickSelect(arr, k, left, pivotIdx - 1);
  }
}

function _partition(arr, pivotIdx, left, right) {
  const pivot = arr[pivotIdx];

  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]]; // move pivotIdx to end;

  let storeIdx = left;

  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      [arr[storeIdx], arr[i]] = [arr[i], arr[storeIdx]];
      storeIdx++;
    }
  }

  [arr[right], arr[storeIdx]] = [arr[storeIdx], arr[right]]; // move pivotIdx back;

  return storeIdx;
}

// O(n log k)
function kLargest2(k, arr) {
  const minHeap = new Heap((a,b) => a-b);

  arr.forEach((el) => {
    minHeap.insert(el);

    if (minHeap.length() > k) { minHeap.extract(); }
  });

  return minHeap._store;
}

// console.log(kLargest(3, [10, 9, 8 , 7, 6, 5, 4, 3, 2, 1]));