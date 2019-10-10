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

const BinaryTree = require('../dataStructures/BinaryTree');

function boustrophedonOrder(root) {
  const result = [];

  const leftStack = [root];
  const rightStack = [];

  while (leftStack.length || rightStack.length) {
    while (leftStack.length){
      const currentNode = leftStack.pop();
      result.push(currentNode.value);
      if (currentNode.left) rightStack.push(currentNode.left);
      if (currentNode.right) rightStack.push(currentNode.right);
    }
    
    while (rightStack.length) {
      const currentNode = rightStack.pop();
      result.push(currentNode.value);
      if (currentNode.right) leftStack.push(currentNode.right);
      if (currentNode.left) leftStack.push(currentNode.left);
    }
  }
  return result;
}

const myBT = new BinaryTree(1);
  for (let i = 2; i < 16; i++) { myBT.insert(i); }

console.log(boustrophedonOrder(myBT), [1, 3, 2, 4, 5, 6, 7, 15, 14, 13, 12, 11, 10, 9, 8]);
