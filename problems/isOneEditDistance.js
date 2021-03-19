const levenshteinDistance = require('./levenshteinDistance');

/*
  Given two strings s and t, 
  return true if they are both one edit distance apart, 
  otherwise return false.

  A string s is said to be one distance apart from a string t if you can:

  Insert exactly one character into s to get t.
  Delete exactly one character from s to get t.
  Replace exactly one character of s with a different character to get t.

  Example 1:
    Input: s = "ab", t = "acb"
    Output: true
    Explanation: We can insert 'c' into s to get t.

  Example 2:
    Input: s = "", t = ""
    Output: false
    Explanation: We cannot get t from s by only one step.

  Example 3:
    Input: s = "a", t = ""
    Output: true

  Example 4:
    Input: s = "", t = "A"
    Output: true
*/

function isOneEditDistance (a, b) {
  const isSameLength = a.length === b.length;
  let edits = 0;
  let shortStr = a.length < b.length ? a : b;
  let longStr = a.length < b.length ? b : a;
  let s = 0;
  let l = 0;

  while (edits <= 1 && l <= longStr.length) {
    const charS = shortStr[s];
    const charL = longStr[l];

    if (charS !== charL) {
      if (!isSameLength) s--;
      edits++;
    }

    s++;
    l++;
  }

  return edits === 1;
}

// O(n) time O(min(n, m)) space
function isOneEditDistance1(s, t) {
  if (s.length === 1 && t.length === 1 && t !== s) return true;
  return levenshteinDistance(s, t) === 1;
}

// console.log(isOneEditDistance('ab', 'acb'), true);
// console.log(isOneEditDistance('a', ''), true);
// console.log(isOneEditDistance('ab', 'ba'), false);
// console.log(isOneEditDistance('cb', 'ab'), true);
// console.log(isOneEditDistance('ab', 'acd'), false);