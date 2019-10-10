// Recursive reverse a linked list
const NodeLL = require('../dataStructures/NodeLL');

function reverseLL(node, reversedLL = null) {
  if (node === null) { return reversedLL; }

  const nextNode = node.next;
  node.next = reversedLL;

  return reverseLL(nextNode, node);
}

const myLL = new NodeLL(1);
  myLL.next = new NodeLL(2);
  myLL.next.next = new NodeLL(3);
  myLL.next.next.next = new NodeLL(4);
  myLL.next.next.next.next = new NodeLL(5);

let i = 5;
let currentNode = reverseLL(myLL);
while (currentNode) {
  console.log(currentNode.value, i);
  currentNode = currentNode.next;
  i--;
}