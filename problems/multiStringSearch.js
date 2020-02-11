const Trie = require('../dataStructures/Trie');

function multiStringSearch(bigString, smallStrings) {
  const trie  = new Trie();
  const bigArr = bigString.split(' ');

  bigArr.forEach((word) => {
    trie.insert(word);
  });

  return smallStrings.map((str) => trie.partiallyContain(str));
}

module.exports = multiStringSearch;