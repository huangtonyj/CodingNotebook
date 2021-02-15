/*
  Implement a PrefixMapSum class with the following methods:

  insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
  sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.
  For example, you should be able to run the following code:

  mapsum.insert("columnar", 3)
  assert mapsum.sum("col") == 3

  mapsum.insert("column", 2)
  assert mapsum.sum("col") == 5
*/

class PrefixMapSum {
  constructor() {
    this.trie = {};
  }

  insert(key, value) {
    let currentNode = this.trie;

    for (const char of key) {
      if (!(char in currentNode)) currentNode[char] = {};
      currentNode = currentNode[char];
    }

    currentNode.value = value;
  }

  sum(key) {
    const node = this._getNode(key);
    let queue = [node];
    let total = 0;

    // BFS
    while (queue.length) {
      const current = queue.shift();
      const childrenNodes = Object.values(current);

      total += current.value || 0;
      queue = queue.concat(childrenNodes);
    }

    return total;
  }

  _getNode(key) {
    let currentNode = this.trie;

    for (const char of key) currentNode = currentNode[char];

    return currentNode;
  }
}

const myPrefixMapSum = new PrefixMapSum();

myPrefixMapSum.insert('columnar', 3);
console.log(myPrefixMapSum.sum('col') === 3);

myPrefixMapSum.insert('column', 2);
console.log(myPrefixMapSum.sum('col') === 5);

myPrefixMapSum.insert('cod', 7);
console.log(myPrefixMapSum.sum('col') === 5);
console.log(myPrefixMapSum.sum('cod') === 7);
console.log(myPrefixMapSum.sum('c') === 12);
console.log(myPrefixMapSum.sum('co') === 12);