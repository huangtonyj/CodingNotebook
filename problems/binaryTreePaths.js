const buildBT = require('../algorithms/buildBT');

/*
  Given a binary tree, return all root-to-leaf paths.

  Note: A leaf is a node with no children.

  Example:
    Input:

        1
      /   \
     2     3
      \
       5

  Output: ["1->2->5", "1->3"]

  Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/

function binaryTreePathsBFS(root) {
  if (!root) return [];
  
  const res = [];
  const queue = [[root]];
  
  while (queue.length) {
    const current = queue.shift();
    const lastNodeVisited = current[current.length - 1];
    
    if (lastNodeVisited.left || lastNodeVisited.right) {
      if (lastNodeVisited.left) queue.push([...current, lastNodeVisited.left]);
      if (lastNodeVisited.right) queue.push([...current, lastNodeVisited.right]);
    } else {
      res.push(current.map(node => node.value).join('->'));
    }
  }
  
  return res;
}

function binaryTreePathsDFS(node, path = [], res = []) {
  if (!node.left && !node.right) {
    path.push(node);

    res.push(path.map((iNode) => iNode.value).join('->'));
  } else {
    path = [...path, node];

    if (node.left) binaryTreePathsDFS(node.left, path, res);
    if (node.right) binaryTreePathsDFS(node.right, path, res);
  }

  return res;
}

const myBT = buildBT([1, 2, 3, null, 5]);

console.log(binaryTreePathsBFS(myBT));
console.log(binaryTreePathsDFS(myBT));