// Given an array of integers,
//   return the largest range, inclusive, of integers that are all included in the array.

// For example, given the array[9, 6, 1, 3, 8, 10, 12, 11],
//   return (8, 12) since 8, 9, 10, 11, and 12 are all in the array.

function longestContinuousSequence (arr) {

  const set = new Set(arr);
  const seen = new Set();

  let result = [];

  for (let num of set) {
    if (seen.has(num)) continue;

    const current = [num];
    let prevNum = num - 1;
    let nextNum = num + 1;

    while (set.has(prevNum)) {
      current.unshift(prevNum);
      seen.add(prevNum);
      prevNum--;
    }

    while (set.has(nextNum)) {
      current.push(nextNum);
      seen.add(nextNum);
      nextNum++;
    }

    result = current.length > result.length ? current : result;
  }

  return result;
}

console.log(longestContinuousSequence([0, 9, 6, 1, 3, 8, 10, 12, 11, 14]));