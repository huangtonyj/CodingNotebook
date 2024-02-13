// Write a program to merge two binary trees.
// Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

// If only one input tree has a node in a given position,
// the corresponding node in the new tree should match that input node.

const NodeBT = require("../dataStructures/NodeBT");

function mergeBinaryTree(node1, node2): NodeBT {
  if (!node1 && !node2) return null;
  if (!node1) return new NodeBT(node2.value);
  if (!node2) return new NodeBT(node1.value);

  return new NodeBT(
    node1.value + node2.value,
    mergeBinaryTree(node1.left, node2.left),
    mergeBinaryTree(node1.right, node2.right)
  );
}

//       1
//     /   \
//    2     3
//  /  \     \
// 4    5     6

const myBT1 = new NodeBT(1);
myBT1.left = new NodeBT(2);
myBT1.left.left = new NodeBT(4);
myBT1.left.right = new NodeBT(5);
myBT1.right = new NodeBT(3);
myBT1.right.right = new NodeBT(6);

//      -1
//     /   \
//   -2    -3
//  /  \     \
//-4   -5    -6

const myBT2 = new NodeBT(-1);
myBT2.left = new NodeBT(-2);
myBT2.left.left = new NodeBT(-4);
myBT2.left.right = new NodeBT(-5);
myBT2.right = new NodeBT(-3);
myBT2.right.right = new NodeBT(-6);

//       0
//     /   \
//    0     0
//  /  \     \
// 0    0     0

console.log(mergeBinaryTree(myBT1, myBT2));
