/*
  You're given the root node of a Binary Tree. Write a function that returns
  true if this Binary Tree is height balanced and
  false if it isn't.

  A Binary Tree is height balanced if for each node in the tree, the difference
  between the height of its left subtree and the height of its right subtree is
  at most 1.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
    tree = 1
         /   \
        2     3
      /  \      \
    4     5      6
        /   \
       7     8

  Sample Output
    true
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class subTreeInfo {
	constructor(isBalanced, height) {
		this.isBalanced = isBalanced;
		this.height = height;
	}
}

function heightBalancedBinaryTree(tree, root = true) {
	if (!tree) return new subTreeInfo(true, 0);

	const left = heightBalancedBinaryTree(tree.left, false);
	const right = heightBalancedBinaryTree(tree.right, false);

	if (root) {
		return left.isBalanced && right.isBalanced && (Math.abs(left.height - right.height) <= 1);
	} else {
		const isBalanced = left.isBalanced && right.isBalanced && (Math.abs(left.height - right.height) <= 1);
		const height = Math.max(left.height, right.height) + 1;

		return new subTreeInfo(isBalanced, height);
	}
}