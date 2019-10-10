// is a binary tree a binary search tree?
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/thursday/partner-b.md

const NodeBT = require('../dataStructures/NodeBT');

function isBST(node, minVal = -Infinity, maxVal = Infinity) {
  if (!node) { return true; }

  return node.value > minVal 
    && node.value < maxVal 
    && isBST(node.left, minVal, node.value) 
    && isBST(node.right, node.value, maxVal);
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
  TreeE.left = new NodeBT(3);
    TreeE.right.left = new NodeBT(2);
  TreeE.right = new NodeBT(6);

const TreeF = new NodeBT(4);
  TreeF.left = new NodeBT(2);
    TreeF.left.right = new NodeBT(5);
  TreeF.right = new NodeBT(6);
  

console.log(isBST(TreeA), true);
console.log(isBST(TreeB), true);
console.log(isBST(TreeC), true);
console.log(isBST(TreeD), true);

console.log(isBST(TreeE), false);
console.log(isBST(TreeF), false);