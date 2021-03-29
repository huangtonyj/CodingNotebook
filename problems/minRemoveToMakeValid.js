/*
  Given a string s of '(' , ')' and lowercase English characters. 

  Your task is to remove the minimum number of parentheses ( '(' or ')', 
  in any positions ) so that the resulting parentheses string is valid and return any valid string.

  Formally, a parentheses string is valid if and only if:

  It is the empty string, contains only lowercase characters, or
  It can be written as AB (A concatenated with B), where A and B are valid strings, or
  It can be written as (A), where A is a valid string.

  Example 1:
    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

  Example 2:
    Input: s = "a)b(c)d"
    Output: "ab(c)d"

  Example 3:
    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.

  Example 4:
    Input: s = "(a(b(c)d)"
    Output: "a(b(c)d)"
*/

function minRemoveToMakeValid(s) {
  const openParenthesesStack = [];
  const closeParenthesesIdxToRemove = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      openParenthesesStack.push(i);
    } else if (char === ")") {
      if (openParenthesesStack.length > 0) {
        openParenthesesStack.pop();
      } else {
        closeParenthesesIdxToRemove.push(i);
      }
    }
  }

  return _removeIdxFrom(s, _merge(openParenthesesStack, closeParenthesesIdxToRemove));
}

function _removeIdxFrom(s, idxToRemove) {
  const result = [];
  let prevIdx = 0;
  
  for (const idx of idxToRemove) {
    result.push(s.slice(prevIdx, idx));
    prevIdx = idx + 1;
  }
  
  result.push(s.slice(prevIdx));
  
  return result.join('');
}

function _merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

// console.log(minRemoveToMakeValid('lee(t(c)o)de)'), 'lee(t(c)o)de');
// console.log(minRemoveToMakeValid('a)b(c)d'), 'ab(c)d');
// console.log(minRemoveToMakeValid('))(('), '');
// console.log(minRemoveToMakeValid('(a(b(c)d)'), 'a(b(c)d)');