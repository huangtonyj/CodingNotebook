const Trie = require ('../dataStructures/Trie');

/*
Given a list of words, return the shortest unique prefix of each word. 
*/

function uniquePrefix(words, prior = '', uniquePrefixes = null) {
  if (Array.isArray(words)) {
    uniquePrefixes = new Set();
    const trie = new Trie(words).root;
    return uniquePrefix(trie, '', uniquePrefixes);
  }

  Object.entries(words).forEach(([key, value]) => {
    if (value.count === 1) {
        uniquePrefixes.add(prior + key);
    } else {
      uniquePrefix(value, prior + key, uniquePrefixes);
    }
  });

  return Array.from(uniquePrefixes);
}

console.log(
  uniquePrefix([
    'dogs',
    'dove',
    'duck',
    'zebra'
  ]), ['dog', 'dov', 'du', 'z'],

  uniquePrefix([
    'dog',
    'cat',
    'apple',
    'apricot',
    'fish',
  ]), ['d', 'c', 'app', 'apr', 'f']
);