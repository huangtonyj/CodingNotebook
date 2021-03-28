// ***
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
  1) Group words by prefix and
  2) Traverse and backtrack each potential word
*/
function wordBreakBackTrack(s, wordDict) {
  const dict = _groupWordDict(wordDict);
  const memo = new Array(s.length).fill(null);

  return _backTrackWord(s, dict, memo);
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

function _backTrackWord(s, dict, memo, idx = 0) {
  if (idx === s.length) return true;
  if (memo[idx] !== null) return memo[idx];
  
  const prefix = s[idx];
  const nextWords = dict[prefix] || [];

  for (const word of nextWords) {
    const length = word.length;

    if (word === s.slice(idx, idx + length)) {
      const potential = _backTrackWord(s, dict, memo, idx + length)
      memo[idx] = potential;

      if (potential) return true;
    }
  }

  return false;
}

/*
  1) Group words by prefix and
  2) BFS
*/

function wordBreakBFS(s, wordDict) {
  const dict = _groupWordDict(wordDict);

  return _BFS(s, dict);
}

function _BFS(s, dict) {
  const queue = [0];
  const visited = new Array(s.length).fill(null);

  while (queue.length) {
    const idx = queue.shift();
    const prefix = s[idx];
    const words = dict[prefix] || [];

    if (visited[idx]) continue;

    for (const word of words) {
      const length = word.length;

      if (word === s.slice(idx, idx + length)) {
        if (idx + length === s.length) return true;

        visited[idx] = true;
        queue.push(idx + length);
      }
    }
  }

  return false;
}
