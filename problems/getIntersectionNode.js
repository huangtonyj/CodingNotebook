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
