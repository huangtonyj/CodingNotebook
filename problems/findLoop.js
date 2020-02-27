function findLoop(head) {
  const hash = {};

  let current = head;

  while (current) {
    if (hash[current.value]) return current;
    hash[current.value] = current;
    
    current = current.next;
  }
}

module.exports = findLoop;