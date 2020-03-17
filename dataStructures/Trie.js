class Trie {
  constructor(arr = []) {
    this.root = {};
    arr.forEach((word) => this.insert(word));
  }

  insert(word){
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      if (!currentNode[currentLetter]) currentNode[currentLetter] = {};
      currentNode = currentNode[currentLetter];
    }

    currentNode['*'] = true;
  }

  contains(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      if (!currentNode[currentLetter]) return false;
      currentNode = currentNode[currentLetter]; 
    }

    return currentNode['*'] || false;
  }

  partiallyContain(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];
      if (!currentNode[currentLetter]) return false;
      currentNode = currentNode[currentLetter]; 
    }

    return currentNode ? true : false;
  }
}

module.exports = Trie;