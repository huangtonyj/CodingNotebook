/*
  https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
  (i.e., from left to right, then right to left for the next level and alternate between).

  Input: root = [3,9,20,null,null,15,7]
  Output: [[3],[20,9],[15,7]]
*/

function zigzagLevelOrderBFS(root) {
  if (!root) return [];

  const result = [];
  const stackA = [root];
  const stackB = [];
  let useStackA = true;
  let currentLayer = [];

  while (stackA.length || stackB.length) {
    if (useStackA) {
      const currentNode = stackA.pop();

      currentLayer.push(currentNode.val);

      if (currentNode.left) stackB.push(currentNode.left);
      if (currentNode.right) stackB.push(currentNode.right);

      if (stackA.length === 0) {
        useStackA = false;
        result.push(currentLayer);
        currentLayer = [];
      }
    } else {
      const currentNode = stackB.pop();

      currentLayer.push(currentNode.val);

      if (currentNode.right) stackA.push(currentNode.right);
      if (currentNode.left) stackA.push(currentNode.left);

      if (stackB.length === 0) {
        useStackA = true;
        result.push(currentLayer);
        currentLayer = [];
      }
    }
  }

  return result;
}

function zigzagLevelOrderBFS2(root) {
  const result = [];

  let oddStack = [root];
  let evenStack = [];
  let i = 1;

  while (oddStack.length > 0 || evenStack.length > 0) {
    const currentLayer = [];
    const isOdd = i % 2 === 1;

    if (isOdd) {
      while (oddStack.length > 0) {
        const currentNode = oddStack.pop();

        if (currentNode) {
          currentLayer.push(currentNode.val);
          evenStack.push(currentNode.left);
          evenStack.push(currentNode.right);
        }
      }
    } else {
      while (evenStack.length > 0) {
        const currentNode = evenStack.pop();

        if (currentNode) {
          currentLayer.push(currentNode.val);
          oddStack.push(currentNode.right);
          oddStack.push(currentNode.left);
        }
      }
    }

    if (currentLayer.length > 0) result.push(currentLayer);
    i++;
  }

  return result;
}

function zigzagLevelOrderDFS(root, layer = 0, result = []) {
  if (!root) return result;
  if (!result[layer]) result.push([]);

  const isPushIntoLayer = layer % 2 === 0;

  if (isPushIntoLayer) {
    result[layer].push(root.val);
  } else {
    result[layer].unshift(root.val);
  }

  zigzagLevelOrderDFS(root.left, layer + 1, result);
  zigzagLevelOrderDFS(root.right, layer + 1, result);

  return result;
}
