// ***

/*
  Write a function that takes in two strings and returns their longest common
  subsequence.

  A subsequence of a string is a set of characters that aren't necessarily
  adjacent in the string but that are in the same order as they appear in the
  string. For instance, the characters ["a", "c", "d"] form a
  subsequence of the string "abcd", and so do the characters
  ["b", "d"]. Note that a single character in a string and the
  string itself are both valid subsequences of the string.

  You can assume that there will only be one longest common subsequence.

  Sample Input
    str1 = "ZXVVYZW"
    str2 = "XKYKZPW"

  Sample Output
    ["X", "Y", "Z", "W"]
*/

function longestCommonSubsequence(str1, str2) {
  const [commonChars1, commonChars2] = getCommonChars(str1, str2);
  let prevRow = commonChars2.map(_ => []);
  
  for (let i = 1; i < commonChars1.length; i++) {
    const currentRow = [...prevRow];
    const char1 = commonChars1[i];
    
    for (let j = 1; j < commonChars2.length; j++) {
      const char2 = commonChars2[j];

      if (char1 === char2) {
        const prevLCS = prevRow[j - 1];
        currentRow[j] = [...prevLCS, char1];
      } else {
        const top = prevRow[j];
        const left = currentRow[j - 1];
        currentRow[j] = top.length > left.length ? top : left;
      }
    }

    prevRow = currentRow;
  }
  
	return prevRow[commonChars2.length - 1];
}

function getCommonChars(str1, str2) {
  const set1 = new Set(str1.split(''));
  const set2 = new Set(str2.split(''));

  const commonChars1 = ['', ...str1.split('').filter(el => set2.has(el))];
  const commonChars2 = ['', ...str2.split('').filter(el => set1.has(el))];

  return [commonChars1, commonChars2];
}

module.exports = longestCommonSubsequence;

// Get array of common chars between both strings
// Compare n * m of the str
// if char1 === char2, append to running matched LCS in upper left cell. (recursive)
// else take longest running LCS from either top with str1 or left with str2.