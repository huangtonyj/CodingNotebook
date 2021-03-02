// ***
/*
  Given the root of a binary tree, find the largest subtree, 
  which is also a Binary Search Tree (BST), 
  where the largest means subtree has the largest number of nodes.

  A Binary Search Tree (BST) is a tree in 
  which all the nodes follow the below-mentioned properties:

  The left subtree values are less than the value of their parent (root) node's value.
  The right subtree values are greater than the value of their parent (root) node's value.
  Note: A subtree must include all of its descendants.
*/

// O(n) time, O(h) space
function largestBSTSubtree(root) {
  return _largestBSTSubtree(root).largestSoFar;
}

function _largestBSTSubtree(node) {
  if (!node) {
    return {
      isValidBST: true,
      size: 0,
      minValue: Infinity,
      maxValue: -Infinity,
      largestSoFar: 0
    };
  }

  const left = _largestBSTSubtree(node.left);
  const right = _largestBSTSubtree(node.right);

  // console.table({
  //   nodeValue: node.value, left, right
  // });

  const isCurrentValidBST = node.value > left.maxValue && node.value < right.minValue;
  const isValidBST = left.isValidBST && right.isValidBST && isCurrentValidBST;
  const size = isValidBST ? left.size + right.size + 1 : null;
  const minValue = Math.min(left.minValue, node.value);
  const maxValue = Math.max(right.maxValue, node.value);
  const largestSoFar = Math.max(size, left.largestSoFar, right.largestSoFar);

  return {isValidBST, size, minValue, maxValue, largestSoFar};
}

// class BT {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;

//     return this;
//   }
// }

// function buildBT(arr) {
//   const nodes = Array(arr.length).fill(null);

//   for (let i = arr.length - 1; i >= 0; i--) {
//     const currentValue = arr[i];
//     const leftChild = nodes[i * 2 + 1] || null;
//     const rightChild = nodes[i * 2 + 2] || null;

//     if (currentValue) nodes[i] = new BT(currentValue, leftChild, rightChild);
//   }

//   return nodes[0];
// }

// /*
//        10
//      /    \
//     8      15
//    / \    / \
//   1  13  _   7
// */
// console.log(largestBSTSubtree(buildBT([10, 8, 15, 1, 13, null, 7])), 3);

// /*
//        10
//      /    \
//     8      15
//    / \    / \
//   9   3  2   7
// */
// console.log(largestBSTSubtree(buildBT([10, 8, 15, 9, 3, 2, 7])), 1);

// /*
//        10
//      /    \
//     7      15
//    / \    / \
//   1   9  11  _
// */
// console.log(largestBSTSubtree(buildBT([10, 7, 15, 1, 9, 11, null])), 6);