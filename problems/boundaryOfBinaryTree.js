/*
  Boundary of Binary Tree
  https://leetcode.com/problems/boundary-of-binary-tree/ 

  The boundary of a binary tree is the concatenation of the root, the left boundary, the leaves ordered from left-to-right, and the reverse order of the right boundary.

  The left boundary is the set of nodes defined by the following:

  The root node's left child is in the left boundary. 
  If the root does not have a left child, then the left boundary is empty.
  If a node in the left boundary and has a left child, then the left child is in the left boundary.
  If a node is in the left boundary, has no left child, but has a right child, then the right child is in the left boundary.
  The leftmost leaf is not in the left boundary.
  The right boundary is similar to the left boundary, except it is the right side of the root's right subtree. Again, the leaf is not part of the right boundary, and the right boundary is empty if the root does not have a right child.

  The leaves are nodes that do not have any children. For this problem, the root is not a leaf.

  Given the root of a binary tree, return the values of its boundary.
*/

function boundaryOfBinaryTree(root) {
  const leftBoundNodes = getLeftBoundNodes(root.left);
  const leftLeaveNodes = getLeaveNodes(root.left);
  const rightLeaveNodes = getLeaveNodes(root.right);
  const rightBoundNodes = getRightBoundNodes(root.right);

  return [
    root.val,
    ...leftBoundNodes,
    ...leftLeaveNodes,
    ...rightLeaveNodes,
    ...rightBoundNodes,
  ];
}

function getLeftBoundNodes(node, result = []) {
  if (!node) return result;
  if (!node.left && !node.right) return result;

  result.push(node.val);

  if (node.left) {
    return getLeftBoundNodes(node.left, result);
  } else if (node.right) {
    return getLeftBoundNodes(node.right, result);
  }

  return result;
}

function getLeaveNodes(node, result = []) {
  if (!node) return result;

  if (!node.left && !node.right) {
    result.push(node.val);
  } else {
    if (node.left) getLeaveNodes(node.left, result);
    if (node.right) getLeaveNodes(node.right, result);
  }

  return result;
}

function getRightBoundNodes(node, result = []) {
  if (!node) return result;
  if (!node.left && !node.right) return result;

  if (node.right) {
    getRightBoundNodes(node.right, result);
  } else if (node.left) {
    getRightBoundNodes(node.left, result);
  }

  result.push(node.val);

  return result;
}