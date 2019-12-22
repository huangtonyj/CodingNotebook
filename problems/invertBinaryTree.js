function invertBinaryTree (tree) {
  if (!tree) { return tree; }

  const left = tree.left;

  tree.left = invertBinaryTree(tree.right);
  tree.right = invertBinaryTree(left);

  return tree;
}

module.exports = invertBinaryTree;