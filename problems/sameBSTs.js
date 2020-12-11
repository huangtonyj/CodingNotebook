
/*
  An array of integers is said to represent the Binary Search Tree (BST)
  obtained by inserting each integer in the array, from left to right, into the
  BST.

  Write a function that takes in two arrays of integers and determines whether
  these arrays represent the same BST. Note that you're not allowed to
  construct any BSTs in your code.

  A BST is a Binary Tree that consists only of BST nodes. A node is said to be a
  valid BST node if and only if it satisfies the BST property: its value is
  strictly greater than the values of every node to its left; its value is less
  than or equal to the values of every node to its right; and its children nodes
  are either valid BST nodes themselves or None /
  null.

  Sample Input
    arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
    arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]

  Sample Output
    true // both arrays represent the BST below
          10
        /   \
       8     15
      /      /  \
     5      12    94
    /       /     /
   2       11    81
*/

function sameBSTs(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0 && arr2.length === 0) return true;

  const pivot1 = arr1.shift();
  const pivot2 = arr2.shift();
  const left1 = [];
  const left2 = [];
  const right1 = [];
  const right2 = [];
  
  if (pivot1 !== pivot2) return false;

  while (arr1.length) {
    const next1 = arr1.shift();
    const next2 = arr2.shift();
    
    if (next1 < pivot1) {
      left1.push(next1);
    } else {
      right1.push(next1);
    }

    if (next2 < pivot2) {
      left2.push(next2);
    } else {
      right2.push(next2);
    }
  }

  return sameBSTs(left1, left2) && sameBSTs(right1, right2);
}

console.log(
  sameBSTs([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
);