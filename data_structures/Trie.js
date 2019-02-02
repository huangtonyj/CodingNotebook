class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word){
    word = word.split("");

    let currentNode = this.root;

    while (word.length > 0) {
      const currentLetter = word.shift();

      if (!currentNode[currentLetter]) currentNode[currentLetter] = {};
      currentNode = currentNode[currentLetter];
    }

    currentNode['isEndOfAWord'] = true;
  }

  search(word){

  }
}

const myTrie = new Trie();
  myTrie.insert('the');
  myTrie.insert('these');
  // myTrie.insert('their');
  // myTrie.insert('thaw');

