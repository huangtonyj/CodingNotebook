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

module.exports = Trie;

// const dictionary = ["the", "a", "there", "answer", "any", "by", "bye", "their"];

// const myTrie = new Trie();
//   dictionary.forEach((word) => myTrie.insert(word));
//   dictionary.forEach(word => console.log(myTrie.search(word), true));
//   console.log(myTrie.search('notAWord'), false);
//   console.log(myTrie.search('these'), false);
//   console.log(myTrie.search('thaw'), false);

// a:
//   isEndOfAWord: true
//   n:
//     s:
//       w:
//         e:
//           r:
//             isEndOfAWord: true
//     y:
//       isEndOfAWord: true
// b:
//   y:
//     e:
//       isEndOfAWord: true
//     isEndOfAWord: true
// t:
//   h:
//     e:
//       i:
//         r:
//           isEndOfAWord: true
//     isEndOfAWord: true
//       r:
//         e:
//           isEndOfAWord: true