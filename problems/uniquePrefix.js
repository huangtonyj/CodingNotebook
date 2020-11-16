const Trie = require ('../dataStructures/Trie');

/*
Given a list of words, return the shortest unique prefix of each word. 
*/

function uniquePrefix(trie, prior = '', uniquePrefixes = null) {
  if (trie.root) {
    uniquePrefixes = new Set();
    return uniquePrefix(trie.root, '', uniquePrefixes);
  }

  Object.entries(trie).forEach(([key, value]) => {
    if (value.count === 1) {
        uniquePrefixes.add(prior + key);
    } else {
      uniquePrefix(value, prior + key, uniquePrefixes);
    }
  });

  return Array.from(uniquePrefixes);
}


// const words = [
//   'dogs',
//   'dove',
//   'duck',
//   'zebra'
// ];

// const myTrie = new Trie(words);

// console.log(
//   uniquePrefix(myTrie), [ 'dog', 'dov', 'du', 'z' ]
// );