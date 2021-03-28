/*
  Given a string s and a dictionary of strings wordDict, 
  return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

  Example 1:
    Input: s = "leetcode", wordDict = ["leet","code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".
  
  Example 2:
    Input: s = "applepenapple", wordDict = ["apple","pen"]
    Output: true
    Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
    Note that you are allowed to reuse a dictionary word.
  
  Example 3:
    Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
    Output: false
*/

/*
  Group words by prefix
  Traverse and backtrack each potential word
*/
function wordBreak(s, wordDict) {
  const dict = _groupWordDict(wordDict);

  return _backTrackWord(s, dict);
}

function _groupWordDict(wordDict) {
  const dict = {};

  for (const word of wordDict) {
    const prefix = word[0];

    if (!(prefix in dict)) dict[prefix] = [];
    dict[prefix].push(word);
  }

  return dict;
}

function _backTrackWord(s, dict, idx = 0) {
  if (idx === s.length) return true;
  
  const prefix = s[idx];
  const nextWords = dict[prefix] || [];

  for (const word of nextWords) {
    const length = word.length;

    if (word === s.slice(idx, idx + length)) {
      if (_backTrackWord(s, dict, idx + length)) return true;
    }
  }

  return false;
}
