const NodeBT = require('../dataStructures/NodeBT');

function btCousins(root) {
  let result = [];
  let stack1 = [root];
  let stack2 = [];
  let current = stack1;
  let next = stack2;

  while (stack1.length || stack2.length) {
    result.push(current);
    
    current.forEach((node) => {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    });
    
    if (current === stack1) {
      stack1 = [];
      current = stack2;
      next = stack1;
    } else {
      stack2 = [];
      current = stack1;
      next = stack2;
    }
  }

  return result;
}

//       1
//     /   \
//    2     3
//  /  \     \
// 4    5     6
const myBT = new NodeBT(1);
  myBT.left = new NodeBT(2);
    myBT.left.left = new NodeBT(4);
    myBT.left.right = new NodeBT(5);
  myBT.right = new NodeBT(3);
    myBT.right.right = new NodeBT(6);

console.log(btCousins(myBT));