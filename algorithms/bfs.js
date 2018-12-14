const NodeBT = require('../data_structures/NodeBT');

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

const rootNode = new NodeBT(4);
  rootNode.left = new NodeBT(2);
    rootNode.left.left = new NodeBT(1);
    rootNode.left.right = new NodeBT(3);
  rootNode.right = new NodeBT(6);
    rootNode.right.left = new NodeBT(5);
    rootNode.right.right = new NodeBT(7);
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

console.log(bfs(rootNode), [ 4, 2, 6, 1, 3, 5, 7]);

// Future improvements: use ring buffer instead of array for visitedQueue. Shifting is O(n).


