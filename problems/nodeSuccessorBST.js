const NodeBT = require('../data_structures/NodeBT');
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/thursday/partner-a.md

function BSTNodeSuccessor(node, key, parents = []) {
  // Look for the min of the left subtree if applicable
  // Else look at ancestors chain for the min ancestor.
  if (key === node.value) { 
    return node.left ? findBSTMin(node.right) : findBSTMinAncestor(parents);
  }
  
  // Check the right subtree
  if (key > node.value) { 
    return BSTNodeSuccessor(node.right, key, parents); 
  }
  
  // Check the left subtree
  // Keep track of ancestor chain in event it is the largest in the left subtree.
  if (key < node.value) { 
    parents.push(node);
    return BSTNodeSuccessor(node.left, key, parents); 
  }
}

const findBSTMin = (node) => {
  return node.left ? findBSTMin(node.left) : node.value;
};

const findBSTMinAncestor = (ancestors) => {
  if (ancestors.length === 0) return null;
  return ancestors.reduce((acc, el) => el.value < acc.value ? el : acc).value;
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
console.log(BSTNodeSuccessor(myBST, 7), null);

// Alternatively is to perform an in-order DFS and pick out the next in-order;