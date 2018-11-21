/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  deconstruct(addLinkedList(l1) + addLinkedList(l2))
};

const addLinkedList = function (l) {
  let currNode = l
  let ten = 0;
  let result = 0;
  while (currNode !== null) {
    result += currNode.val * (10 ** ten);
    currNode = currNode.next;
    ten += 1;
  }
  return result;
}


const deconstruct = (num) => {
  const rootNode = new ListNode(num % 10);
  num = Math.floor(num / 10)

  let currNode = rootNode;
  while (num > 0) {
    currNode.next = new ListNode(num % 10);
    currNode = currNode.next;
    num = Math.floor(num / 10)
  }
  return rootNode;
}