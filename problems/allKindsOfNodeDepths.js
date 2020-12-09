/*
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of all of
  its subtrees' nodes' depths.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
    tree =    1
            /  \
          2     3
         / \   / \
        4  5  6  7
       / \
      8  9

  Sample Output
    26
    // The sum of the root tree's node depths is 16.
    // The sum of the tree rooted at 2's node depths is 6.
    // The sum of the tree rooted at 3's node depths is 2.
    // The sum of the tree rooted at 4's node depths is 2.
    // Summing all of these sums yields 26.
*/

// BFS: O(n) time O(w) space
function allKindsOfNodeDepths(root) {
  const queue = [root];
  const depth = [0];
  let acc = 0;

  while (queue.length) {
    const currentNode = queue.shift();
    const currentDepth = depth.shift();

    if (currentNode.left) {
      queue.push(currentNode.left);
      depth.push(currentDepth + 1);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
      depth.push(currentDepth + 1);
    }

    acc += currentDepth * (currentDepth + 1) / 2;
  }

  return acc;
}

// Brute Force: O(n log n) time O(h) space
// function allKindsOfNodeDepths(root) {
//   if (!root) return 0;

//   return allKindsOfNodeDepths(root.left) + depths(root) + allKindsOfNodeDepths(root.right);
// }

// function depths(root) {
//   const queue = [root];
//   const depth = [0];
//   let acc = 0;

//   while (queue.length) {
//     const currentNode = queue.shift();
//     const currentDepth = depth.shift();

//     if (currentNode.left) {
//       queue.push(currentNode.left);
//       depth.push(currentDepth + 1);
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right);
//       depth.push(currentDepth + 1);
//     }

//     acc += currentDepth;
//   }

//   return acc;
// }

////////////////////////////////////////////////////////////////

// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const myBT = new BinaryTree(1);
//   myBT.left = new BinaryTree(2);
//     myBT.left.left = new BinaryTree(4);
//       myBT.left.left.left = new BinaryTree(8);
//       myBT.left.left.right = new BinaryTree(9);
//     myBT.left.right = new BinaryTree(5);
//   myBT.right = new BinaryTree(3);
//     myBT.right.left = new BinaryTree(6);
//     myBT.right.right = new BinaryTree(7);

// console.log(
//   allKindsOfNodeDepths(myBT) === 26
// );