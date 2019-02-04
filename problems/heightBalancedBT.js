const NodeBT = require('../data_structures/NodeBT');

function heighBalancedBT(root) {

}

const BT1 = new NodeBT(2);
  BT1.left = new NodeBT(1);
  BT1.right = new NodeBT(3);

const BT2 = new NodeBT(2);
  BT2.left = new NodeBT(1);
  BT2.left.left = new NodeBT(0);


console.log(heighBalancedBT(BT1), true);
console.log(heighBalancedBT(BT2), false);