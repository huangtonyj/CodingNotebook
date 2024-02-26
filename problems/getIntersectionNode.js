/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// O(N + M) time, O(N) space
function getIntersectionNode(headA, headB) {
  const seen = new Set();
  let currentA = headA;
  let currentB = headB;

  while (currentA) {
    seen.add(currentA);
    currentA = currentA?.next;
  }

  while (currentB) {
    if (seen.has(currentB)) return currentB;
    currentB = currentB?.next;
  }

  return null;
}

// O(2N + 2M) time, O(1) space
// The last section of the list are the same
// Fast forward longer list to same length
// Increment both and check if same
function getIntersectionNode2(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let lengthA = 0;
  let lengthB = 0;

  while (currentA) {
    lengthA++;
    currentA = currentA.next;
  }

  while (currentB) {
    lengthB++;
    currentB = currentB.next;
  }

  let longer = lengthA > lengthB ? headA : headB;
  let shorter = lengthA > lengthB ? headB : headA;

  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    longer = longer.next;
  }

  while (longer || shorter) {
    if (longer == shorter) return longer;
    longer = longer.next;
    shorter = shorter.next;
  }

  return null;
}
