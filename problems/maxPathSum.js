/* 
  Write a function that takes in a Binary Tree and returns its max path sum.
  A path is a collection of connected nodes where no node is connected to more than two other nodes;
  a path sum is the sum of the values of the nodes in a particular path.

      1
     /\
    2  3
   /\  /\
  4 5 6 7

  4 + 2 + 1 + 4 + 7 = 18
*/

function maxPathSum(tree, isRoot = true) {
  if (!tree) return [-Infinity, 0];

  const [leftClose, leftOpen] = maxPathSum(tree.left, false);
  const [rightClose, rightOpen] = maxPathSum(tree.right, false);

  const currentClose = leftOpen + tree.value + rightOpen;
  
  const maxOpen = tree.value + Math.max(leftOpen, rightOpen);
  const maxClose = Math.max(leftClose, currentClose, rightClose, maxOpen);

  return isRoot ? maxClose : [maxClose, maxOpen];
}

module.exports = maxPathSum;

/*
  Notes:
  An open path means it can connect with the parent and the parent's left/right.
  A close path means it has formed a upside down V and cannot connect further.
*/