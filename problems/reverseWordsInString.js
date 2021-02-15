/*
  Write a function that takes in a string of words separated by one or more
  whitespaces and returns a string that has these words in reverse order. For
  example, given the string "tim is great", your function should
  return "great is tim".

  For this problem, a word can contain special characters, punctuation, and
  numbers. The words in the string will be separated by one or more whitespaces,
  and the reversed string must contain the same whitespaces as the original
  string. For example, given the string
  "whitespaces    4" you would be expected to return
  "4    whitespaces".

  Note that you're not allowed to to use any built-in
  split or reverse methods/functions. However, you
  are allowed to use a built-in join method/function.

  Also note that the input string isn't guaranteed to always contain words.
  Sample Input
    string = "AlgoExpert is the best!"

  Sample Output
    "best! the is AlgoExpert"
*/

function reverseWordsInString(str) {
  let ans = '';
  let endOfStrIdx = null;
  let startOfStrIdx = null;
  let spaceCount = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    const isSpace = char === ' ';

    if (endOfStrIdx === null && !isSpace) {
      endOfStrIdx = i;
    } else if (isSpace && spaceCount === 0) {
      startOfStrIdx = i + 1;
      ans += str.slice(startOfStrIdx, endOfStrIdx + 1);
    } if (spaceCount > 0 && !isSpace) {
      endOfStrIdx = i;
      startOfStrIdx = null;
      spaceCount = 0;
    }

    if (isSpace) {
      spaceCount++;
      ans += ' ';
    }
  }

  return spaceCount ? ans : ans + str.slice(0, endOfStrIdx + 1);
}

module.exports = reverseWordsInString;