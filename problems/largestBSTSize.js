// O(n) time, O(h) space
function largestBSTSize(root) {
  return _largestBSTSize(root).largestSoFar;
}

function _largestBSTSize(node) {
  if (!node) {
    return {
      isValidBST: true,
      size: 0,
      minValue: Infinity,
      maxValue: -Infinity,
      largestSoFar: 0
    };
  }

  const left = _largestBSTSize(node.left);
  const right = _largestBSTSize(node.right);

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
// console.log(largestBSTSize(buildBT([10, 8, 15, 1, 13, null, 7])), 3);

// /*
//        10
//      /    \
//     8      15
//    / \    / \
//   9   3  2   7
// */
// console.log(largestBSTSize(buildBT([10, 8, 15, 9, 3, 2, 7])), 1);

// /*
//        10
//      /    \
//     7      15
//    / \    / \
//   1   9  11  _
// */
// console.log(largestBSTSize(buildBT([10, 7, 15, 1, 9, 11, null])), 6);