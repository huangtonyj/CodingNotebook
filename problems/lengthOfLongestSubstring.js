/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s === '') { return 0}
  if (s === ' ') { return 1}
  let result = 1;
  let counter = {};

  for (i = 0; i < s.length; i++) {
    for (j = i; j < s.length; j++) {
      if (counter[s[j]] === 1) {
        result = Math.max(result, Object.values(counter).reduce((acc, el) => acc + el))
        counter = {};
        break;
      } else {
        counter[s[j]] = 1;
      }
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("c"))