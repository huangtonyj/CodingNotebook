const NodeBT = require ('../dataStructures/NodeBT');

function heightBT (node) {
  if (!node) { return 0; }
  if (!node.left && !node.right) { return 1; }

  return 1 + Math.max(heightBT(node.left), heightBT(node.right));
}

module.exports = heightBT;

// const BTree1 = new NodeBT(4);
//   BTree1.left = new NodeBT(2);
//     BTree1.left.left = new NodeBT(1);
//     BTree1.left.right = new NodeBT(3);
//   BTree1.right = new NodeBT(6);
//     BTree1.right.left = new NodeBT(5);
//     BTree1.right.right = new NodeBT(7);

// const BTree2 = new NodeBT(3);
//   BTree2.left = new NodeBT(2);
//     BTree2.left.left = new NodeBT(1);
//   BTree2.right = new NodeBT(5);
//     BTree2.right.left = new NodeBT(4);
//     BTree2.right.right = new NodeBT(6);
//     BTree2.right.right.right = new NodeBT(7);

// console.log(heightBT(BTree1.left.left));
// console.log(heightBT(BTree1), 2);
// console.log(heightBT(BTree2), 3);