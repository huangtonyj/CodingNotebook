function longestPeak(arr) {
  let ans = 0;
  let count = 1;
  let increasing = true;

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];
    const next = arr[i + 1];

    if (increasing && current > prev) {
      count++;

      if (count > 1 && next < current) {
        increasing = false;
      }

    } else if (increasing && current <= prev) {
      count = 1;

    } else if (!increasing && current < prev) {
      count++;

      if (current <= next) {
        // reset
        ans = Math.max(ans, count);

        count = 1;
        increasing = true;
      }
    }
  }

  return increasing ? ans : Math.max(ans, count);
}

// console.log(
//   longestPeak([]) === 0,
//   longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]) === 6,
//   longestPeak([1, 3, 2]) === 3,
//   longestPeak([1, 2, 3, 4, 5, 1]) === 6,
//   longestPeak([5, 4, 3, 2, 1, 2, 1]) === 3,
//   longestPeak([1, 1, 3, 2, 1]) === 4,
//   longestPeak([5, 4, 3, 2, 1, 2, 10, 12]) === 0,
//   longestPeak([1, 2, 3, 4, 5, 6, 10, 100, 1000]) === 0,
//   longestPeak([1, 2, 3, 3, 2, 1]) === 0,
// );

module.exports = longestPeak;