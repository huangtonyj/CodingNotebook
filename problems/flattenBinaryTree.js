
/*
  Write a function that takes in a Binary Tree, flattens it, 
  and returns its leftmost node.

  A flattened Binary Tree is a structure that's nearly identical to a Doubly
  Linked List (except that nodes have left and
  right pointers instead of prev and
  next pointers), where nodes follow the original tree's
  left-to-right order.

  Note that if the input Binary Tree happens to be a valid Binary Search Tree,
  the nodes in the flattened tree will be sorted.

  The flattening should be done in place, meaning that the original data
  structure should be mutated (no new structure should be created).

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
    tree =     1
            /    \
           2      3
         /  \    /
        4   5   6
           / \
          7  8

  Sample Output
    4 <-> 2 <-> 7 <-> 5 <-> 8 <-> 1 <-> 6 <-> 3 // the leftmost node with value 4
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  _flattenBinaryTree(root);

  let currentLeft = root;
  let currentRight = root;

  while (currentLeft !== root) {
    currentLeft = currentLeft.left;
  }
  while (currentRight !== root) {
    currentRight = currentRight.right;
  }

  currentLeft.left = null;
  currentRight.right = null;

  return currentLeft;
}

function _flattenBinaryTree(root, leftMost = null, rightMost = null) {
  if (!root.left && !root.right) {
    root.right = rightMost;
    root.left = leftMost;

    return {
      left: root,
      right: root
    };
  }

  const left = root.left ? _flattenBinaryTree(root.left, leftMost || root, root || rightMost): null;
  const right = root.right ? _flattenBinaryTree(root.right, root || leftMost, rightMost || root) : null;

  if (root.left && root.right) {
    root.left = left.right;
    root.right = right.left;

    return {
      left: left.left || root.left,
      right: right.right || root.right
    };
  }
  
  if (root.left) {
    root.left = left.right;
    root.right = rightMost;

    return {
      left: root.left,
      right: root
    };
  }

  if (root.right) {
    root.right = right.left;
    root.left = leftMost;

    return {
      left: root,
      right: root.right
    };
  }
}

module.flattenBinaryTree = flattenBinaryTree;

const myBT = new BinaryTree(1);
  myBT.left = new BinaryTree(2);
  myBT.left.left = new BinaryTree(4);
  // myBT.left.right = new BinaryTree(5);
  // myBT.left.right.left = new BinaryTree(7);
  // myBT.left.right.right = new BinaryTree(8);
  // myBT.right = new BinaryTree(3);
  // myBT.right.left = new BinaryTree(6);

// console.log(
  flattenBinaryTree(myBT)
// );

console.log(myBT.left);

// const ans = myBT.left.left.left.left.left;

// console.log(ans)
// console.log(ans.right);
// console.log(ans.right.right);
// console.log(ans.right.right.right);
// console.log(ans.right.right.right.right);
// console.log(ans.right.right.right.right.right);
// console.log(ans.right.right.right.right.right.right);
// console.log(ans.right.right.right.right.right.right.right);