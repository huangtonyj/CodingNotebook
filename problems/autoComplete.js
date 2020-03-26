const Trie = require ('../dataStructures/Trie');

function autoComplete(dictionary, prefix) {
  const result = [];

  // Generate Trie and navigate to prefix node
  const trie = new Trie(dictionary);
  let suffixNode = trie.root;
  
  for (const char of 'do') { suffixNode = suffixNode[char]; } 
  
  // bfs
  const queue = [{
    word: [prefix],
    node: suffixNode
  }];

  while (queue.length > 0) {
    const current = queue.shift();

    Object.entries(current.node).forEach(([char, node]) => {
      if (char === '*') {
        result.push(current.word.join(''));
      } else {
        const word = [...current.word, char];
        queue.push({word,node});
      }
    });
  }

  return result;
}

const dictionary = ['dog', 'dark', 'cat', 'door', 'dodge'];
console.log(autoComplete(dictionary, 'do'), ['dog', 'door', 'dodge']);