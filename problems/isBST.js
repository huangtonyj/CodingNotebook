// is a binary tree a binary search tree?

const BTNode = require('../data_structures/BTnode');

function isBST(node) {

}

const TreeA = new BTNode(5);

const TreeB = new BTNode(5);
  TreeB.left = new BTNode(3);

const TreeC = new BTNode(5);
  TreeC.right = new BTNode(7);

const TreeD = new BTNode(5);
  TreeD.left = new BTNode(3);
  TreeD.right = new BTNode(7);
  
  const TreeE = new BTNode(5);
  TreeE.left = new BTNode(6);
  TreeE.right = new BTNode(7);
  
  const TreeF = new BTNode(5);
    TreeD.left = new BTNode(3);
      TreeD.left.right = new BTNode(6);
    TreeD.right = new BTNode(7);
  

console.log(isBST(TreeA), true);
console.log(isBST(TreeB), true);
console.log(isBST(TreeC), true);
console.log(isBST(TreeD), true);

console.log(isBST(TreeE), false);
console.log(isBST(TreeF), false);