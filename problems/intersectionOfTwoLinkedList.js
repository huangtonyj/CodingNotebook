// ***
/*
  https://leetcode.com/problems/intersection-of-two-linked-lists/ 

  Given the heads of two singly linked-lists headA and headB, 
  return the node at which the two lists intersect. 
  If the two linked lists have no intersection at all, return null.
*/


function intersectionOfTwoLinkedList(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    if (nodeA) {
      nodeA = nodeA.next;
    } else {
      nodeA = headB;
    }

    if (nodeB) {
      nodeB = nodeB.next;
    } else {
      nodeB = headA;
    }
  }

  return nodeA;
}