// ***
/*
  There is a new alien language that uses the English alphabet. 
  However, the order among the letters is unknown to you.

  You are given a list of strings words from the alien language's dictionary, 
  where the strings in words are sorted lexicographically by the rules of this new language.

  Return a string of the unique letters in the new alien language sorted in 
  lexicographically increasing order by the new language's rules. 
  If there is no solution, return "". 
  If there are multiple solutions, return any of them.

  A string s is lexicographically smaller than a string t if at the first letter where they differ, 
  the letter in s comes before the letter in t in the alien language. 
  If the first min(s.length, t.length) letters are the same, 
  then s is smaller if and only if s.length < t.length.

  Example 1:
    Input: words = ["wrt","wrf","er","ett","rftt"]
    Output: "wertf"

  Example 2:
    Input: words = ["z","x"]
    Output: "zx"

  Example 3:
    Input: words = ["z","x","z"]
    Output: ""
    Explanation: The order is invalid, so return "".
*/

/*
  1) create a graph and reverse graph
    traverse words arr and compare adjacent word to find dependency difference

  2) topological search the graph
*/
function alienOrder(words) {
  const [graph, reverseGraph] = _createGraph(words);

  return _topologicalSearch(graph, reverseGraph).join('');
}

function _createGraph(words) {
  const graph = {};
  const reverseGraph = {};
  
  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];

    _setDependency(currentWord, nextWord, graph, reverseGraph);
  }

  return [graph, reverseGraph];
}

function _setDependency(word1, word2, graph, reverseGraph) {
  const length = Math.min(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];

    if (!graph[char1]) graph[char1] = new Set();
    if (!graph[char2]) graph[char2] = new Set();
    if (!reverseGraph[char1]) reverseGraph[char1] = new Set();
    if (!reverseGraph[char2]) reverseGraph[char2] = new Set();
    
    if (char1 !== char2 || word1 === word2) {
      if (char1 !== char2) {
        graph[char1].add(char2);
        reverseGraph[char2].add(char1);
      }

      _addRestOfCharsToGraph(word1, word2, i, graph, reverseGraph);
      
      return;
    }
  }

  _addRestOfCharsToGraph(word1, word2, length - 1, graph, reverseGraph);
}

function _addRestOfCharsToGraph(word1, word2, i, graph, reverseGraph) {
  for (let a = i + 1; a < word1.length; a++) {
    const char1 = word1[a];

    if (!graph[char1]) graph[char1] = new Set();
    if (!reverseGraph[char1]) reverseGraph[char1] = new Set();
  }

  for (let b = i + 1; b < word2.length; b++) {
    const char2 = word2[b];

    if (!graph[char2]) graph[char2] = new Set();
    if (!reverseGraph[char2]) reverseGraph[char2] = new Set();
  }
}

function _topologicalSearch(graph, reverseGraph) {
  let independentNode = _findIndepdentNode(reverseGraph);
  let ans = [];

  while (independentNode) {
    const dependencies = graph[independentNode];
    
    ans.push(independentNode);
    delete graph[independentNode];
    delete reverseGraph[independentNode];

    dependencies && dependencies.forEach((dependency) => {
      reverseGraph[dependency].delete(independentNode);
    })

    independentNode = _findIndepdentNode(reverseGraph);
  }

  return ans;
}

function _findIndepdentNode(reverseGraph) {
  for (const [node, dependencies] of Object.entries(reverseGraph)) {
    if (dependencies.size === 0) return node;
  }

  return null;
}

console.log(
  alienOrder(["wrt","wrf","er","ett","rftt"]), 'wertf',
  // alienOrder(["z","x"]), 'zx',
  // alienOrder(["z","x","z"]), ''
  // alienOrder(["zy","zx"]), 'zyx',
  // alienOrder(["z","z"]),
  // alienOrder(["ab","adc"]), 'abcd',
  // alienOrder(["abc","ab"]),
  // alienOrder(["wrt","wrtkj"]),
  // alienOrder(['wxqkj', 'whqg', 'cckgh', 'cdxg', 'cdxdt', 'cdht', 'ktgxt', 'ktgxt', 'ktgch', 'ktdw', 'ktdc', 'jqw', 'jmc', 'jmg']),
);