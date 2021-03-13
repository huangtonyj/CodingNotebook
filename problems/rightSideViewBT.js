/*
  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
  
  Example 1:
       1
     /  \
    2    3
   / \  / \
     5    4


    Input: root = [1,2,3,null,5,null,4]
    Output: [1,3,4]

  Example 2:
    Input: root = [1,null,3]
    Output: [1,3]

  Example 3:
    Input: root = []
    Output: []
*/

// BFS and return last element of each layer
function rightSideViewBT(root) {
  if (!root) return [];
  
  const result = [];
  let currentQueue = [root];
  let nextQueue = [];
  
  while (currentQueue.length) {
    const current = currentQueue.shift();
    
    if (current.left) nextQueue.push(current.left);
    if (current.right) nextQueue.push(current.right);
    
    if (currentQueue.length === 0) {
      result.push(current.val);
      currentQueue = nextQueue;
      nextQueue = [];
    }
  }
  
  return result;
}

// DFS Traverse by level, right child first if avaliable.
function rightSideViewBTDFS(root, level = 0, result = []) {
  if (!root) return result;
  if (!result[level]) result[level] = root.val;

  if (root.right) rightSideViewBTDFS(root.right, level + 1, result);
  if (root.left)  rightSideViewBTDFS(root.left, level + 1, result);

  return result;
}