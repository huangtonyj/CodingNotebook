// Given a binary tree, find a minimum path sum from root to a leaf.

// For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

//   10
//  /  \
// 5    5
//  \     \
//    2    1
//        /
//      -1

const NodeBT = require("../dataStructures/NodeBT");

function minRootLeafPathSum(node, runningSum: number = 0) {
  if (!node) return 0;

  return (
    runningSum +
    node.value +
    Math.min(minRootLeafPathSum(node.left), minRootLeafPathSum(node.right))
  );
}

const myBT = new NodeBT(10);
myBT.left = new NodeBT(5);
myBT.left.right = new NodeBT(2);

myBT.right = new NodeBT(5);
myBT.right.right = new NodeBT(1);
myBT.right.right.left = new NodeBT(-1);

console.log(minRootLeafPathSum(myBT));
