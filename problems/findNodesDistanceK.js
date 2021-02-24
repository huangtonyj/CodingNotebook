/*
  You're given the root node of a Binary Tree, a target value of a
  node that's contained in the tree, and a positive integer k.
  Write a function that returns the values of all the nodes that are exactly
  distance k from the node with target value.

  The distance between two nodes is defined as the number of edges that must be
  traversed to go from one node to the other. For example, the distance between
  a node and its immediate left or right child is 1. The same holds
  in reverse: the distance between a node and its parent is 1. In a
  tree of three nodes where the root node has a left and right child, the left
  and right children are distance 2 from each other.

  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Note that all BinaryTree node values will be unique, and your
  function can return the output values in any order.

  Sample Input
    tree = 1
         /   \
        2     3
      /   \     \
     4     5     6
                /  \
               7    8
    target = 3
    k = 2

  Sample Output
    [2, 7, 8] // These values could be ordered differently.
*/

/*********************************************************************
  BFS target node while marking parent chain
  DFS for nodes k units away from target node
*********************************************************************/
function findNodesDistanceK(tree, target, k) {
  const theNode = _findNode(tree, target);

  return _getNodesKUnitsAway(theNode, k);
}

function _findNode(root, target) {
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    
    if (current.value === target) return current;

    if (current.left) {
      queue.push(current.left);
      current.left.parent = current;
    }
    if (current.right) {
      queue.push(current.right);
      current.right.parent = current;
    }
  }

  return null;
}

function _getNodesKUnitsAway(node, k, prevNode = null) {
  if (!node) return [];
  if (k === 0) return [node.value];
  
  let results = [];

  if (node.parent !== prevNode) {
    results = [...results, ..._getNodesKUnitsAway(node.parent, k - 1, node)];
  }

  if (node.left !== prevNode) {
    results = [...results, ..._getNodesKUnitsAway(node.left, k - 1, node)];
  }

  if (node.right !== prevNode) {
    results = [...results, ..._getNodesKUnitsAway(node.right, k - 1, node)];
  }

  return results;
}

/*********************************************************************
  Recursively DFS for target node
  Once target node found, add children nodes k units away
  Recursively returns distance from target node up the parent stack
    If valid distance (aka not -1), add opposite children's k units away
    Recursively return to grandparent a distance + 1

    If distance from target matches k, append to results array.
*********************************************************************/
function findNodesDistanceK2(tree, target, k) {
  const results = [];
  _findNodeDistanceK(tree, target, k, results);
  return results;
}

function _findNodeDistanceK(tree, target, k, results = []) {
  if (!tree) return -1;

  if (tree.value === target) {
    _addChildrenNodes(tree, k, 0, results);
    return 1;
  }

  const leftDistance = _findNodeDistanceK(tree.left, target, k, results);
  const rightDistance = _findNodeDistanceK(tree.right, target, k, results);

  if (leftDistance === k || rightDistance === k) {
    results.push(tree.value);
    
  } else if (leftDistance !== -1) {
    _addChildrenNodes(tree.right, k, leftDistance + 1, results);
    return leftDistance + 1;
    
  } else if (rightDistance !== -1) {
    _addChildrenNodes(tree.left, k, rightDistance + 1, results);
    return rightDistance + 1;
    
  } else {
    return -1;
  }
}

function _addChildrenNodes(node, k, distance, results) {
  if (!node) return;
  
  if (distance === k) {
    results.push(node.value);
  } else {
    _addChildrenNodes(node.left, k, distance + 1, results);
    _addChildrenNodes(node.right, k, distance + 1, results);
  }
}

/********************************************************************
TESTS:
********************************************************************/
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node1 = new BinaryTree(1);
const node2 = new BinaryTree(2);
const node3 = new BinaryTree(3);
const node4 = new BinaryTree(4);
const node5 = new BinaryTree(5);
const node6 = new BinaryTree(6);
const node7 = new BinaryTree(7);
const node8 = new BinaryTree(8);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node6.left = node7;
node6.right = node8;

console.log(findNodesDistanceK(node1, 3, 2), [2, 7, 8]);
console.log(findNodesDistanceK2(node1, 3, 2), [2, 7, 8]);