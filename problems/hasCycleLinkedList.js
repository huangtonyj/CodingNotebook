/*
  Given head, the head of a linked list, determine if the linked list has a cycle in it.

  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
  Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
*/


function hasCycleLinkedList(head) {
  if (!head || !head.next) return false;

  let turtle = head;
  let hare = head.next;

  while (turtle !== hare) {
    if (!hare || !hare.next) return false;

    turtle = turtle.next;
    hare = hare.next.next;
  }

  return turtle === hare;
}