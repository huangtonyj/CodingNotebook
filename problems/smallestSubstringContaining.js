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
  let ans = '';
  const smallStrCounts = {};

  for (const char of smallStr) {
    smallStrCounts[char] = (smallStrCounts[char] || 0) + 1;
  }

  const bigStrCounts = {};
  let left = 0;
  let right = 0;
  let numOfUniqueCharToFind = Object.keys(smallStrCounts).length;

  while (right <= bigStr.length) {

    // console.table({
    //   left, right, numOfUniqueCharToFind
    // })
    // console.log(bigStr.slice(left, right));
    // console.log(bigStrCounts)

    if (numOfUniqueCharToFind > 0) {
      const currentChar = bigStr[right];
      // console.log('right', currentChar);

      if (currentChar in smallStrCounts) {
        const currentCharCount = bigStrCounts[currentChar] || 0;
        
        if (currentCharCount + 1 === smallStrCounts[currentChar]) numOfUniqueCharToFind--;
        bigStrCounts[currentChar] = currentCharCount + 1;
        
        /*
        traverse right pointer until numOfUniqueCharToFind is 0
        decrement numOfUniqueCharToFind if bigStrCounts was 0;
        */
      }
      right++;
    } else {
      const currentSubstr = bigStr.slice(left, right);
      if (currentSubstr.length < ans.length || ans === '') ans = currentSubstr;

      const currentChar = bigStr[left];
      // console.log('left', currentChar, ans);

      // if it is a char in smallstrCounts and moving over this char drops the count below smallStrCounts, numOfUniqueCharToFind++;
      if (currentChar in smallStrCounts) {
        const currentCharCount = bigStrCounts[currentChar];

        if (currentCharCount === smallStrCounts[currentChar]) numOfUniqueCharToFind++;
        bigStrCounts[currentChar] = currentCharCount - 1;
      }


      /*
      compare current slice to ans, and pick shortest;
      traverse left pointer until a char in bigStrCount (unique count) is equal to smallStrCounts[currentChar]
      */
      
      left++;
    }
  }

  return ans;
}

console.log(
  smallestSubstringContaining('abcd$ef$axb$c$', '$$abf'), 'f$axb$', '\n',
  smallestSubstringContaining('abcdef', 'af'), 'abcdef', '\n',
  smallestSubstringContaining('abcdef', 'fa'), 'abcdef', '\n',
  smallestSubstringContaining('abcdef', 'd'), 'd', '\n',
  smallestSubstringContaining('abzacdwejxjfxztghiwjtklmnopqrstuvwxyz', 'aajjttwwxxzz'), 'abzacdwejxjfxztghiwjt', '\n',
  smallestSubstringContaining('abcdefghijklmnopqrstuvwxyz', 'aajjttwwxxzz'), '', '\n',
  smallestSubstringContaining('145624356128828193236336541277356789901', '123'), '1932', '\n',
  smallestSubstringContaining('1456243561288281932363', '123'), '1932', '\n',
);