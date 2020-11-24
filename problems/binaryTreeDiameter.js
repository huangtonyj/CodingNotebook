/*
  Write a function that takes in a Binary Tree and returns its diameter. The
  diameter of a binary tree is defined as the length of its longest path, even
  if that path doesn't pass through the root of the tree.

  A path is a collection of connected nodes in a tree, where no node is
  connected to more than two other nodes. The length of a path is the number of
  edges between the path's first node and its last node.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
  tree =      1
            /   \
           3     2
         /   \ 
        7     4
       /       \
      8         5
     /           \
    9             6

  Sample Output 6: 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
  There are 6 edges between the
  first node and the last node
  of this tree's longest path.
*/

function binaryTreeDiameter(node, hasParent = false) {
  if (!node) return {
    longestPath: 0,
    largestDiameter: 0
  };

  const left = binaryTreeDiameter(node.left, true);
  const right = binaryTreeDiameter(node.right, true);

  const longestPath = 1 + Math.max(left.longestPath, right.longestPath);
  const largestDiameter = Math.max(left.longestPath + right.longestPath, 
    left.largestDiameter, 
    right.largestDiameter
  );

  if (hasParent) return {
    longestPath,
    largestDiameter
  };

  return largestDiameter;
}

const NodeBT = require('../dataStructures/NodeBT');

const myBT = new NodeBT(1);
  myBT.left = new NodeBT(3);
    myBT.left.left = new NodeBT(7);
    myBT.left.left.left = new NodeBT(8);
    myBT.left.left.left.left = new NodeBT(9);

    myBT.left.right = new NodeBT(4);
    myBT.left.right.right = new NodeBT(5);
    myBT.left.right.right.right = new NodeBT(6);
  
  myBT.right = new NodeBT(2);

console.log(
  binaryTreeDiameter(myBT) === 6
);