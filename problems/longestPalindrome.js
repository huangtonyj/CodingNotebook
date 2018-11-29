// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:

//   Input: "babad"
// Output: "bab"
// Note: "aba"
// is also a valid answer.
// Example 2:

//   Input: "cbbd"
// Output: "bb"

const longestPalindrome = function (s) {
  // holder for longest
  // traverse string

  let longest = '';
  let longest_length = 0;
  let l = 0;
  let r = 1;

  for (i = 0; i < s.length; i++) {
    do {
      temp_s = s.slice(i - l, i + r);
      if (isPalindrome(temp_s) && (temp_s.length > longest_length)) {
        longest = temp_s;
        longest_length = temp_s.length;
      }
      l += 1;
      r += 1;
    }
    while (l > 0 || r < s.length)
    l = 0;
    r = 1;
  }
  return longest;

};

const isPalindrome = function(s) {
  return s.split('').join('') == s.split('').reverse().join('')
}

console.log(longestPalindrome('babad'), 'bab')
console.log(longestPalindrome('cbbd'), 'bb')