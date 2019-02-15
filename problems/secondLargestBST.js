const NodeBT = require('../data_structures/NodeBT');

function secondLargestBST(node, parent = null) {
  if (!node.right && !node.left) { return parent; }
  
  if (!node.right) { return largestBST(node.left); }

  return secondLargestBST(node.right, node);
}

const largestBST = (node) => {
  let currentNode = node;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode;
};

//          4
//        /  \
//      2     8
//    /  \   /
//   1   3  5 
//         / \
//        6  7

const myBST = new NodeBT(4);
  myBST.left = new NodeBT(2);
  myBST.left.left = new NodeBT(1);
  myBST.left.right = new NodeBT(3);
  myBST.right = new NodeBT(8);
  myBST.right.left = new NodeBT(5);
  myBST.right.left.left = new NodeBT(6);
  myBST.right.left.right = new NodeBT(7);

console.log(secondLargestBST(myBST).value, 7);
console.log(secondLargestBST(myBST.left).value, 2);