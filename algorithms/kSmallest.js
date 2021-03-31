function kSmallest(arr, k) {
  return _quickSelect(arr, k);
}

function _quickSelect(arr, k, left = 0, right = arr.length - 1) {
  let pivotIdx = Math.ceil(left + Math.random() * (right - left));

  pivotIdx = _partition(arr, pivotIdx, left, right);

  if (pivotIdx === k - 1) return arr.slice(0, pivotIdx + 1);

  if (pivotIdx < k) {
    return _quickSelect(arr, k, pivotIdx + 1, right);
  } else {
    return _quickSelect(arr, k, left, pivotIdx - 1);
  }
}

function _partition(arr, pivotIdx, left, right) {
  const pivot = arr[pivotIdx];
  let storeIdx = left;

  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]];

  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      [arr[storeIdx], arr[i]] = [arr[i], arr[storeIdx]];
      storeIdx++;
    }
  }

  [arr[right], arr[storeIdx]] = [arr[storeIdx], arr[right]];

  return storeIdx;
}