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

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  // BFS node while marking parent chain
  const theNode = findNode(tree, target);
  
  // DFS for nodes k units away
  return getNodesKUnitsAway(theNode, k);
}

function findNode(root, target) {
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

function getNodesKUnitsAway(node, k, prevNode = null) {
  if (!node) return [];
  if (k === 0) return [node.value];
  
  let results = [];

  if (node.parent !== prevNode) {
    results = [...results, ...getNodesKUnitsAway(node.parent, k - 1, node)];
  }

  if (node.left !== prevNode) {
    results = [...results, ...getNodesKUnitsAway(node.left, k - 1, node)];
  }

  if (node.right !== prevNode) {
    results = [...results, ...getNodesKUnitsAway(node.right, k - 1, node)];
  }

  return results;
}

module.exports = findNodesDistanceK;

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