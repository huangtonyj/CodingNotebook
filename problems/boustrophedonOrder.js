// In Ancient Greece, it was common to write text with the first line going left to right, 
// the second line going right to left, and continuing to go back and forth. 
// This style was called "boustrophedon".

// Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

// Input:
//        1
//     /     \
//   2         3
//  / \       / \
// 4   5     6   7

// Output: [1, 3, 2, 4, 5, 6, 7]

const BinaryTree = require('../data_structures/BinaryTree');

function boustrophedonOrder(root) {

}

const myBT = new BinaryTree(1);
  for (let i = 2; i < 8; i++) { myBT.insert(i) }

console.log(boustrophedonOrder(myBT));
