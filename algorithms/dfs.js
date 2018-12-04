const BTNode = require('../data_structures/BTnode');

function dfs_inOrder (node) {
  if (node === null) { return [] }
  return dfs_inOrder(node.left).concat(node.value, dfs_inOrder(node.right))
}

function dfs_reverserOrder (node) {
  if (node === null) { return [] }
  return dfs_reverserOrder(node.right).concat(node.value, dfs_reverserOrder(node.left))
}

function dfs_reverserOrder (node) {
  if (node === null) { return [] }
  return dfs_reverserOrder(node.right).concat(node.value, dfs_reverserOrder(node.left))
}

const rootNode = new BTNode(4);
  rootNode.left = new BTNode(2);
  rootNode.left.left = new BTNode(1);
  rootNode.left.right = new BTNode(3);

  rootNode.right = new BTNode(6);
  rootNode.right.left = new BTNode(5);
  rootNode.right.right = new BTNode(7);

console.log('dfs_inOrder:', dfs_inOrder(rootNode), [1, 2, 3, 4, 5, 6, 7]);
console.log('dfs_reverserOrder:', dfs_reverserOrder(rootNode), [7, 6, 5, 4, 3, 2, 1]);