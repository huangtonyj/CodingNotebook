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
  strings = strings.sort((a, b) => a.length - b.length);
  const longestStringLength = strings.reduce((acc, str) => Math.max(acc, str.length), 0);
  const buckets = [...Array(longestStringLength + 1)].map(_ => []);
  const wordSet = new Set(strings);
  // console.log(strings)

  for (let str of strings) buckets[str.length].push(str);
  const adjanceyGraph = {};

  for (let i = longestStringLength; i > 0; i--) {
    const bucket = buckets[i];
    for (let str of bucket) {
      // adjanceyGraph[str] = [];

      for (let j = 0; j < str.length; j++) {
        const suspect = str.slice(0, j) + str.slice(j + 1);
        // if (wordSet.has(suspect)) adjanceyGraph[str].push(suspect);
        if (wordSet.has(suspect)) {
          if (!(suspect in adjanceyGraph)) adjanceyGraph[suspect] = [];
          adjanceyGraph[suspect].push(str);
        }
      }
    }
  }

  // console.log(adjanceyGraph);

  const dp = {};
  let longest = [];

  for (let str of strings) {
    const nexts = adjanceyGraph[str] || [];

    for (let next of nexts) {
      dp[next] = [str, ...dp[str] || []];
      if (dp[next].length >= longest.length) longest = [next, ...dp[next]];
    }
  }

  return longest;

  /*
    traverse through, get longest string length
    bucket by length;

    create adjancey graph
    starting with longest word
      dfs, find longest path
      mark visited words
  */

}

module.exports = longestStringChain;