// ***

// Returns the k-th smallest element of list within left..right.
function quickSelect(nums, k, left = 0, right = nums.length - 1) {
  // Select a random pivotIdx between left and right
  let pivotIdx = left + Math.ceil(Math.random() * (right - left));

  pivotIdx = _partition(nums, pivotIdx, left, right);

  if (k - 1 === pivotIdx) return nums[k - 1]; // the pivot is on k-th smallest position

  if (k - 1 < pivotIdx) { // go left side
    return quickSelect(nums, k, left, pivotIdx - 1);
  } else { // go right side
    return quickSelect(nums, k, pivotIdx + 1, right);
  }
}

function _partition(nums, pivotIdx, left, right) {
  const pivot = nums[pivotIdx];
  let storeIdx = left;

  // Move pivot to end
  [nums[pivotIdx], nums[right]] = [nums[right], nums[pivotIdx]];

  // Move all smaller elements to the left
  for (let i = left; i <= right; i++) {
    if (nums[i] < pivot) {
      [nums[storeIdx], nums[i]] = [nums[i], nums[storeIdx]];
      storeIdx++;
    }
  }

  // Move pivot to its final place
  [nums[storeIdx], nums[right]] = [nums[right], nums[storeIdx]];

  return storeIdx;
}

module.exports = quickSelect;