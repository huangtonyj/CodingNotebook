// Given a linked list of numbers and a pivot k, 
// partition the linked list so that all nodes less than k come before nodes greater than or equal to k.
// For example, given the linked list 5 - > 1 - > 8 - > 0 - > 3 and k = 3, 
// the solution could be 1 - > 0 - > 5 - > 8 - > 3.

const NodeLL = require('../data_structures/NodeLL');

function partitionLinkList(node, k) {
  let smallLL, smallTail, largeLL, largeTail;
  let currentNode = node;

  while (currentNode !== null) {
    if (currentNode.value < k) {
      if (!smallLL) { 
        smallLL = currentNode; 
        smallTail = currentNode;
      } else {
        smallTail.next = currentNode;
        smallTail = smallTail.next;
      }
    } else {
      if (!largeLL) {
        largeLL = currentNode;
        largeTail = currentNode;
      } else {
        largeTail.next = currentNode;
        largeTail = largeTail.next;
      }
    }
    currentNode = currentNode.next;
  }

  smallTail.next = largeLL;
  return smallLL;
}

const a = new NodeLL(5);
const b = new NodeLL(1);
const c = new NodeLL(8);
const d = new NodeLL(0);
const e = new NodeLL(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const partionedLL = partitionLinkList(a, 3);

console.log(partionedLL.value, 1);
console.log(partionedLL.next.value, 0);
console.log(partionedLL.next.next.value, 5);
console.log(partionedLL.next.next.next.value, 8);
console.log(partionedLL.next.next.next.next.value, 3);
