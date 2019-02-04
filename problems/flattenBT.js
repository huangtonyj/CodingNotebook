// Given a binary tree, flatten it to a linked list.
const NodeBT = require('../data_structures/NodeBT');
const NodeLL = require('../data_structures/NodeLL');

function flattenBT(node) {
  if (!node) {return ''; }

  const LLNode = new NodeLL(node.value);
  const left = flattenBT(node.left);
  const right = flattenBT(node.right);

  let currentLeft = left;

  while(currentLeft.next) {
    currentLeft = currentLeft.next;
  }

  currentLeft.next = right;
  LLNode.next = left;

  return LLNode;
}

//       1
//     /   \
//    2     5
//  /  \     \
// 3    4     6
const myBT = new NodeBT(1);
  myBT.left = new NodeBT(2);
    myBT.left.left = new NodeBT(3);
    myBT.left.right = new NodeBT(4);
  myBT.right = new NodeBT(5);
    myBT.right.right = new NodeBT(6);

let currentNode = flattenBT(myBT);

while(currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next; 
}