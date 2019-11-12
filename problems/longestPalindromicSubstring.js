function longestPalindromicSubstring(str) {
  
  let current = '';
  let i = 0, j = 0;

  while (i < str.length) {

    const iLetter = str[i];
    const jLetter = str[j];

    if (iLetter === jLetter) {
      let leftPointer = j;
      let rightPointer = i;
      // console.log(leftPointer, rightPointer);

      while (leftPointer > -1 && rightPointer < str.length) {
        if (str[leftPointer] === str[rightPointer]) {
          leftPointer--;
          rightPointer++;
        } else {
          break;
        }
        // console.log(leftPointer, rightPointer);
      }

      const currentPalindromeSubString = str.slice(leftPointer + 1, rightPointer);
      // console.log(currentPalindromeSubString);

      if (currentPalindromeSubString.length > current.length) {
        current = currentPalindromeSubString;
      }

    }

    if (j === i) {
      i++;
    } else {
      j++;
    }
    // console.log(i);

  }

  return current;
}

module.exports = longestPalindromicSubstring;


console.log(longestPalindromicSubstring('anoona'));