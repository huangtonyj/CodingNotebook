const BTNode = require('../data_structures/BTnode');

function dfs_inorder (node) {
  if (node === null) { return [] }
  return dfs_inorder(node.left).concat(node.value, dfs_inorder(node.right))
}

const rootNode = new BTNode(4);
  rootNode.left = new BTNode(2);
  rootNode.left.left = new BTNode(1);
  rootNode.left.right = new BTNode(3);

  rootNode.right = new BTNode(6);
  rootNode.right.left = new BTNode(5);
  rootNode.right.right = new BTNode(7);

console.log(dfs_inorder(rootNode), [1, 2, 3, 4, 5, 6, 7]);