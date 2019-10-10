const NodeBT = require('../dataStructures/NodeBT');

function removeNonFullBT(node) {
  if (!node) { return; }

  while (node.left && isNotFullNode(node.left)) {
    node.left = node.left.left || node.left.right;
  }

  while (node.right && isNotFullNode(node.right)) {
    node.right = node.right.left || node.right.right;
  }

  if (node.left) removeNonFullBT(node.left);
  if (node.right) removeNonFullBT(node.right);

  return node;
}

const isNotFullNode = (node) => {
  const left = node.left ? 1 : 0;
  const right = node.right ? 1 : 0;

  return (left + right) === 1;
};

// Given: 
//          0
//       /     \
//     1         2
//   /            \
// 3                 4
//   \             /   \
//     5          6     7
// Output:
//      0
//   /     \
// 5         4
//         /   \
//        6     7

const myBT = new NodeBT(0);
  myBT.left = new NodeBT(1);
  myBT.left.left = new NodeBT(3);
  myBT.left.left.right = new NodeBT(5);
  myBT.right = new NodeBT(2);
  myBT.right.right = new NodeBT(4);
  myBT.right.right.left = new NodeBT(6);
  myBT.right.right.right = new NodeBT(7);

console.log(removeNonFullBT(myBT));
// console.log(isNotFullNode(myBT), true);
// console.log(isNotFullNode(myBT.left), false);
// console.log(isNotFullNode(myBT.right), false);
// console.log(isNotFullNode(myBT.right.right), true);
// console.log(isNotFullNode(myBT.right.right.left), true);
// console.log(isNotFullNode(myBT.right.right.right), true);