/*  
  Write a function that takes in two strings: a main string and a potential substring of the main string. 
  The function should return a version of the main string with every instance of the substring in it wrapped between underscores. 
  If two instances of the substring in the main string overlap each other or sit side by side, 
  the underscores relevant to these two substrings should only appear on the far left of the left substring and on the far right of the right substring. 
  If the main string does not contain the other string at all, return the main string intact.
*/

const inputStr = "testthis is a testtest to see if testestest it works";
const inputSubStr = "test";
const output = "_test_this is a _testtest_ to see if _testestest_ it works";

function underscorifySubstring(string, substring) {

  let result = '';
  let idx = 0;
  const span = substring.length;
  let prevMatch = false;

  while (idx <= string.length) {
    const current = string.slice(idx, idx + span);
    const char = string[idx];

    console.table({char, current, prevMatch, result});

    if (current === substring) {
      if (!prevMatch) result += '_';

      prevMatch = true;
      result += substring.slice(0, span - 1);
      idx += span - 1;
    } else if (prevMatch) {
      prevMatch = false;
      result += char;
      result += '_';
      idx++;
    } else {
      result += char;
      idx++;
    }
    
  }
  
  return result;
  
}

module.exports = underscorifySubstring;

console.log(underscorifySubstring(inputStr, inputSubStr));