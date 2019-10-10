const NodeLL = require ('../dataStructures/nodeLL');

function removeNthFromEnd(head, n) {
  let currentNode = head;
  let currentNodePlusN = head;

  // Move pointer ahead by n nodes
  for (let i = 0; i < n; i++) {
    currentNodePlusN = currentNodePlusN.next;
  }
  
  // Until pointer hits end aka null
  while (currentNodePlusN.next) {
    currentNode = currentNode.next;
    currentNodePlusN = currentNodePlusN.next;
  }

  // Remove next node
  currentNode.next = currentNode.next.next;

  return head;
}


// Test case
const myLL = new NodeLL(10);
  
let currentNode = myLL;
for (let i = 9; i > 0; i--) {
  currentNode.next = new NodeLL(i);
  currentNode = currentNode.next;
}

currentNode = removeNthFromEnd(myLL, 3);
let i = 10;
while(currentNode) {
  if (i !== 3) { 
    console.log(currentNode.value === i, currentNode.value, i); 
    currentNode = currentNode.next;
  } else {
    console.log(currentNode.value !== 3, currentNode.value, '2 not 3'); // deleted 3
  }
  i--;
}