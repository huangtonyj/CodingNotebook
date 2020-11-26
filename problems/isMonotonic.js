function isMonotonic(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  const increasing = first < last;

  for (let i = 0; i < arr.length - 1; i++) {
    const current  = arr[i];
    const next = arr[i + 1];

    if ((increasing && current > next) || (!increasing && current < next)) {
      return false;
    }
  }

  return true;
}

console.log(
  isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]) === true,
  isMonotonic([1, 2, 0]) === false,
  isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]) === true,
  isMonotonic([]) === true,
);