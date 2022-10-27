
const NodeBT = require('../dataStructures/NodeBT');

const myBT = new NodeBT(5);
  myBT.left = new NodeBT(3);
    myBT.left.left = new NodeBT(2);
    myBT.left.right = new NodeBT(4);

    myBT.right = new NodeBT(8);
    myBT.right.left = new NodeBT(6);
    myBT.right.right = new NodeBT(10);

//     5
//    / \
//   3   8
//  / \ / \
// 2  4 6  10
// the range [4, 9], return 23 (5 + 4 + 6 + 8)

function bstRangeSum(node, [lowerRange, upperRange]) {
  const left = (node.left) ? bstRangeSum(node.left, [lowerRange, upperRange]) : 0;
  const right = (node.right) ? bstRangeSum(node.right, [lowerRange, upperRange]) : 0;
  const current = (node.value >= lowerRange && node.value <= upperRange) ? node.value : 0;

  return left + right + current;
}

console.log(
  bstRangeSum(myBT, [4,9]) === 23,
  bstRangeSum(myBT, [5,5]) === 5,
  bstRangeSum(myBT, [1,5]) === 14,
  bstRangeSum(myBT, [5,10]) === 29,
  bstRangeSum(myBT, [0, 11]) === 38,
);