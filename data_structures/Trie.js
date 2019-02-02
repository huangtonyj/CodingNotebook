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

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      if (!currentNode[currentLetter]) return false;
      currentNode = currentNode[currentLetter]; 
    }

    return currentNode['isEndOfAWord'];
  }
}

const myTrie = new Trie();
  myTrie.insert('the');
  myTrie.insert('these');
  myTrie.insert('their');
  myTrie.insert('thaw');

  console.log(myTrie.search('the'), true);
  console.log(myTrie.search('these'), true);
  console.log(myTrie.search('their'), true);
  console.log(myTrie.search('thaw'), true);
  console.log(myTrie.search('theeeee'), false);

