// Given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// Input: (2 - > 4 - > 3) + (5 - > 6 - > 4)
// Output: 7 - > 0 - > 8
// Explanation: 342 + 465 = 807.

const nodeLL = require('../data_structures/NodeLL');

function addTwoLLNum(LL1, LL2) {
  let ans = 0;
  let tensFactor = 1;

  let nodeLL1 = LL1;
  let nodeLL2 = LL2;

  while (nodeLL1) {

    ans += tensFactor * (nodeLL1.value + nodeLL2.value);

    tensFactor *= 10;
    nodeLL1 = nodeLL1.next;
    nodeLL2 = nodeLL2.next;
  }

  return ans;
}

const LL1 = new nodeLL(2);
  LL1.next = new nodeLL(4);
  LL1.next.next = new nodeLL(3);

const LL2 = new nodeLL(5);
  LL2.next = new nodeLL(6);
  LL2.next.next = new nodeLL(4);

console.log(addTwoLLNum(LL1, LL2), 807);