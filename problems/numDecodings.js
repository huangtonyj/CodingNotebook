// ***
/*
  A message containing letters from A-Z can be 
  encoded into numbers using the following mapping:

  'A' -> "1"
  'B' -> "2"
  ...
  'Z' -> "26"

  To decode an encoded message, all the digits must be grouped then mapped 
  back into letters using the reverse of the mapping above 
  (there may be multiple ways). 
  For example, "11106" can be mapped into:

  "AAJF" with the grouping (1 1 10 6)
  "KJF" with the grouping (11 10 6)
  Note that the grouping (1 11 06) is invalid 
  because "06" cannot be mapped into 'F' since "6" is different from "06".

  Given a string s containing only digits, 
  return the number of ways to decode it.

  The answer is guaranteed to fit in a 32-bit integer.

  Example 1:
    Input: s = "12"
    Output: 2
    Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

  Example 2:
    Input: s = "226"
    Output: 3
    Explanation: "226" could be decoded as 
      "BZ" (2 26), 
      "VF" (22 6), or 
      "BBF" (2 2 6).
  
  Example 3:
    Input: s = "0"
    Output: 0
    Explanation: There is no character that is mapped to a number starting with 0.
    The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0.
    Hence, there are no valid ways to decode this since all digits need to be mapped.

  Example 4:
    Input: s = "06"
    Output: 0
    Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
*/

/*
  O(n) time O(n) space
  Recursive and memo DP
  DFS.
  Check if it can take one char aka non zero, check the next;
  Check if it can take next two char 1 - 26, check next;
  Memo DP along the way
*/
function numDecodings(s, dp = {}) {
  if (s === '') return 1;

  const char1 = s.slice(0, 1);
  const char2 = s.slice(0, 2);
  const rest1 = s.slice(1);
  const rest2 = s.slice(2);

  if (_isValid(char1) && !dp[rest1]) {
    dp[rest1] = numDecodings(rest1, dp);
  } else {
    dp[rest1] = dp[rest1] || 0;
  }

  if (_isValid(char2) && !dp[rest2] && char2.length > 1) {
    dp[rest2] = numDecodings(rest2, dp);
  } else {
    dp[rest2] = dp[rest2] || 0;
  }

  if (rest1 === '' && rest2 === '') return dp[rest1] || dp[rest2];

  return (_isValid(char1) ? dp[rest1] : 0) + (_isValid(char2) ? dp[rest2] : 0);
}

function _isValid(s) {
  if (s === '' || s[0] === '0') return false;

  s = parseInt(s);

  return 0 < s && s < 27;
}

// console.log(numDecodings("2"), 1);
// console.log(numDecodings("12"), 2);
// console.log(numDecodings("226"), 3);
// console.log(numDecodings("0"), 0);
// console.log(numDecodings("06"), 0);
// console.log(numDecodings("27"), 1);
// console.log(numDecodings("3126227"), 6);
// console.log(numDecodings('11111111111'), 144);
// console.log(numDecodings('111111111111111111111111111111111111111111111'), 1836311903);