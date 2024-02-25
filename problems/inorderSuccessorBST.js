/*
    https://leetcode.com/problems/inorder-successor-in-bst/description/

    Given the root of a binary search tree and a node p in it,
    return the in-order successor of that node in the BST. 
    If the given node has no in-order successor in the tree, return null.

    The successor of a node p is the node with the smallest key greater than p.val.


*/
function inorderSuccessor(root, p, prev = null) {
  if (p.val < root.val) {
    return inorderSuccessor(root.left, p, root);
  } else if (p.val > root.val) {
    return inorderSuccessor(root.right, p, prev);
  } else if (p === root) {
    return smallestBSTNode(root.right) || prev;
  }
}

function smallestBSTNode(node) {
  if (!node?.left) return node;

  return smallestBSTNode(node.left);
}
