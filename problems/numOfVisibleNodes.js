/*
  Number of Visible Nodes

  There is a binary tree with N nodes. You are viewing the tree from its left side and can see only the leftmost nodes at each level. Return the number of visible nodes.
  Note: You can see only the leftmost nodes, but that doesn't mean they have to be left nodes. The leftmost node at a level could be a right node.

  Signature
    int visibleNodes(Node root) {

  Input
    The root node of a tree, where the number of nodes is between 1 and 1000, and the value of each node is between 0 and 1,000,000,000

  Output
    An int representing the number of visible nodes.

  Example
                8  <------ root
              / \
            3    10
            / \     \
          1   6     14
              / \    /
            4   7  13
            
    output = 4
*/

function numOfVisibleNodes(root) {
  if (!root) return 0;

  return 1 + Math.max(
    numOfVisibleNodes(root.left), numOfVisibleNodes(root.right)
  );  
}


// // Definition for a binary tree node
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// // These are the tests we use to determine if the solution is correct.
// // You can add your own at the bottom, but they are otherwise not editable!
// function printInteger(n) {
//   var out = '[' + n + ']';
//   return out;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     var out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     var out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printInteger(expected);
//     out += ' Your output: ';
//     out += printInteger(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var root1 = new TreeNode(8);
// root1.left = new TreeNode(3);
// root1.right = new TreeNode(10);
// root1.left.left = new TreeNode(1);
// root1.left.right = new TreeNode(6);
// root1.left.right.left = new TreeNode(4);
// root1.left.right.right = new TreeNode(7);
// root1.right.right = new TreeNode(14);
// root1.right.right.left = new TreeNode(13);
// var expected1 = 4;
// var output1 = numOfVisibleNodes(root1);
// check(expected1, output1);

// var root2 = new TreeNode(10);
// root2.left = new TreeNode(8);
// root2.right = new TreeNode(15);
// root2.left.left = new TreeNode(4);
// root2.left.left.right = new TreeNode(5);
// root2.left.left.right.right = new TreeNode(6);
// root2.right.left = new TreeNode(14);
// root2.right.right = new TreeNode(16);
// var expected2 = 5;
// var output2 = numOfVisibleNodes(root2);
// check(expected2, output2);
