// ***
const NodeBT = require('../dataStructures/NodeBT');

// RECURSIVE VERSION

function dfsInOrder (node) {
  if (node === null) { return []; }
  return dfsInOrder(node.left).concat(node.value, dfsInOrder(node.right));
}

function dfsReverseOrder (node) {
  if (node === null) { return []; }
  return dfsReverseOrder(node.right).concat(node.value, dfsReverseOrder(node.left));
}

function dfsPreOrder (node) {
  if (node === null) { return []; }
  return [node.value].concat(dfsPreOrder(node.left), dfsPreOrder(node.right));
}

function dfsPostOrder (node) {
  if (node === null) { return []; }
  return dfsPostOrder(node.left).concat(dfsPostOrder(node.right), node.value);
}


// ITERATIVE VERSION

function dfsInOrderIterative (node) {
  const result = [];
  const stack = [];
  let currentNode = node;

  do {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      result.push(currentNode.value);
      currentNode = currentNode.right;
    }
  } while (stack.length || currentNode !== null);

  return result;
}

function dfsReverseOrderIterative(node) {
  const result = [];
  const stack = [];
  let currentNode = node;

  do {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.right;
    } else {
      currentNode = stack.pop();
      result.push(currentNode.value);
      currentNode = currentNode.left;
    }
  } while (stack.length || currentNode !== null);

  return result;
}

function dfsPreOrderIterative (node) {
  const result = [];
  const stack = [node];

  while (stack.length) {
    const currentNode = stack.pop();
    result.push(currentNode.value);
    if (currentNode.right) { stack.push(currentNode.right); }
    if (currentNode.left) { stack.push(currentNode.left); }
  }
  
  return result;
}

function dfsPostOrderIterative(node) {
  const result = [];
  const stackA = [node];
  const stackB = [];
  
  while (stackA.length) {
    const currentNode = stackA.pop();
    stackB.push(currentNode);
    if (currentNode.left) { stackA.push(currentNode.left); }
    if (currentNode.right) { stackA.push(currentNode.right); }
  }

  while (stackB.length) { result.push(stackB.pop().value); }

  return result;
}

const rootNode = new NodeBT(4);
  rootNode.left = new NodeBT(2);
    rootNode.left.left = new NodeBT(1);
    rootNode.left.right = new NodeBT(3);
  rootNode.right = new NodeBT(6);
    rootNode.right.left = new NodeBT(5);
    rootNode.right.right = new NodeBT(7);
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

console.log('dfsInOrder:', dfsInOrder(rootNode), [1, 2, 3, 4, 5, 6, 7]);
console.log('dfsReverseOrder:', dfsReverseOrder(rootNode), [7, 6, 5, 4, 3, 2, 1]);
console.log('dfsPreOrder:', dfsPreOrder(rootNode), [4, 2, 1, 3, 6, 5, 7]);
console.log('dfsPostOrder:', dfsPostOrder(rootNode), [1, 3, 2, 5, 7, 6, 4]);

console.log('dfsInOrderIterative:', dfsInOrderIterative(rootNode), [1, 2, 3, 4, 5, 6, 7]);
console.log('dfsReverseOrderIterative:', dfsReverseOrderIterative(rootNode), [7, 6, 5, 4, 3, 2, 1]);
console.log('dfsPreOrderIterative:', dfsPreOrderIterative(rootNode), [4, 2, 1, 3, 6, 5, 7]);
console.log('dfsPostOrderIterative:', dfsPostOrderIterative(rootNode), [1, 3, 2, 5, 7, 6, 4]);