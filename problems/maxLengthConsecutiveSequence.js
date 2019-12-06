const NodeLLDouble = require('../dataStructures/NodeLLDouble');

// Given a list of integers L, 
// find the maximum length of a sequence of consecutive numbers 
// that can be formed using elements from L.

// For example, given L = [5, 2, 99, 3, 4, 1, 100],
// return 5 as we can build a sequence[1, 2, 3, 4, 5] which has length 5.

function maxLengthConsecutiveSequence(arr) {

  let maxLength = 0;
  const hash = {};
  
  arr.forEach((el) => {
    const prevNode = hash[el -1];
    const currentNode = new NodeLLDouble(el);
    const nextNode = hash[el + 1];

    hash[el] = currentNode;

    if (prevNode) {
      prevNode.next = currentNode;
      currentNode.prev = prevNode;
    }

    if (nextNode) {
      nextNode.prev = currentNode;
      currentNode.next = nextNode;
    }
  });

  arr.forEach((el) => {
    if (!hash[el]) { return; } // Already visited when traversing from another node in the LL.

    let currentLength = 1;
    let prevNode = hash[el - 1];
    let nextNode = hash[el + 1];

    while (prevNode || nextNode) {
      if (prevNode) {
        currentLength++;
        delete hash[prevNode.value];
        prevNode = prevNode.prev;
      }

      if (nextNode) {
        currentLength++;
        delete hash[nextNode.value];
        nextNode = nextNode.next;
      }
    }

    maxLength = Math.max(maxLength, currentLength);
  });

  return maxLength;
}

// O(n) time, O(n) space

module.exports = maxLengthConsecutiveSequence;