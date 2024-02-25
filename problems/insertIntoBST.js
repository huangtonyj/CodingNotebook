/*
    https://leetcode.com/problems/insert-into-a-binary-search-tree/
*/

function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
