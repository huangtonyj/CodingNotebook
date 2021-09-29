/*
  Given a non-empty string s, you may delete at most one character. 
  Judge whether you can make it a palindrome.

  Example 1:
    Input: "aba"
    Output: True

  Example 2:
    Input: "abca"
    Output: True
    Explanation: You could delete the character 'c'.
*/

function isPalindromeOneRemoval(s) {
  let l = 0;
  let r = s.length - 1;
  
  while (l < r) {
    if (s[l] !== s[r]) break;
    l++;
    r--;
  }

  if (l >= s) return true;
  
  return _validPalindrome(s, l + 1, r) || _validPalindrome(s, l, r - 1);
}

function _validPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  
  return true;
}

console.log(isPalindromeOneRemoval('aba'), true);
console.log(isPalindromeOneRemoval('abca'), true);
console.log(isPalindromeOneRemoval('abc'), false);