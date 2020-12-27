/*
  Write a function that takes in a Binary Tree (where nodes have an additional
  pointer to their parent node) as well as a node contained in that tree and
  returns the given node's successor.

  A node's successor is the next node to be visited (immediately after the given
  node) when traversing its tree using the in-order tree-traversal technique. A
  node has no successor if it's the last node to be visited in the in-order
  traversal.

  If a node has no successor, your function should return None /
  null.

  Each BinaryTree node has an integer value, a
  parent node, a left child node, and a
  right child node. Children nodes can either be
  BinaryTree nodes themselves or None /
  null.

  Sample Input
    tree = 
              1
            /  \
          2     3
        /  \  
      4     5
     /       
    6  
    node = 5   

  Sample Output
    1
    // This tree's in-order traversal order is:
    // 6 -> 4 -> 2 -> 5 -> 1 -> 3 
    // 1 comes immediately after 5.
*/

function findSuccessor(tree, node) {
  if (node.right) { // return leftMost node
    let current = node.right;

    while (current.left) {
      current = current.left;
    }

    return current;
	} else { // return first right parent
    let current = node;

    while (current.parent !== null) {
      if (current.parent.left === current) return current.parent;
      current = current.parent;
    }
  }
  
  return null;
}

// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.parent = null;
//   }
// }

// const bTree1 = new BinaryTree(1);
// const bTree2 = new BinaryTree(2);
// const bTree3 = new BinaryTree(3);
// const bTree4 = new BinaryTree(4);
// const bTree5 = new BinaryTree(5);
// const bTree6 = new BinaryTree(6);

// bTree1.left = bTree2;
// bTree1.right = bTree3;
// bTree2.parent = bTree1;
// bTree3.parent = bTree1;

// bTree2.left = bTree4;
// bTree2.right = bTree5;
// bTree4.parent = bTree2;
// bTree5.parent = bTree2;

// bTree4.left = bTree6;
// bTree6.parent = bTree4;

// console.log(findSuccessor(bTree1, bTree6).value, 4);
// console.log(findSuccessor(bTree1, bTree4).value, 2);
// console.log(findSuccessor(bTree1, bTree2).value, 5);
// console.log(findSuccessor(bTree1, bTree5).value, 1);
// console.log(findSuccessor(bTree1, bTree1).value, 3);
// console.log(findSuccessor(bTree1, bTree3).value, null);