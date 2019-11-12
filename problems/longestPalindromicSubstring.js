// Init two pointers at index 0.
// Inch one pointer zero to one step ahead.
// If the value at the two pointers are the same, 
// expand from the pointers indices and get current palindromic substring;
// then compare current to longest.

function longestPalindromicSubstring(str) {
  let result = '';
  let i = 0, j = 0;

  while (i < str.length) {
    if (str[i] === str[j]) {
      const current = getPalindromicSubstr(str, j, i);
      if (current.length > result.length) { result = current; }
    }

    if (j === i) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

function getPalindromicSubstr(str, leftPointer, rightPointer) {
  while (leftPointer > -1 && rightPointer < str.length) {
    if (str[leftPointer] !== str[rightPointer]) { break; }
    leftPointer--;
    rightPointer++;
  }

  return str.slice(leftPointer + 1, rightPointer);
}

module.exports = longestPalindromicSubstring;