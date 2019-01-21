const BTNode = require('../data_structures/NodeBT');

// Return the k-th smallest value of a BST;
// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/tuesday/partner-a.md

function kthSmallestBST(node, k) {
  // dfs (in order) till it reaches kth
  let count = 0;
  let stack = [node];
  let resultArr = [];

  let leftNode = node.left;

  while (leftNode) {
    stack.push(leftNode);
    leftNode = leftNode.left;
  }

  let currentNode;
  
  while (stack.length > 0 && count < k) {
    currentNode = stack.pop();

    if (currentNode.left) {
      resultArr.push(currentNode.left.value);
      count++;
    } 

    resultArr.push(currentNode.value);
    count++;

    if (currentNode.right) {
      resultArr.push(currentNode.right.value);
      count++;
    }  
  }
  console.log(resultArr);
  

  return resultArr[k - 1];
}

const myBST = new BTNode(3);
  myBST.left = new BTNode(1);
    myBST.left.right = new BTNode(2);
  myBST.right = new BTNode(4);

console.log(kthSmallestBST(myBST, 1));
console.log(kthSmallestBST(myBST, 2));
console.log(kthSmallestBST(myBST, 3));