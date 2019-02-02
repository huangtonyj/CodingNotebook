class Trie {
  constructor() {
    this.root = {};
  }

  insert(word){
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
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
  myTrie.insert('their');
  myTrie.insert('thaw');

