// ***
function reverseLinkList(head) {
  if (!head) return head;
  
  let prev = null;
  let current = head;
  let next = current.next;
  
  while (current) {
    current.next = prev;
    
    prev = current;
    current = next;
    next = next && next.next;
  }
  
  return prev;
}

// Recursive
function reverseLinkList2(node, prev = null) {
  if (!node) return prev;
  
  const next = node.next;
  
  node.next = prev;
  
  return reverseLinkList2(next, node);
}

module.exports = reverseLinkList;