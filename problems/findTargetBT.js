const NodeBT = require('../data_structures/NodeBT');
const Queue = require('../data_structures/Queue');

function findTarget(root, target) {
  const visited = new Set();
  const toBeVisited = new Queue([root]);
  let currentNode;

  while (!toBeVisited.isEmpty()) {
    currentNode = toBeVisited.dequeue();
    if (currentNode.left) { toBeVisited.enqueue(currentNode.left); }
    if (currentNode.right) { toBeVisited.enqueue(currentNode.right); }

    if (visited.has(target - currentNode.value)) { return true; }
    visited.add(currentNode.value);
  }
  
  return false;
}

const rootA = new NodeBT(5);
  rootA.left = new NodeBT(3);
    rootA.left.left = new NodeBT(2);
    rootA.left.right = new NodeBT(4);
  rootA.right = new NodeBT(6);
    rootA.right.right = new NodeBT(7);

//    5
//   /\
//  3  6
// / \  \
// 2 4   7

console.log(findTarget(rootA, 6), true);
console.log(findTarget(rootA, 9), true);
console.log(findTarget(rootA, 10), true);
console.log(findTarget(rootA, 13), true);
console.log(findTarget(rootA, 14), false);
console.log(findTarget(rootA, 28), false);