const NodeBT = require('../data_structures/NodeBT');
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/thursday/partner-a.md

function BSTNodeSuccessor(node, key, parents = []) {
  if (key === node.value) { 
    return node.left ? findBSTMin(node.right).value : findBSTMinAncestor(parents).value;
  }

  if (key < node.value) { 
    parents.push(node);
    return BSTNodeSuccessor(node.left, key, parents); }
  if (key > node.value) { return BSTNodeSuccessor(node.right, key, parents); }
  
}

const findBSTMin = (node) => node.left ? findBSTMin(node.left) : node;
const findBSTMinAncestor = (ancestors) => {
  return ancestors.reduce((acc, el) => {
    return el.value < acc.value ? el : acc;
  });
};

//       4
//     /   \
//    2     6
//  /  \   / \
// 1    3 5   7
const myBST = new NodeBT(4);
  myBST.left = new NodeBT(2);
    myBST.left.left = new NodeBT(1);
    myBST.left.right = new NodeBT(3);
  myBST.right = new NodeBT(6);
    myBST.right.left = new NodeBT(5);
    myBST.right.right = new NodeBT(7);

console.log(BSTNodeSuccessor(myBST, 1), 2);
console.log(BSTNodeSuccessor(myBST, 2), 3);
console.log(BSTNodeSuccessor(myBST, 3), 4);
console.log(BSTNodeSuccessor(myBST, 4), 5);
console.log(BSTNodeSuccessor(myBST, 5), 6);
console.log(BSTNodeSuccessor(myBST, 6), 7);
// console.log(BSTNodeSuccessor(myBST, 7), null);



// function BSTNodeSuccessor(root, key) {
//   // in order dfs and return next?
//   if (root === null) return [];
//   if (root.value !== null) {
//     console.log(root.value);
//   }


//   return BSTNodeSuccessor(root.left).concat([root.value], BSTNodeSuccessor(root.right));
// }