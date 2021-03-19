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

// O(n) time O(1) space
function isOneEditDistance (strA, strB) {
  if (strA.length > strB.length) return isOneEditDistance(strB, strA);
  if ((strB.length - strA.length) > 1) return false;

  const isSameLength = strA.length === strB.length;
  let edits = 0;
  let a = 0;
  let b = 0;

  while (edits <= 1 && b <= strB.length) {
    const charA = strA[a];
    const charB = strB[b];

    if (charA !== charB) {
      if (!isSameLength) a--;
      edits++;
      if (edits > 1) return false;
    }

    a++;
    b++;
  }

  return edits === 1;
}

// O(n) time O(n) space
function isOneEditDistance2(strA, strB) {
  const isSameLength = strA.length === strB.length;

  for (let i = 0; i < strB.length; i++) {
    const charA = strA[i];
    const charB = strA[i];

    if (charA !== charB) {
      if (isSameLength) return strA.substr(i + 1) === strB.substr(i + 1);
      return strA.substr(i) === strB.substr(i + 1);
    }
  }

  return strB.length === strA.length + 1;
}

// O(n^2) time O(min(n, m)) space
function isOneEditDistance1(s, t) {
  if (s.length === 1 && t.length === 1 && t !== s) return true;
  return levenshteinDistance(s, t) === 1;
}

// console.log(isOneEditDistance('', ''), false);
// console.log(isOneEditDistance('ab', 'acb'), true);
// console.log(isOneEditDistance('a', ''), true);
// console.log(isOneEditDistance('ab', 'ba'), false);
// console.log(isOneEditDistance('cb', 'ab'), true);
// console.log(isOneEditDistance('ab', 'acd'), false);