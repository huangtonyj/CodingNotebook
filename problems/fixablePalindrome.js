// Given a string which we can delete at most k, return whether you can make a palindrome.

// For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

function fixablePalindrome(str, k, left, right) {
  if (k < 0) return false;

  let leftPointer = left || 0;
  let rightPointer = right || str.length - 1;

  while (leftPointer < rightPointer) {
    const leftChar = str[leftPointer];
    const rightChar = str[rightPointer];

    if (leftChar !== rightChar) {
      return fixablePalindrome(str, k - 1, leftPointer + 1, rightPointer) || 
        fixablePalindrome(str, k - 1, leftPointer, rightPointer - 1)
    };
    
    leftPointer++;
    rightPointer--;
  }

  return true;
}

console.log(fixablePalindrome("waterrfetawx", 2) , true)