const Trie = require('../dataStructures/Trie');

function sentenceReconstruction(str, dict) {
  const trie = new Trie(dict);
  const result = [];

  let currentTrieNode = trie.root;
  let current = [];

  str.split('').forEach((char) => {
    if (currentTrieNode[char]) {
      current.push(char);
      currentTrieNode = currentTrieNode[char];
    } else {
      result.push(current.join(''));
      current = [char];
      currentTrieNode = trie.root[char];
    }
  });

  result.push(current.join(''));
  return result;
}

const str1 = 'thequickbrownfox';
const dict1 = ['quick', 'brown', 'the', 'fox'];
console.log(sentenceReconstruction(str1, dict1), ['the', 'quick', 'brown', 'fox']);

const str2 = 'bedbathandbeyond';
const dict2 = ['bed', 'bath', 'bedbath', 'and', 'beyond'];
console.log(sentenceReconstruction(str2, dict2), ['bedbath', 'and', 'beyond']);