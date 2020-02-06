function reverseLinkList (head) {
  let prev = head;
  let current = head.next;
  let next = null || (current && current.next); // null || for edge case of 1 node

  prev.next = null;

  while (next) {
    current.next = prev;

    prev = current;
    current = next;
    next = next.next;
  }

  if (current) current.next = prev; // if statement for edge case of 1 node

  return current || prev; // || prev for edge case of 1 node.
}

module.exports = reverseLinkList;