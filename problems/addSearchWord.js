/*
Design a data structure that supports adding new words and 
finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
  void addWord(word) Adds word to the data structure, it can be matched later.
  bool search(word) Returns true if there is any string in the data structure that matches word or 
    false otherwise. word may contain dots '.' where dots can be matched with any letter.
 
Example:
  Input
  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]

  Output
  [null,null,null,null,false,true,true,true]

Explanation
  WordDictionary wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  wordDictionary.search("pad"); // return False
  wordDictionary.search("bad"); // return True
  wordDictionary.search(".ad"); // return True
  wordDictionary.search("b.."); // return True
*/

class WordDictionary {
  constructor() {
    this.trie = {};
  }

  addWord(word) {
    let currentNode = this.trie;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode[char]) currentNode[char] = {};
      currentNode = currentNode[char];
    }

    currentNode.isWord = true;
  }

  search(word) {
    return this._dfs(this.trie, word);
  }

  _dfs(node, word, i = 0) {
    if (!node) return false;
    if (i === word.length && node.isWord) return true;

    const char = word[i];

    if (char === ".") {
      for (const [key, val] of Object.entries(node)) {
        const result = this._dfs(node[key], word, i + 1);
        if (result) return true;
      }
    } else {
      return this._dfs(node[char], word, i + 1);
    }

    return false;
  }
}

// const wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// console.log(wordDictionary.search("pad")); // return False
// console.log(wordDictionary.search("bad")); // return True
// console.log(wordDictionary.search(".ad")); // return True
// console.log(wordDictionary.search("b..")); // return True