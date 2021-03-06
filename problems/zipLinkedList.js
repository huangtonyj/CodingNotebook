/*
  You're given the head of a Singly Linked List of arbitrary length
  k. Write a function that zips the Linked List in place (i.e.,
  doesn't create a brand new list) and returns its head.

  A Linked List is zipped if its nodes are in the following order, where
  k is the length of the Linked List:

  1st node -> kth node -> 2nd node -> (k - 1)th node -> 3rd node -> (k - 2)th node -> ...

  Each LinkedList node has an integer value as well as
  a next node pointing to the next node in the list or to
  None / null if it's the tail of the list.

  You can assume that the input Linked List will always have at least one node;
  in other words, the head will never be None / null.

  Sample Input
    linkedList = 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 1 

  Sample Output
    1 -> 6 -> 2 -> 5 -> 3 -> 4 // the head node with value 1
*/
const {
  arrayToLinkedList, 
  printLinkedList
} = require('../algorithms/linkedListUtils');

function zipLinkedList(head) {
  const midNode = _getMidpoint(head);
  const tail = _reverseLinkedListFromMidpoint(midNode);

  _interweaveHeadTail(head, tail);

  return head;
}

function _getMidpoint(head) {
  let slowRunner = head;
  let fastRunner = head;

  while (fastRunner !== null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next && fastRunner.next.next;
  }

  return slowRunner;
}

function _reverseLinkedListFromMidpoint(midNode) {
  let prev = null;
  let current = midNode;
  let next = current && current.next;

  while (current) {
    current.next = prev;

    prev = current;
    current = next;
    next = next && next.next;
  }

  return prev;
}

function _interweaveHeadTail(head, tail) {
  let left = head.next;
  let right = tail;
  let current = head;
  let isLeftTurn = false;

  while (right && left && left !== right) {
    if (isLeftTurn) {
      current.next = current && left;
      left = left.next;
      current = current.next;
    } else {
      current.next = right;
      right = right.next;
      current = current.next;
    }

    isLeftTurn = !isLeftTurn;
  }

  if (left) left.next = null; // for odd Lengths
  current.next = left;
}

exports.zipLinkedList = zipLinkedList;

// printLinkedList(zipLinkedList(arrayToLinkedList([1]))); // 1
// console.log('-');
// printLinkedList(zipLinkedList(arrayToLinkedList([1,2,3,4,5,6]))); // 1 6 2 5 3 4
// console.log('-');
// printLinkedList(zipLinkedList(arrayToLinkedList([1,2,3,4,5,6,7]))); // 1 7 2 6 3 5 4