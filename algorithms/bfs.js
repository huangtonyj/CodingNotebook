const Queue = require ('../dataStructures/Queue');
const NodeBT = require('../dataStructures/NodeBT');

function bfs(node) {
  const visitedQueue = new Queue([node]);
  const result = [];

  while (visitedQueue.length > 0) {
    const currentNode = visitedQueue.dequeue();
    result.push(currentNode.value);

    if (currentNode.left) { visitedQueue.enqueue(currentNode.left); }
    if (currentNode.right) { visitedQueue.enqueue(currentNode.right); }
  }
  
  return result;
}

module.exports = bfs;

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


