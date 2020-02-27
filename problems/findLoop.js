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