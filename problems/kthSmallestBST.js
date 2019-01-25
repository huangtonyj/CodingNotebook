// Return the k-th smallest value of a BST;

const NodeBT = require('../data_structures/NodeBT');
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/tuesday/partner-a.md
 
function kthSmallestBST(node, k) {
 
}

const treeLength = (node) => {
  if (!node) return 0;
  return 1 + treeLength(node.left) + treeLength(node.right);
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

// console.log(kthSmallestBST(myBST, 1), 1);
console.log(kthSmallestBST(myBST, 2), 2);
console.log(kthSmallestBST(myBST, 3), 3);
console.log(kthSmallestBST(myBST, 4), 4);
console.log(kthSmallestBST(myBST, 5), 5);
console.log(kthSmallestBST(myBST, 6), 6);
console.log(kthSmallestBST(myBST, 7), 7);

// function kthSmallestBST(node, k) {
//   // dfs (in order) till it reaches kth
//   let count = 0;
//   let stack = [node];
//   let resultArr = [];

//   let leftNode = node.left;

//   while (leftNode) {
//     stack.push(leftNode);
//     leftNode = leftNode.left;
//   }

//   let currentNode;
  
//   while (stack.length > 0 && count < k) {
//     currentNode = stack.pop();

//     if (currentNode.left) {
//       resultArr.push(currentNode.left.value);
//       count++;
//     } 

//     resultArr.push(currentNode.value);
//     count++;

//     if (currentNode.right) {
//       resultArr.push(currentNode.right.value);
//       count++;
//     }  
//   }
//   console.log(resultArr);
  

//   return resultArr[k - 1];
// }

// const myBST = new NodeBT(3);
//   myBST.left = new NodeBT(1);
//     myBST.left.right = new NodeBT(2);
//   myBST.right = new NodeBT(4);
// console.log(kthSmallestBST(myBST, 1));
// console.log(kthSmallestBST(myBST, 2));
// console.log(kthSmallestBST(myBST, 3));