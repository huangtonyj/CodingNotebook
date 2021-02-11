/*
Difficulty: Category: HiddenSuccessful Submissions: 368+Sum of Linked Lists
  You're given two Linked Lists of potentially unequal length. Each Linked List
  represents a non-negative integer, where each node in the Linked List is a
  digit of that integer, and the first node in each Linked List always
  represents the least significant digit of the integer. Write a function that
  returns the head of a new Linked List that represents the sum of the integers
  represented by the two input Linked Lists.

  Each LinkedList node has an integer value as well as
  a next node pointing to the next node in the list or to
  None / null if it's the tail of the list. The
  value of each LinkedList node is always in the range
  of 0 - 9.

  Note: your function must create and return a new Linked List, and you're not
  allowed to modify either of the input Linked Lists.

  Sample Input
    linkedListOne = 2 -> 4 -> 7 -> 1
    linkedListTwo = 9 -> 4 -> 5

  Sample Output
    1 -> 9 -> 2 -> 2
    // linkedListOne represents 1742
    // linkedListTwo represents 549
    // 1742 + 549 = 2291
*/

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const summedLinkedList = new LinkedList(null);
  let currentNode = summedLinkedList;
  let currentNode1 = linkedListOne;
  let currentNode2 = linkedListTwo;
  let carryOver = 0;
  
  while (currentNode1 || currentNode2 || carryOver) {
    const currentValue1 = currentNode1 && currentNode1.value || 0;
    const currentValue2 = currentNode2 && currentNode2.value || 0;
    const currentSum = currentValue1 + currentValue2 + carryOver;
    const ones = currentSum % 10;
    const tens = Math.floor(currentSum / 10);

    carryOver = tens;
    currentNode.next = new LinkedList(ones);
		
    currentNode = currentNode.next;
    currentNode1 = currentNode1 && currentNode1.next;
    currentNode2 = currentNode2 && currentNode2.next;
  }

  return summedLinkedList.next;
}

module.exports = {
  LinkedList, sumOfLinkedLists
};