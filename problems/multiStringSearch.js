const Trie = require('../dataStructures/Trie');

function multiStringSearch(bigString, smallStrings) {
  const bigArr = bigString.split(' ');
  const trie  = new Trie(bigArr);

  return smallStrings.map((str) => trie.partiallyContain(str));
}

module.exports = multiStringSearch;