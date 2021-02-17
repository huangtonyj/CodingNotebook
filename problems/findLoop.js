/*
  Write a function that takes in the head of a Singly Linked List that contains
  a loop (in other words, the list's tail node points to some node in the list
  instead of None / null). The function should return
  the node (the actual node--not just its value) from which the loop originates
  in constant space.

  Each LinkedList node has an integer value as well as
  a next node pointing to the next node in the list.

  Sample Input
  head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value 0
                            ^         v
                            9 <- 8 <- 7

  Sample Output
  4 -> 5 -> 6 // the node with value 4
  ^         v
  9 <- 8 <- 7
*/

// O(n) time O(1) space
function findLoop(head) {
  let turtle = head.next;
  let rabbit = head.next.next;

  while (turtle !== rabbit) {
    turtle = turtle.next;
    rabbit  = rabbit.next.next;
  }

  turtle = head;

  while (turtle !== rabbit) {
    turtle = turtle.next;
    rabbit = rabbit.next;
  }

  return turtle;
}


// O(n) time O(n) space
function findLoop2(head) {
  const hash = {};
  let current = head;

  while (current) {
    if (hash[current.value]) return current;
    hash[current.value] = current;
    
    current = current.next;
  }
}

module.exports = findLoop;