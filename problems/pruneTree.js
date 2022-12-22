const NodeBT = require('../dataStructures/NodeBT');

/*
  Given a binary tree where all nodes are either 0 or 1, 
  prune the tree so that subtrees containing all 0s are removed.

  For example, given the following tree:

     0
    / \
   1   0
      / \
     1   0
    / \
   0   0
  should be pruned to:

    0
    / \
  1   0
     /
    1
*/

function pruneTree(root) {
  if (!root) return 0;
  const left = pruneTree(root.left);
  const right = pruneTree(root.right);

  if (left === 0) root.left = null;
  if (right === 0) root.right = null;

  return left + right + root.value;
}

const testTree = new NodeBT(0, 
  new NodeBT(1),
  new NodeBT(0, 
    new NodeBT(1, 
      new NodeBT(0), 
      new NodeBT(0)
    ), 
    new NodeBT(0))
);

pruneTree(testTree);

console.log(testTree);