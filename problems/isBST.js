// is a binary tree a binary search tree?

const BTNode = require('../data_structures/BTnode');

function isBST(node) {
  if (!node.left && !node.right) {
    return true
  } else if (node.left !== null && node.right !== null) {
    return (node.left.value < node.value) && (node.right.value > node.value) && isBST(node.left) && isBST(node.right)
  }
  
  // return false
}

const TreeA = new BTNode(4);

const TreeB = new BTNode(4);
  TreeB.left = new BTNode(2);

const TreeC = new BTNode(4);
  TreeC.right = new BTNode(6);

const TreeD = new BTNode(4);
  TreeD.left = new BTNode(2);
  TreeD.right = new BTNode(6);
  
const TreeE = new BTNode(4);
  TreeE.left = new BTNode(8);
  TreeE.right = new BTNode(6);

const TreeF = new BTNode(4);
  TreeD.left = new BTNode(2);
    TreeD.left.right = new BTNode(5);
  TreeD.right = new BTNode(6);
  

console.log(isBST(TreeA), true);
console.log(isBST(TreeB), true);
console.log(isBST(TreeC), true);
console.log(isBST(TreeD), true);

console.log(isBST(TreeE), false);
console.log(isBST(TreeF), false);