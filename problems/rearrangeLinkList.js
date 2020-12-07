/*
  Write a function that takes in the head of a Singly Linked List and an integer
  k, rearranges the list in place (i.e., doesn't create a brand new
  list) around nodes with value k, and returns its new head.

  Rearranging a Linked List around nodes with value k means moving
  all nodes with a value smaller than k before all nodes with value
  k and moving all nodes with a value greater than
  k after all nodes with value k.

  All moved nodes should maintain their original relative ordering if possible.

  Note that the linked list should be rearranged even if it doesn't have any
  nodes with value k.

  Each LinkedList node has an integer value as well as
  a next node pointing to the next node in the list or to
  None / null if it's the tail of the list.

  You can assume that the input Linked List will always have at least one node;
  in other words, the head will never be None / null.

  Sample Input
    head = 3 -> 0 -> 5 -> 2 -> 1 -> 4 // the head node with value 3
    k = 3

  Sample Output
    0 -> 2 -> 1 -> 3 -> 5 -> 4 // the new head node with value 0
    // Note that the nodes with values 0, 2, and 1 have
    // maintained their original relative ordering, and
    // so have the nodes with values 5 and 4.
*/

const NodeLL = require('../dataStructures/NodeLL');

function rearrangeLinkList(head, k) {
  const lessThanList = new NodeLL(null);
  const equalList = new NodeLL(null);
  const greaterThanList = new NodeLL(null);
  let lessThanTail = lessThanList;
  let equalTail = equalList;
  let greaterThanTail = greaterThanList;
  let currentNode = head;

  // traverse link list and bin into 3 sub link list
  while (currentNode) {
    if (currentNode.value < k) {
      lessThanTail.next = currentNode;
      lessThanTail = lessThanTail.next;
    } else if (currentNode.value > k) {
      greaterThanTail.next = currentNode;
      greaterThanTail = greaterThanTail.next;
    } else {
      equalTail.next = currentNode;
      equalTail = equalTail.next;
    }

    currentNode = currentNode.next;
  }

  // chain together the bined link lists
  greaterThanTail.next = null;
  equalTail.next = greaterThanTail.value !== null ? greaterThanList.next : null;
  lessThanTail.next = equalTail.value !== null ? equalList.next : greaterThanList.next;

  return lessThanList.next;
}

// const myLL1 = new NodeLL(3);
//   myLL1.insert(0).insert(5).insert(2).insert(1).insert(4);

// const myLL2 = new NodeLL(6);
//   myLL2.insert(0).insert(5).insert(2).insert(1).insert(4);

// const myLL3 = new NodeLL(0);
//   myLL3.insert(3).insert(2).insert(1).insert(4).insert(5);

// console.log(
//   _arrayifyLinkListValues(rearrangeLinkList(myLL1, 3)), [ 0, 2, 1, 3, 5, 4 ], '\n',
//   _arrayifyLinkListValues(rearrangeLinkList(myLL2, 2)), [ 0, 1, 2, 6, 5, 4 ], '\n',
//   _arrayifyLinkListValues(rearrangeLinkList(myLL3, 0)), [ 0, 3, 2, 1, 4, 5 ], '\n',
// );

// function _arrayifyLinkListValues(head) {
//   const arr = [];
//   let currentNode = head;

//   while (currentNode) {
//     arr.push(currentNode.value);
//     currentNode = currentNode.next;
//   }

//   return arr;
// }