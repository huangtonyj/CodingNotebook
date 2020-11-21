
/*
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of its nodes'
  depths.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

          1
        /   \
       2     3
     /  \   / \
    4    5 6   7
   / \
  8  9

  The depth of the node with value 2 is 1.
  The depth of the node with value 3 is 1.
  The depth of the node with value 4 is 2.
  The depth of the node with value 5 is 2.
  Etc..
  Summing all of these depths yields 16.
*/

function nodeDepth(node, currentDepth = 0) {
  if (!node) return 0;

  return currentDepth + 
    nodeDepth(node.left, currentDepth + 1) + 
    nodeDepth(node.right, currentDepth + 1);
}

module.exports = nodeDepth;

// const NodeBT = require('../dataStructures/NodeBT');

// const myBT = new NodeBT(1);
//   myBT.left = new NodeBT(2);
//     myBT.left.left = new NodeBT(4);
//     myBT.left.left.left = new NodeBT(8);
//     myBT.left.left.right = new NodeBT(9);
//     myBT.left.right = new NodeBT(5);
//   myBT.right = new NodeBT(3);
//     myBT.right.left = new NodeBT(6);
//     myBT.right.right = new NodeBT(7);

// console.log(
//   nodeDepth(myBT)
// );