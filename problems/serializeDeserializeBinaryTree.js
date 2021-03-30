/*
  https://leetcode.com/problems/serialize-and-deserialize-binary-tree
  Serialization is the process of converting a data structure or 
  object into a sequence of bits so that it can be stored in a file or memory buffer, 
  or transmitted across a network connection link to be reconstructed later 
  in the same or another computer environment.

  Design an algorithm to serialize and deserialize a binary tree. 
  There is no restriction on how your serialization/deserialization algorithm should work. 
  You just need to ensure that a binary tree can be serialized to a string and 
  this string can be deserialized to the original tree structure.

   Your functions will be called as such: deserialize(serialize(root));

  Example 1:
    Input: root = [1,2,3,null,null,4,5]
    Output: [1,2,3,null,null,4,5]

  Example 2:
    Input: root = []
    Output: []

  Example 3:
    Input: root = [1]
    Output: [1]

  Example 4:
    Input: root = [1,2]
    Output: [1,2]
*/

function serialize(root, dfs = []) {
  if (root === null) {
    dfs.push(null);
  } else {
    dfs.push(root.val);
    serialize(root.left, dfs);
    serialize(root.right, dfs);
  }

  return dfs;
}

function deserialize(data) {
  const val = data.shift();

  if (val === null) return null;

  const node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);

  return node;
}

/*
  Serialize via DFS and mark leaf nodes with nulls
  Deserialize with queue shifting.
*/