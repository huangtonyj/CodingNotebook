function isPalindrome(str) {
  let startIdx = 0;
  let endIdx = str.length - 1;

  while (endIdx > startIdx) {
    if (str[startIdx] !== str[endIdx]) return false;
    endIdx--;
    startIdx++;
  }

  return true;
}

module.exports = isPalindrome;