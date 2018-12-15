const NodeBT = require('../data_structures/NodeBT');
const Queue = require('../data_structures/Queue')

function treeLevelTraversal(node) {
  const queue = new Queue([node])
  let resultArr = [];
  let currentNode;

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();

    if (currentNode.left) { queue.enqueue(currentNode.left) }
    if (currentNode.right) { queue.enqueue(currentNode.right) }

    resultArr.push(currentNode.value)
  }
  return resultArr;
}

const BTree = new NodeBT(1);
  BTree.right = new NodeBT(2);
    BTree.right.right = new NodeBT(5);  
      BTree.right.right.left = new NodeBT(3);  
        BTree.right.right.left.right = new NodeBT(4);  
      BTree.right.right.right = new NodeBT(6);

console.log(treeLevelTraversal(BTree), [1,2,5,3,6,4]);