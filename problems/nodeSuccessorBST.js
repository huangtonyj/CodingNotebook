const NodeBT = require('../data_structures/NodeBT');
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/thursday/partner-a.md

function BSTNodeSuccessor(root, parents = []) {
  // in order dfs and return next?
  // if (root === null) return [];
  // if (root.value !== null) {console.log(root.value);}


  // return BSTNodeSuccessor(root.left).concat([root.value], BSTNodeSuccessor(root.right));

  if (root.right) { return findMin(root.right); }

}

const findMin = (node) => node.left ? findMin(node.left) : node;

//       15
//     /    \
//   10      20
//  /  \     / \
// 8   12  16   25
const myBST = new NodeBT(15);
  myBST.left = new NodeBT(10);
    myBST.left.left = new NodeBT(8);
    myBST.left.right = new NodeBT(12);
  myBST.right = new NodeBT(20);
    myBST.right.left = new NodeBT(16);
    myBST.right.right = new NodeBT(25);

console.log(findMin(myBST.right.right));
// console.log(BSTNodeSuccessor(myBST,  8), 10);
// console.log(BSTNodeSuccessor(myBST, 10), 12);
// console.log(BSTNodeSuccessor(myBST, 12), 15);
// console.log(BSTNodeSuccessor(myBST, 15), 16);
// console.log(BSTNodeSuccessor(myBST, 16), 20);
// console.log(BSTNodeSuccessor(myBST, 20), 25);
// console.log(BSTNodeSuccessor(myBST, 25), null);



// function BSTNodeSuccessor(root, key) {
//   // in order dfs and return next?
//   if (root === null) return [];
//   if (root.value !== null) {
//     console.log(root.value);
//   }


//   return BSTNodeSuccessor(root.left).concat([root.value], BSTNodeSuccessor(root.right));
// }