const NodeLL = require ('../data_structures/nodeLL');

function removeNthFromEnd(head, n) {

  return head;
}

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
    console.log(currentNode.value, i ); 
    currentNode = currentNode.next;
  } else {
    console.log(currentNode.value, 'not 3');
  }
  i--;
}