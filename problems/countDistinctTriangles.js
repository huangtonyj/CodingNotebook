/*
  Counting Triangles
  Given a list of N triangles with integer side lengths, determine how many different triangles there are. Two triangles are considered to be the same if they can both be placed on the plane such that their vertices occupy exactly the same three points.

  Signature
    int countDistinctTriangles(ArrayList<Sides> arr)
    or 
    int countDistinctTrianges(int[][] arr)

  Input
    In some languages, arr is an Nx3 array where arr[i] is a length-3 array that contains the side lengths of the ith triangle. In other languages, arr is a list of structs/objects that each represent a single triangle with side lengths a, b, and c.
    It's guaranteed that all triplets of side lengths represent real triangles.
    All side lengths are in the range [1, 1,000,000,000]
    1 <= N <= 1,000,000

  Output
    Return the number of distinct triangles in the list.

  Example 1
    arr = [[2, 2, 3], [3, 2, 2], [2, 5, 6]]
    output = 2
    The first two triangles are the same, so there are only 2 distinct triangles.

  Example 2
    arr = [[8, 4, 6], [100, 101, 102], [84, 93, 173]]
    output = 3
    All of these triangles are distinct.

  Example 3
    arr = [[5, 8, 9], [5, 9, 8], [9, 5, 8], [9, 8, 5], [8, 9, 5], [8, 5, 9]]
    output = 1
    All of these triangles are the same.
*/

function countDistinctTriangles(arr) {
  const set = new Set();

  arr.forEach((triangle) => {
    const triangleId = triangle.sort((a, b) => a - b).join('-');
    set.add(triangleId);
  });

  return set.size;
}

// // Tests:
// function printInteger(n) {
//   return '[' + n + ']';
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     let out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     let out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printInteger(expected);
//     out += ' Your output: ';
//     out += printInteger(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var arr1 = [[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]];
// var expected1 = 3;
// var output1 = countDistinctTriangles(arr1);
// check(expected1, output1);

// var arr2 = [[3, 4, 5], [8, 8, 9], [7, 7, 7]];
// var expected2 = 3;
// var output2 = countDistinctTriangles(arr2);
// check(expected2, output2);

// var arr3 = [[2, 2, 3], [3, 2, 2], [2, 5, 6]];
// var expected3 = 2;
// var output3 = countDistinctTriangles(arr3);
// check(expected3, output3);

// var arr4 = [[8, 4, 6], [100, 101, 102], [84, 93, 173]];
// var expected4 = 3;
// var output4 = countDistinctTriangles(arr4);
// check(expected4, output4);

// var arr5 = [[5, 8, 9], [5, 9, 8], [9, 5, 8], [9, 8, 5], [8, 9, 5], [8, 5, 9]];
// var expected5 = 1;
// var output5 = countDistinctTriangles(arr5);
// check(expected5, output5);
