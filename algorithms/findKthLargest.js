const quickSelect = require('./quickSelect');

function findKthLargest(arr, k) {
  const length = arr.length;

  return quickSelect(arr, length - k + 1, 0, length - 1);
}

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 1));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 3));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 4));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 5));
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 6));