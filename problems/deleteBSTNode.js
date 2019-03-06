// https://github.com/appacademy/job-search-guide/blob/master/pairboarding-workshop/w4/tuesday/partner-b.md

const NodeBT = require('../data_structures/NodeBT');

function deleteBSTNode(root, key) {
  // let prevParent = null;
  // let foundNode = root;
  // let child;

  // while (foundNode.value !== key) {
  //   prevParent = foundNode;
  //   if (key < foundNode.value) {
  //     child = 'left';
  //     foundNode = foundNode.left;
  //   } else {
  //     child = 'right';
  //     foundNode = foundNode.right;
  //   }
  //   // foundNode = key < foundNode.value ? foundNode.left : foundNode.right;    
  // }

 
  // const foundNode = findNode(root, key);

  // if (root.value === key) {
  //   // delete node
  // }

  // return foundNode;

  // if no children, just delete
  // if children, promote right
    // assign prev parent to new promoted child
    // assign prev left to new promoted child's left
    // recursive promote down the chain until a node with no children

  if (root === null) return null;

  if (key < root.value) {
    root.left = deleteBSTNode(root.left, key);
  } else if (key > root.value) {
    root.right = deleteBSTNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    const minNode = findMin(root.right);
    root.value = minNode.value;
    root.right = deleteBSTNode(root.right, root.val);

  }


  return root;


}

const findMin = (node) => {
  while(node.left !== null) { node = node.left; }
  return node;
};

const findNode = (node, key) => {  
  if (node.value === key) return node; 
  return key < node.value ? findNode(node.left, key) : findNode(node.right, key);
};


//     5
//    / \
//   3   6
//  / \   \
// 2  4   7

const myBST = new NodeBT(5);
  myBST.left = new NodeBT(3);
  myBST.left.left = new NodeBT(2);
  myBST.left.right = new NodeBT(4);

  myBST.right = new NodeBT(6);
  myBST.right.right = new NodeBT(7);

console.log(deleteBSTNode(myBST, 3));

//     5             5
//    / \           / \
//   4   6    OR   2   6
//  /     \         \   \
// 2       7        4   7


    
   
  
   
