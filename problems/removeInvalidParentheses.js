/*
  https://leetcode.com/problems/remove-invalid-parentheses/
  Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

  Note: The input string may contain letters other than the parentheses ( and ).

  Example 1:
    Input: "()())()"
    Output: ["()()()", "(())()"]

  Example 2:
    Input: "(a)())()"
    Output: ["(a)()()", "(a())()"]

  Example 3:
    Input: ")("
    Output: [""]
*/

/*
  Try out every possible combination.
  Keeping current char and removing current char.
  Once index reaches end of string, add to set if valid.

  Optimization potential:
    Initially go through first pass to see how many mismatched open and close paranthesis.
*/

// O(2 ^ n) time
function removeInvalidParentheses(s) {
  const candidates = _removeInvalidParentheses(s);
  const set = new Set();
  let longest = 0;

  for (const el of candidates) {
    longest = Math.max(longest, el.length);
    set.add(el);
  }

  return Array.from(set).filter(el => el.length === longest);
}

function _removeInvalidParentheses(s, idx = 0, openCount = 0, ans = []) {
  if (idx === s.length && openCount === 0) {
    ans.push(s);
    return;
  }

  if (idx > s.length) return;

  const char = s[idx];
  const s2 = s.slice(0, idx) + s.slice(idx + 1);

  // remove current char
  if (idx < s.length) _removeInvalidParentheses(s2, idx, openCount, ans);

  if (char === '(') {
    openCount++;
  } else if (char === ')') {
    openCount--;
  }
  
  if (openCount >= 0) {
    _removeInvalidParentheses(s, idx + 1, openCount, ans);
  }

  return ans;
}