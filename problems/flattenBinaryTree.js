
const NodeBT = require('../dataStructures/NodeBT');
/*
  Write a function that takes in a Binary Tree, flattens it, 
  and returns its leftmost node.

  A flattened Binary Tree is a structure that's nearly identical to a Doubly
  Linked List (except that nodes have left and
  right pointers instead of prev and
  next pointers), where nodes follow the original tree's
  left-to-right order.

  Note that if the input Binary Tree happens to be a valid Binary Search Tree,
  the nodes in the flattened tree will be sorted.

  The flattening should be done in place, meaning that the original data
  structure should be mutated (no new structure should be created).

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
    tree =     1
            /    \
           2      3
         /  \    /
        4   5   6
           / \
          7  8

  Sample Output
    4 <-> 2 <-> 7 <-> 5 <-> 8 <-> 1 <-> 6 <-> 3 // the leftmost node with value 4
*/

function flattenBinaryTree(root) {
  const [leftMost, rightMost] = _flattenBinaryTree(root);

  return leftMost;
}

function _flattenBinaryTree(root) {
  let leftMostNode = root;
  let rightMostNode = root;

  if (root.left) {
    const [leftLeftMost, leftRightMost] = _flattenBinaryTree(root.left);
    root.left = leftRightMost;
    leftRightMost.right = root;
    
    leftMostNode = leftLeftMost;
  }

  if (root.right) {
    const [rightLeftMost, rightRightMost] = _flattenBinaryTree(root.right);
    root.right = rightLeftMost;
    rightLeftMost.left = root;
    
    rightMostNode = rightRightMost;
  }

  return [leftMostNode, rightMostNode];
}

module.flattenBinaryTree = flattenBinaryTree;

// const myBT = new NodeBT(1);
//   myBT.left = new NodeBT(2);
//   myBT.left.left = new NodeBT(4);
//   myBT.left.right = new NodeBT(5);
//   myBT.left.right.left = new NodeBT(7);
//   myBT.left.right.right = new NodeBT(8);
//   myBT.right = new NodeBT(3);
//   myBT.right.left = new NodeBT(6);

// let myFlattenedBT = flattenBinaryTree(myBT);

// while (myFlattenedBT.right) {
//   console.log(myFlattenedBT.value);
//   myFlattenedBT = myFlattenedBT.right;
// }
// console.log(myFlattenedBT.value);

// while (myFlattenedBT.left) {
//   console.log(myFlattenedBT.value);
//   myFlattenedBT = myFlattenedBT.left;
// }
// console.log(myFlattenedBT.value);

// // 4 2 7 5 8 1 6 3 - 3 6 1 8 5 7 2 4