// ***
/*
  Reverse Operations

  You are given a singly-linked list that contains N integers. A subpart of the list is a contiguous set of even elements, bordered either by either end of the list or an odd element. For example, if the list is [1, 2, 8, 9, 12, 16], the subparts of the list are [2, 8] and [12, 16].
  Then, for each subpart, the order of the elements is reversed. In the example, this would result in the new list, [1, 8, 2, 9, 16, 12].
  The goal of this question is: given a resulting list, determine the original order of the elements.
  
  Implementation detail:
    You must use the following definition for elements in the linked list:
    class Node {
        int data;
        Node next;
    }
  
  Signature
    Node reverse(Node head)
  
  Constraints
    1 <= N <= 1000, where N is the size of the list
    1 <= Li <= 10^9, where Li is the ith element of the list
  
  Example
    Input:
    N = 6
    list = [1, 2, 8, 9, 12, 16]

    Output:
    [1, 8, 2, 9, 16, 12]
*/

// var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
// var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);

// var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
// var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);

const NodeLL = require('../dataStructures/NodeLL');

// iterative O(n)
function reverseEvenLinkList(head) {
  let returnHead = head.value % 2 === 0 ? null : head;

  let prev = null;
  let current = head;
  let next = head.next;

  let beforeFirstEven = null;
  let firstEven = null;
  let lastEven = null;

  while (current) {
    const isEven = current.value % 2 === 0;

    if (isEven) {

      if (!lastEven) {
        lastEven = current;
        beforeFirstEven = prev;
        current.next = null;
      } else {
        current.next = prev;
      }

    } else {
      firstEven = prev;
      
      if (beforeFirstEven) beforeFirstEven.next = firstEven;
      if (lastEven) lastEven.next = current;
      if (!returnHead) returnHead = firstEven;

      beforeFirstEven = null;
      firstEven = null;
      lastEven = null;
    }

    prev = current;
    current = next;
    next = next && next.next;
  }

  if (beforeFirstEven) beforeFirstEven.next = prev;

  return returnHead;
}

// recursive O(n)
function reverseEvenLinkList2 (head, prev = null) {
  if (!head) return null;
  
  let current = head;

  while (current && (current.value % 2 === 0)) {
    const temp = current.next;

    current.next = prev;
    prev = current;
    current = temp;
  }

  if (current !== head) {
    head.next = current;
    reverseEvenLinkList2(current, null);

    return prev;
  } else {
    head.next = reverseEvenLinkList2(head.next, head);

    return head;
  }
}

// function testReverseEvenLinkListLL (arr) {
//   const head = new NodeLL(arr.shift());
//   let node = head;
//   for (const num of arr) node = node.insert(num);

//   node = reverseEvenLinkList(head);

//   while (node) {
//     console.log(node.value);
//     node = node.next;
//   }
// }

// testReverseEvenLinkListLL([1, 2, 8, 9, 12, 16]);
// testReverseEvenLinkListLL([2, 18, 24, 3, 5, 7, 9, 6, 12]);