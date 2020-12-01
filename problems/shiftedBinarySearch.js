function shiftedBinarySearch(arr, target, startIdx = 0) {
  const midIdx = Math.floor(arr.length / 2);

  const firstValue = arr[0];
  const midValue = arr[midIdx];
  const lastValue = arr[arr.length - 1];

  if (target === firstValue) return startIdx + 0;
  if (target === midValue) return startIdx + midIdx;
  if (target === lastValue) return startIdx + arr.length - 1;

  if (firstValue < midValue) {
    if (target > firstValue && target < midValue) {
      return shiftedBinarySearch(arr.slice(0, midIdx), target, startIdx);
    } else {
      return shiftedBinarySearch(arr.slice(midIdx), target, startIdx + midIdx);
    }
  } else if (midValue < lastValue) {
    if (target > midValue && target < lastValue) {
      return shiftedBinarySearch(arr.slice(midIdx), target, startIdx + midIdx);
    } else {
      return shiftedBinarySearch(arr.slice(0, midIdx), target, startIdx);
    }
  }

  return -1;
}

console.log(
  shiftedBinarySearch([45, 61, 71, 72, 73, 0 ,1, 21, 33, 37], 33) === 8,
  shiftedBinarySearch([71, 72, 73, 0 ,1, 21, 33, 37, 45, 61], 73) === 2,
);