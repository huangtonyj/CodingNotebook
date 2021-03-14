/*
  Given the root of a binary tree, 
  return the vertical order traversal of its nodes' values. 
  (i.e., from top to bottom, column by column).

  If two nodes are in the same row and column, 
  the order should be from left to right.

  Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[9],[3,15],[20],[7]]
  
  Example 2:
    Input: root = [3,9,8,4,0,1,7]
    Output: [[4],[9],[3,0,1],[8],[7]]
  
  Example 3:
    Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
    Output: [[4],[9,5],[3,0,1],[8,2],[7]]
  
  Example 4:
    Input: root = []
    Output: []

  Constraints:

  The number of nodes in the tree is in the range [0, 100].
  -100 <= Node.val <= 100
*/

function verticalOrderBT (root) {
  if (!root) return [];
  const groups = _binGroupingVertically(root);
  
  let ans = [groups[0]];
  let group = -1;
  
  while (group in groups) {
    ans.unshift(groups[group]);
    group--;
  }
  
  group = 1;
  while (group in groups) {
    ans.push(groups[group]);
    group++;
  }
  
  return ans;
}

// BFS, prioritizes node from top then left;
function _binGroupingVertically(node) {
  const queue = [[node, 0]];
  const groups = {};
  
  while (queue.length) {
    const [current, group] = queue.shift();
    
    if (!groups[group]) groups[group] = [];
    groups[group].push(current.val);
    
    if (current.left) queue.push([current.left, group - 1]);
    if (current.right) queue.push([current.right, group + 1]);
  }
  
  return groups;
}

// // DFS, prioritizes node from left then top;
// function _binGroupingVertically(node, group = 0, groups ={}) {
//   if (!groups[group]) groups[group] = [];
//   groups[group].push(node.val);
  
//   if (node.left) _binGroupingVertically(node.left, group - 1, groups);
//   if (node.right) _binGroupingVertically(node.right, group + 1, groups);
  
//   return groups;
// }