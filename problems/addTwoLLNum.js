// Given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// Input: (2 - > 4 - > 3) + (5 - > 6 - > 4 -> 1)
// Output: 7 - > 0 - > 8 -> 1
// Explanation: 342 + 465 = 1807.

const nodeLL = require("../dataStructures/NodeLL");

const {
  arrayToLinkedList,
  linkedListToArr,
} = require("../algorithms/linkedListUtils");

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
function addTwoLLNumLL(node1, node2) {
  let dummyHead = new nodeLL(null);
  let currentNode = dummyHead;
  let currentNode1 = node1;
  let currentNode2 = node2;
  let carry = 0;

  while (currentNode1 || currentNode2) {
    const valueOne = (currentNode1 && currentNode1.value) || 0;
    const valueTwo = (currentNode2 && currentNode2.value) || 0;
    const sum = valueOne + valueTwo + carry;
    carry = sum > 9 ? 1 : 0;

    currentNode.next = new nodeLL(sum % 10);

    currentNode = currentNode.next;
    currentNode1 = currentNode1 && currentNode1.next;
    currentNode2 = currentNode2 && currentNode2.next;
  }

  if (carry) currentNode.next = new nodeLL(carry);

  return dummyHead.next;
}

const LL1 = arrayToLinkedList([2, 4, 3]);
const LL2 = arrayToLinkedList([5, 6, 4, 1]);

// console.log(addTwoLLNum(LL1, LL2), 1807);
console.log(linkedListToArr(addTwoLLNumLL(LL1, LL2)), [7, 0, 8, 1]);
