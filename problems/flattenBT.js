// Given a binary tree, flatten it to a linked list.
const NodeBT = require('../dataStructures/NodeBT');
const NodeLL = require('../dataStructures/NodeLL');

function flattenBT(node) {
  const stack = [node];
  const resultLL = new NodeLL(null);
  let currentLLNode = resultLL;

  while (stack.length) {
    const currentBTNode = stack.pop();
    currentLLNode.next = new NodeLL(currentBTNode.value);
    currentLLNode = currentLLNode.next;

    if (currentBTNode.right) {stack.push(currentBTNode.right);}
    if (currentBTNode.left) {stack.push(currentBTNode.left);}
  }

  return resultLL.next;
}

//       1
//     /   \
//    2     5
//  /  \     \
// 3    4     6
const myBT = new NodeBT(1);
  myBT.left = new NodeBT(2);
    myBT.left.left = new NodeBT(3);
    myBT.left.right = new NodeBT(4);
  myBT.right = new NodeBT(5);
    myBT.right.right = new NodeBT(6);

let currentNode = flattenBT(myBT);
let i = 1;

while(currentNode) {
  console.log(currentNode.value, i);
  currentNode = currentNode.next; 
  i++;
}