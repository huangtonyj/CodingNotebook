const NodeBT = require('../data_structures/NodeBT');

function treeLevelTraversal(node) {
  if (!node) { return [] }
  return [node.value].concat(treeLevelTraversal(node.left), treeLevelTraversal(node.right));
}

const BTree = new NodeBT(1);
  BTree.right = new NodeBT(2);
    BTree.right.right = new NodeBT(5);  
      BTree.right.right.left = new NodeBT(3);  
        BTree.right.right.left.right = new NodeBT(4);  
      BTree.right.right.right = new NodeBT(6);

console.log(treeLevelTraversal(BTree));