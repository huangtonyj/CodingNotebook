const BTNode = require('../data_structures/BTnode');

function bfs(node) {
  const visitedQueue = [node];
  const result = [];

  while (visitedQueue.length > 0) {

    currentNode = visitedQueue.shift();
    result.push(currentNode.value)

    if (currentNode.left) { visitedQueue.push(currentNode.left) }
    if (currentNode.right) { visitedQueue.push(currentNode.right) }

  }
  
  return result;
}

const rootNode = new BTNode(4);
  rootNode.left = new BTNode(2);
    rootNode.left.left = new BTNode(1);
    rootNode.left.right = new BTNode(3);
  rootNode.right = new BTNode(6);
    rootNode.right.left = new BTNode(5);
    rootNode.right.right = new BTNode(7);
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

console.log(bfs(rootNode), [ 4, 2, 6, 1, 3, 5, 7]);

// Future improvements: use ring buffer instead of array for visitedQueue. Shifting is O(n).


