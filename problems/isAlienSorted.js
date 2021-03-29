/*
  In an alien language, surprisingly they also use english lowercase letters, 
  but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

  Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

  Example 1:
    Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
    Output: true
    Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
  Example 2:
    Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
    Output: false
    Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
  Example 3:
    Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
    Output: false
    Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
*/

function isAlienSorted(words, order) {
  const orderValues = _getOrderValue(order);
  
  for (let i = 1; i < words.length; i++) {
    const prevWord = words[i - 1];
    const currentWord = words[i];
    
    const islexicographical = _islexicographical(prevWord, currentWord, orderValues);
    
    if (!islexicographical) return false;
  }
  
  return true;
}

function _getOrderValue(order) {
  const orderValues = {};
  
  for (let i = 0; i < order.length; i++) {
    const char = order[i];
    
    orderValues[char] = i;
  }
  
  return orderValues;
}

function _islexicographical(word1, word2, orderValues) {
  let idx1 = 0;
  let idx2 = 0;
  
  while (idx1 < word1.length && idx2 < word2.length) {
    const char1 = word1[idx1];
    const char2 = word2[idx2];
    
    if (orderValues[char1] < orderValues[char2]) return true;
    if (orderValues[char1] > orderValues[char2]) return false;
    
    idx1++;
    idx2++;
  }
  
  return word1[idx1] === undefined;
} 