class BT {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;

    return this;
  }
}

function buildBT(arr) {
  const nodes = Array(arr.length).fill(null);

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];
    const leftChild = nodes[i * 2 + 1] || null;
    const rightChild = nodes[i * 2 + 2] || null;

    if (currentValue) nodes[i] = new BT(currentValue, leftChild, rightChild);
  }

  return nodes[0];
}

module.exports = buildBT;

// /*
//        10
//      /    \
//     8      15
//    / \    / \
//   1  13  _   7
// */
// console.log(buildBT([10, 8, 15, 1, 13, null, 7]));

// /*
//        10
//      /    \
//     8      15
//    / \    / \
//   9   3  2   7
// */
// console.log(buildBT([10, 8, 15, 9, 3, 2, 7]));

// /*
//        10
//      /    \
//     7      15
//    / \    / \
//   1   9  11  _
// */
// console.log(buildBT([10, 7, 15, 1, 9, 11, null]));