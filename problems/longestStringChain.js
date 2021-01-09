/*
  Given a list of strings, write a function that returns the longest string
  chain that can be built from those strings.

  A string chain is defined as follows: let string A be a string in
  the initial array; if removing any single character from string
  A yields a new string B that's contained in the
  initial array of strings, then strings A and B form
  a string chain of length 2. Similarly, if removing any single character from
  string B yields a new string C that's contained in
  the initial array of strings, then strings A, B, and
  C form a string chain of length 3.

  The function should return the string chain in descending order (i.e., from
  console.logor\n\ntest one). N);
  t exist; if the list of strings doesn't contain any string chain formed by
  or more strings, the function should return an empty array.

  Sample Input
    strings = ["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]

  Sample Output
    ["abcdef", "abcde", "abde", "ade", "ae"]
*/


function longestStringChain(strings) {
  // bucket str by length and create adjacencyGraph of chained strings
  const sortedStrings = strings.sort((a, b) => a.length - b.length);
  const longestStringLength = sortedStrings[sortedStrings.length - 1].length;
  const buckets = [...Array(longestStringLength + 1)].map(_ => []);
  const adjacencyGraph = {};

  for (let str of strings) buckets[str.length].push(str);

  for (let i = 1; i < buckets.length; i++) {
    const bucket = buckets[i];

    for (let str of bucket) {
      adjacencyGraph[str] = [];

      for (let j = 0; j < str.length; j++) {
        const suspectedStr = str.slice(0, j) + str.slice(j + 1);

        if (suspectedStr in adjacencyGraph) adjacencyGraph[suspectedStr].push(str);
      }
    }
  }

  // traverse sortedStrings and BFS adjacencyGraph to build up chain
  let longest = [];
  const chains = {};

  for (let str of sortedStrings) {
    const nextChainedStrings = adjacencyGraph[str] || [];
    
    for (let nextStr of nextChainedStrings) {
      chains[nextStr] = [str, ...chains[str] || []];
      if (chains[nextStr].length + 1 > longest.length) longest = [nextStr, ...chains[nextStr]];
      delete chains[str];
    }
  }

  return longest;
}

module.exports = longestStringChain;