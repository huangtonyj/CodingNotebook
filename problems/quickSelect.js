function quickSelect(arr, k) {
  const pred = getPrediction(arr, k);
  let left = [];
  let right = [];

  arr.forEach((el) => {
    if (el <= pred) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  if (left.length === k) {
    return Math.max(...left);
  } else if (left.length < k) {
    return quickSelect(right, k - left.length);
  } else {
    return quickSelect(left, k);
  }
}

// Assuming linearlity, find interpolated predication based on min and max.
const getPrediction = (arr, k) => {
  let min = Infinity;
  let max = -Infinity;

  arr.forEach((el) => {
    if (el < min) min = el;
    if (el > max) max = el;
  });

  const slope = (max - min) / arr.length;
  return Math.floor(slope * (k - 1) + min);
};

module.exports = quickSelect;