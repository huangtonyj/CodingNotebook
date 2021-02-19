/*
  Nodes in a Subtree

  You are given a tree that contains N nodes, each containing an integer u which corresponds to a lowercase character c in the string s using 1-based indexing.
  You are required to answer Q queries of type [u, c], where u is an integer and c is a lowercase letter. 
  The query result is the number of nodes in the subtree of node u containing c.

  Signature
    int[] countOfSubNodes(Node root, ArrayList<Query> queries, String s)

  Input
    A pointer to the root node, an array list containing Q queries of type [u, c], and a string s

  Constraints
    N and Q are the integers between 1 and 1,000,000
    u is a unique integer between 1 and N
    s is of the length of N, containing only lowercase letters
    c is a lowercase letter contained in string s
    Node 1 is the root of the tree

  Output
    An integer array containing the response to each query

  Example
            1(a)
            /   \
          2(b)  3(a)
    s = "aba"
    RootNode = 1
    query = [[1, 'a']]
    Note: Node 1 corresponds to first letter 'a', Node 2 corresponds to second letter of the string 'b', Node 3 corresponds to third letter of the string 'a'.
    output = [2]
    Both Node 1 and Node 3 contain 'a', so the number of nodes within the subtree of Node 1 containing 'a' is 2.
*/

// Definition for a Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

function countOfSubNodes(root, queries, string) {
  const subNodeCounts = Array(string.length + 1).fill(null);
  let stack = [root];

  while (stack.length) {
    const current = stack.pop();
    const {val, children} = current;
    const isChildrenVisited = children.length === 0 || subNodeCounts[children[0].val] !== null;
    
    if (!isChildrenVisited) {
      stack = [...stack, current, ...current.children];
    } else {
      const char = string[val - 1];
      const currentCounts = {};
      currentCounts[char] = 1;
      
      children.forEach((child) => {
        const childCounts = subNodeCounts[child.val];

        Object.entries(childCounts).forEach(([char, count]) => {
          currentCounts[char] = (currentCounts[char] || 0) + count;
        });
      });

      subNodeCounts[val] = currentCounts;
    }
  }

  return queries.map(([node, char]) => subNodeCounts[node][char]);
}

// Tests:
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var testCaseNumber = 1;

function check(expected, output) {
  var expectedSize = expected.length;
  var outputSize = output.length;
  var result = true;
  if (expectedSize != outputSize) {
    result = false;
  }
  for (var i = 0; i < Math.min(expectedSize, outputSize); i++) {
    result &= (output[i] === expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    let out = rightTick + ' Test #' + testCaseNumber;
    console.log(out);
  }
  else {
    let out = '';
    out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  testCaseNumber++;
}

// Testcase 1
var n1 = 3, q1 = 1;
var s1 = "aba";
var node1 = new Array(n1 + 1);
for (var i = 1; i <= n1; i++) {
  node1[i] = new Node(i);
}
var root1 = node1[1];
node1[1].children = [node1[2], node1[3]];
var queries1 = [[1, 'a']];
var output1 = countOfSubNodes(root1, queries1, s1); 
var expected1 = [2];
check(expected1, output1);

// Testcase 2
var n2 = 7, q2 = 3;
var s2 = "abaacab";
var node2 = new Array(n2 + 1);
for (var i = 1; i <= n2; i++) {
  node2[i] = new Node(i);
}
var root2 = node2[1];
node2[1].children = [node2[2], node2[3], node2[7]];
node2[2].children = [node2[4], node2[5]];
node2[3].children = [node2[6]];
var queries2 = [[1, 'a'], [2, 'b'], [3, 'a']]; 
var output2 = countOfSubNodes(root2, queries2, s2); 
var expected2 = [4, 1, 2];
check(expected2, output2); 