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
      if prefix is diff from prev prefix, add dependency to graph

  2) topological search the graph
*/
function alienOrder(words) {
  const [graph, reverseGraph] = _createGraph(words);

  console.log('graph', graph);

  const charSet = new Set();

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      charSet.add(word[i]);
    }
  }

  for (const char of charSet) {
    if (char in graph) charSet.delete(char);
  }

  const leftOverChar = Array.from(charSet);

  return [..._topologicalSearch(graph, reverseGraph), ...leftOverChar].join('');
}

function _createGraph(words) {
  const graph = {};
  const reverseGraph = {};
  const queue = [words];
  const idxQueue = [0];

  while (queue.length) {
    const currentGroup = queue.shift();    
    const idx = idxQueue.shift();
    let prevPrefix = null;
    let nextGroup = [];

    
    for (const word of currentGroup) {
      const prefix = word[idx];
      
      console.table({word, idx, prefix, prevPrefix})

      if (prevPrefix) {
        if (!graph[prefix]) graph[prefix] = new Set();
        if (!graph[prevPrefix]) graph[prevPrefix] = new Set();
        if (!reverseGraph[prefix]) reverseGraph[prefix] = new Set();
        if (!reverseGraph[prevPrefix]) reverseGraph[prevPrefix] = new Set();
  
        if (prefix !== prevPrefix) {
          graph[prevPrefix].add(prefix);
          reverseGraph[prefix].add(prevPrefix);

          if (nextGroup.length > 1) {
            queue.push(nextGroup);
            idxQueue.push(idx + 1);
          }

          nextGroup = [];
        }
      }

      if (idx + 1 < word.length) {
        nextGroup.push(word);
        prevPrefix = prefix;
      }
    }

    if (nextGroup.length > 1) {
      queue.push(nextGroup);
      idxQueue.push(idx + 1);
    }
  }

  return [graph, reverseGraph];
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
  // alienOrder(["wrt","wrf","er","ett","rftt"]), 'wertf',
  // alienOrder(["z","x"]), 'zx',
  // alienOrder(["z","x","z"]), ''
  // alienOrder(["z","z"]),
  // alienOrder(["ab","adc"]),
  alienOrder(["abc","ab"]),
  // alienOrder(['wxqkj', 'whqg', 'cckgh', 'cdxg', 'cdxdt', 'cdht', 'ktgxt', 'ktgxt', 'ktgch', 'ktdw', 'ktdc', 'jqw', 'jmc', 'jmg']),
);