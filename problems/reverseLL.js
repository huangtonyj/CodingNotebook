// Recursive reverse a linked list
const NodeLL = require('../data_structures/NodeLL');

function reverseLL(head) {
  return head;
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