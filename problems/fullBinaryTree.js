
const NodeBT = require('../dataStructures/NodeBT');

const myBT = new NodeBT(0);
  myBT.left = new NodeBT(1);
    myBT.left.left = new NodeBT(3);
    myBT.left.left.right = new NodeBT(5);

    myBT.right = new NodeBT(2);
    myBT.right.right = new NodeBT(4);
    myBT.right.right.left = new NodeBT(6);
    myBT.right.right.right = new NodeBT(7);

//        0
//     /     \
//   1         2
//  /            \
// 3               4
// \             /   \
//   5          6     7


function fullBinaryTree(node) {
  if (!node) return node;
  
  node.left = fullBinaryTree(node.left);
  node.right = fullBinaryTree(node.right);

  if (!node.left && !node.right) return node;
  if (node.left && !node.right) return node.left;
  if (!node.left && node.right) return node.right;

  return node;
}

console.log(
  fullBinaryTree(myBT)
);

//     0
//  /     \
// 5       4
//       /   \
//      6     7