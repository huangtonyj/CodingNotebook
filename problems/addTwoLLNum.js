// Given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// Input: (2 - > 4 - > 3) + (5 - > 6 - > 4 -> 1)
// Output: 7 - > 0 - > 8 -> 1
// Explanation: 342 + 465 = 1807.

const nodeLL = require('../data_structures/NodeLL');

// Returns a number
function addTwoLLNum(LL1, LL2) {
  let ans = 0;
  let tensFactor = 1;

  let nodeLL1 = LL1;
  let nodeLL2 = LL2;

  while (nodeLL1 || nodeLL2) {
    const val1 = nodeLL1 ? nodeLL1.value : 0;
    const val2 = nodeLL2 ? nodeLL2.value : 0;

    ans += tensFactor * (val1 + val2);

    tensFactor *= 10;
    nodeLL1 = nodeLL1 ? nodeLL1.next : nodeLL1;
    nodeLL2 = nodeLL2 ? nodeLL2.next : nodeLL2;
  }

  return ans;
}

// Returns a linked list
function addTwoLLNumLL(LL1, LL2) {
  const dummyHead = new nodeLL(null);
  let currentNode = dummyHead;
  let carry = 0;
  let nodeLL1 = LL1;
  let nodeLL2 = LL2;

  while (nodeLL1 || nodeLL2) {
    const val1 = nodeLL1 ? nodeLL1.value : 0;
    const val2 = nodeLL2 ? nodeLL2.value : 0;
    const currentVal = val1 + val2 + carry;

    carry = Math.floor(currentVal / 10);
    currentNode.next = new nodeLL(currentVal % 10);

    currentNode = currentNode.next;
    nodeLL1 = nodeLL1 ? nodeLL1.next : nodeLL1;
    nodeLL2 = nodeLL2 ? nodeLL2.next : nodeLL2;
  }

  if (carry > 0) {
    currentNode.next = new nodeLL(carry);
  }

  return dummyHead.next;
}


const LL1 = new nodeLL(2);
  LL1.next = new nodeLL(4);
  LL1.next.next = new nodeLL(3);

const LL2 = new nodeLL(5);
  LL2.next = new nodeLL(6);
  LL2.next.next = new nodeLL(4);
  LL2.next.next.next = new nodeLL(1);

console.log(addTwoLLNum(LL1, LL2), 1807);

console.log(addTwoLLNumLL(LL1, LL2).value, 7);
console.log(addTwoLLNumLL(LL1, LL2).next.value, 0);
console.log(addTwoLLNumLL(LL1, LL2).next.next.value, 8);
console.log(addTwoLLNumLL(LL1, LL2).next.next.next.value, 1);