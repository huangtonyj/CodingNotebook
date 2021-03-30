// Init two pointers at index 0.
// Inch one pointer zero to one step ahead.
// If the value at the two pointers are the same, 
// expand from the pointers indices and get current palindromic substring;
// then compare current to longest.

function longestPalindromicSubstring(str) {
  let result = [0, 0];
  let i = 0, j = 0;

  while (i < str.length) {
    if (str[i] === str[j]) {
      const [start, end] = getPalindromicSubstr(str, j, i);
      if (end - start > result[1] - result[0]) { result = [start, end]; }
    }

    if (j === i) {
      i++;
    } else {
      j++;
    }
  }

  return str.slice(result[0], result[1]);
}

function getPalindromicSubstr(str, leftPointer, rightPointer) {
  while (leftPointer > -1 && rightPointer < str.length) {
    if (str[leftPointer] !== str[rightPointer]) { break; }
    leftPointer--;
    rightPointer++;
  }

  return [leftPointer + 1, rightPointer];
}

module.exports = longestPalindromicSubstring;