const BTNode = require('../data_structures/BTnode');

function dfs_inOrder (node) {
  if (node === null) { return [] }
  return dfs_inOrder(node.left).concat(node.value, dfs_inOrder(node.right))
}

function dfs_reverserOrder (node) {
  if (node === null) { return [] }
  return dfs_reverserOrder(node.right).concat(node.value, dfs_reverserOrder(node.left))
}

function dfs_preOrder (node) {
  if (node === null) { return [] }
  return [node.value].concat(dfs_preOrder(node.left), dfs_preOrder(node.right))
}

function dfs_postOrder (node) {
  if (node === null) { return [] }
  return dfs_postOrder(node.left).concat(dfs_postOrder(node.right), node.value)
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
console.log('dfs_preOrder:', dfs_preOrder(rootNode), [4, 2, 1, 3, 6, 5, 7]);
console.log('dfs_postOrder:', dfs_postOrder(rootNode), [1, 3, 2, 5, 7, 6, 4]);