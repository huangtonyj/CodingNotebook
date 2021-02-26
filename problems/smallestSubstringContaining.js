// ***
/*
  You're given two non-empty strings: a big string and a small string. Write a
  function that returns the smallest substring in the big string that contains
  all of the small string's characters.

  Note that:
    - The substring can contain other characters not found in the small string.
    - The characters in the substring don't have to be in the same order as they
      appear in the small string.
    - If the small string has duplicate characters, the substring has to contain
      those duplicate characters (it can also contain more, but not fewer).

  You can assume that there will only be one relevant smallest substring.

  Sample Input
    bigString = "abcd$ef$axb$c$"
    smallString = "$$abf"

  Sample Output
    "f$axb$"
*/

function smallestSubstringContaining(bigStr, smallStr) {
  const smallStrCounts = getCharCounts(smallStr);
  const bigStrCounts = new Map();

  let ans = '';
  let left = 0;
  let right = 0;
  let numOfUniqueCharToFind = smallStrCounts.size;

  while (right <= bigStr.length) {
    if (numOfUniqueCharToFind > 0) {
      // move right pointer until numOfUniqueCharToFind is 0;
      const currentChar = bigStr[right];

      if (smallStrCounts.has(currentChar)) {
        const currentCharCount = bigStrCounts.get(currentChar) || 0;
        
        if (currentCharCount + 1 === smallStrCounts.get(currentChar)) numOfUniqueCharToFind--;
        bigStrCounts.set(currentChar, currentCharCount + 1);
      }

      right++;
    } else {
      // move left pointer until numOfUniqueCharToFind > 0;
      const currentSubstr = bigStr.slice(left, right);
      if (currentSubstr.length < ans.length || ans === '') ans = currentSubstr;

      const currentChar = bigStr[left];

      if (smallStrCounts.has(currentChar)) {
        const currentCharCount = bigStrCounts.get(currentChar);

        if (currentCharCount === smallStrCounts.get(currentChar)) numOfUniqueCharToFind++;
        bigStrCounts.set(currentChar, currentCharCount - 1);
      }
      
      left++;
    }
  }

  return ans;
}

function getCharCounts(str) {
  const counts = new Map();

  for (const char of str) counts.set(char, (counts.get(char) || 0) + 1);

  return counts;
}

module.exports = smallestSubstringContaining;