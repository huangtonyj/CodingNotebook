const NodeLL = require("../dataStructures/nodeLL");

// Note: use dummy head in case n = length of list

function removeNthFromEnd(head, n) {
  const dummy = new NodeLL(null);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

// Test case
// const myLL = new NodeLL(10);

// let currentNode = myLL;
// for (let i = 9; i > 0; i--) {
//   currentNode.next = new NodeLL(i);
//   currentNode = currentNode.next;
// }

// currentNode = removeNthFromEnd(myLL, 3);
// let i = 10;
// while (currentNode) {
//   if (i !== 3) {
//     console.log(currentNode.value === i, currentNode.value, i);
//     currentNode = currentNode.next;
//   } else {
//     console.log(currentNode.value !== 3, currentNode.value, "2 not 3"); // deleted 3
//   }
//   i--;
// }
