// Return the k-th smallest value of a BST;
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/tuesday/partner-a.md

const NodeBT = require('../data_structures/NodeBT');

function kthSmallestBST(node, k) {  
  const leftTreeLength = treeLength(node.left) + 1; 

  if (k === leftTreeLength) { return node.value; }
  if (k < leftTreeLength) { return kthSmallestBST(node.left, k); }
  if (k > leftTreeLength) { return kthSmallestBST(node.right, k - leftTreeLength); }
}

const treeLength = (node) => {
  if (!node) return 0;
  return 1 + treeLength(node.left) + treeLength(node.right);
};

// FASTER ALTERNATE
// Similar to in order DFS, return currentNode when k counter decrements to 0;
function kthSmallestBST2(node, k) {
    const stack = [];
    let currentNode = node;

    do {
      if (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = stack.pop();
        if (currentNode) k--;
        if (k === 0) break;

        currentNode = currentNode.right;
      }

    } while ((stack.length || currentNode !== null) && k > 0);

    return currentNode.value;
}


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

console.log(kthSmallestBST(myBST, 1), 1);
console.log(kthSmallestBST(myBST, 2), 2);
console.log(kthSmallestBST(myBST, 3), 3);
console.log(kthSmallestBST(myBST, 4), 4);
console.log(kthSmallestBST(myBST, 5), 5);
console.log(kthSmallestBST(myBST, 6), 6);
console.log(kthSmallestBST(myBST, 7), 7);

console.log(kthSmallestBST2(myBST, 1), 1);
console.log(kthSmallestBST2(myBST, 2), 2);
console.log(kthSmallestBST2(myBST, 3), 3);
console.log(kthSmallestBST2(myBST, 4), 4);
console.log(kthSmallestBST2(myBST, 5), 5);
console.log(kthSmallestBST2(myBST, 6), 6);
console.log(kthSmallestBST2(myBST, 7), 7);