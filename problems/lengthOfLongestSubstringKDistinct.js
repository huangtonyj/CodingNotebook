/*
  Given a string s and an integer k, 
  return the length of the longest substring of s that contains at most k distinct characters.

  Example 1:
    Input: s = "eceba", k = 2
    Output: 3
    Explanation: The substring is "ece" with length 3.
  
  Example 2:
    Input: s = "aa", k = 1
    Output: 2
    Explanation: The substring is "aa" with length 2.
*/

function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0) return 0;

  let longest = [0, 1];
  let left = 0;
  let right = 0;
  let counts = new Map();
  
  while (right < s.length) {
    const char = s[right];
    
    counts.set(char, (counts.get(char) || 0) + 1);
    
    while (counts.size > k) {
      const charToDelete = s[left];
      const charToDeleteCount = counts.get(charToDelete);
      
      if (charToDeleteCount > 1) {
        counts.set(charToDelete, charToDeleteCount - 1);
      } else {
        counts.delete(charToDelete);
      }

      left++;
    }

    right++;

    if (right - left > longest[1] - longest[0]) longest = [left, right];
  }

  return longest[1] - longest[0];
}

console.log(
  lengthOfLongestSubstringKDistinct('eceba', 2),
  lengthOfLongestSubstringKDistinct('aa', 1)
);