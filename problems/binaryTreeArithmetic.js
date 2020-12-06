/*
  Suppose an arithmetic expression is given as a binary tree. 
  Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

  Given the root to such a tree, write a function to evaluate it.

  For example, given the following tree:

       *
     / \
    +    +
  / \  / \
  3  2  4  5
  You should return 45, as it is (3 + 2) * (4 + 5).
*/

function binaryTreeArithemtic(root) {
  if (typeof(root.value) === 'number') return root.value;

  return eval(binaryTreeArithemtic(root.left) + root.value + binaryTreeArithemtic(root.right));
}

const NodeBT = require('../dataStructures/NodeBT');

const myBT = new NodeBT('*');
  myBT.left = new NodeBT('+');
    myBT.left.left = new NodeBT(3);
    myBT.left.right = new NodeBT(2);
    
  myBT.right = new NodeBT('+');
    myBT.right.left = new NodeBT(4);
    myBT.right.right = new NodeBT(5);

console.log(
  binaryTreeArithemtic(myBT) === 45
);