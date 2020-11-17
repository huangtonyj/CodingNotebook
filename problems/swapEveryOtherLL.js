// Given the head of a singly linked list, swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4 -> 5, return 2 -> 1 -> 4 -> 3 -> 5.

const NodeLL = require('../dataStructures/NodeLL');

function swapEveryOtherLL(current) {
  if (!current || !current.next) {
    return current;
  }
  
  const next = current.next;
  const nextNext = current.next.next;

  next.next = current;
  current.next = swapEveryOtherLL(nextNext);

  return next;
}

const myLL = new NodeLL(1);
  myLL
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5)
    ;

let currentNode = swapEveryOtherLL(myLL);
const arr = [];
while (currentNode) {
  arr.push(currentNode.value);
  currentNode = currentNode.next;
}

console.log(arr, [2, 1, 4, 3, 5]);