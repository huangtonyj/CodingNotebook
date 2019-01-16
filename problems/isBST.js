// is a binary tree a binary search tree?

const NodeBT = require('../data_structures/NodeBT');

function isBST(node) {
  if (!node.left && !node.right) {
    return true
  } else if (node.left !== null && node.right !== null) {
    return (node.left.value < node.value) && (node.right.value > node.value) && isBST(node.left) && isBST(node.right)
  }
  
  // return false
}

const TreeA = new NodeBT(4);

const TreeB = new NodeBT(4);
  TreeB.left = new NodeBT(2);

const TreeC = new NodeBT(4);
  TreeC.right = new NodeBT(6);

const TreeD = new NodeBT(4);
  TreeD.left = new NodeBT(2);
  TreeD.right = new NodeBT(6);
  
const TreeE = new NodeBT(4);
  TreeE.left = new NodeBT(8);
  TreeE.right = new NodeBT(6);

const TreeF = new NodeBT(4);
  TreeD.left = new NodeBT(2);
    TreeD.left.right = new NodeBT(5);
  TreeD.right = new NodeBT(6);
  

console.log(isBST(TreeA), true);
console.log(isBST(TreeB), true);
console.log(isBST(TreeC), true);
console.log(isBST(TreeD), true);

console.log(isBST(TreeE), false);
console.log(isBST(TreeF), false);