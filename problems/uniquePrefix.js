const Trie = require ('../dataStructures/Trie');

/*
Given a list of words, return the shortest unique prefix of each word. 
*/

function uniquePrefix(trie, prior = '') {
  if (trie.root) {
    return uniquePrefix(trie.root, '');
  }
  
  let ans = new Set();

  Object.entries(trie).forEach(([key, value]) => {
    if (value.count === 1) {
        ans.add(prior + key);
    } else {
      const next = uniquePrefix(value, prior + key);
      next.forEach(el => {
        ans.add(el);
      });
    }
  });

  return Array.from(ans);
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