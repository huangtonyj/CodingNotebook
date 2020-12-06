/*
Write a function that takes in the head of a Singly Linked List and returns a
boolean representing whether the linked list's nodes form a palindrome. Your
function shouldn't make use of any auxiliary data structure.

A palindrome is usually defined as a string that's written the same forward
and backward. For a linked list's nodes to form a palindrome, their values
must be the same when read from left to right and from right to left. Note
that single-character strings are palindromes, which means that single-node
linked lists form palindromes.

Each LinkedList node has an integer value as well as
a next node pointing to the next node in the list or to
None / null if it's the tail of the list.

You can assume that the input linked list will always have at least one node;
in other words, the head will never be None / null.

Sample Input
  head = 0 -> 1 -> 2 -> 2 -> 1 -> 0 // the head node with value 0

Sample Output
  true
*/

const reverseLinkList = require('./reverseLinkList');

function linkListPalindrome(head) {
  let slowRunner = head;
  let fastRunner = head;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  let left = head;
  let right = reverseLinkList(slowRunner);

  while (right) {
    if (left.value !== right.value) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}

module.exports = linkListPalindrome;

// const NodeLL = require('../dataStructures/nodeLL');

// const myLL = new NodeLL(0);
//   myLL
//     .insert(1)
//     .insert(2)
//     .insert(2)
//     .insert(1)
//     .insert(0)
    // .insert(3)
    // .insert(4)
    // .insert(5)
  // ;

// let currentNode = myLL;
// while (currentNode) {
//   console.log(currentNode.value);
//   currentNode = currentNode.next;
// }

// console.log(
//   linkListPalindrome(myLL)
// );

// function linkListPalindrome1(head) {
//   if (!head.next) return true;
  
//   const length = _getLength(head);
//   const mid = Math.floor(length / 2);
//   const evenLength = length % 2 === 0;
  
//   let nodesToReverse = mid - 1;
//   let prevNode = head;
//   let currentNode = head.next;

//   // reverse LL up to mid
//   while (nodesToReverse > 0) {
//     const next = currentNode.next;

//     currentNode.next = prevNode;
//     prevNode = currentNode;

//     currentNode = next;
//     nodesToReverse--;
//   }

//   head.next = null;

//   // compare nodes from middle to outer
//   let left = prevNode;
//   let right = evenLength ? currentNode : currentNode.next;

//   while (left) {
//     if (left.value !== right.value) return false;

//     left = left.next;
//     right = right.next;
//   }
  
//   return true;
// }

// function _getLength(head) {
//   let length = 1;
//   let currentNode = head;

//   while (currentNode.next) {
//     length++;
//     currentNode = currentNode.next;
//   }
  
//   return length;
// }