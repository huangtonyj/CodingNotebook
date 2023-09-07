const NodeBT = require('../dataStructures/NodeBT');

// Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

// For example, given the sequence [2, 4, 3, 8, 7, 5], you should construct the following tree:

//     5
//    / \
//   3   7
//  / \   \
// 2   4   8

function reconstructBST(sequence) {
  const root = new NodeBT(sequence.pop())

  const addToSubtree = (value, node) => {
    if (value >= node.value) {
      if (node.right == null) {
        node.right = new NodeBT(value);
      } else {
        addToSubtree(value, node.right);
      }
    } else {
      if (node.left == null) {
        node.left = new NodeBT(value);
      } else {
        addToSubtree(value, node.left);
      }
    }
  };

  while (sequence.length > 0) {
    const value = sequence.pop();

    addToSubtree(value, root);
  }

  return root;
}

reconstructBST([2, 4, 3, 8, 7, 5]);
