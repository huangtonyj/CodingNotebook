/*
  Reverse to Make Equal

  Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
  
  Signature: bool areTheyEqual(int[] arr_a, int[] arr_b)
  
  Input
  All integers in array are in the range [0, 1,000,000,000].
  
  Output
  Return true if B can be made equal to A, return false otherwise.
  
  Example
  A = [1, 2, 3, 4]
  B = [1, 4, 3, 2]
  output = true
  After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/

function reverseToMakeEqual(arrA, arrB) {
  const counts = {};

  arrA.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1
  });

  arrB.forEach((num) => {
    if (!(num in counts)) return false;
    counts[num] -= 1;
    if (counts[num] === 0) delete counts[num];
  });

  return Object.keys(counts).length === 0;
}

console.log(
  reverseToMakeEqual([1, 2, 3, 4], [1, 4, 3, 2]), true, '\n',
  reverseToMakeEqual([1, 2, 3, 4], [1, 4, 3, 3]), false, '\n',
  reverseToMakeEqual([1, 2, 3, 4, 5 ,4], [1, 4, 3, 2, 5, 4]), true, '\n',
);


/*
  If we can reverse arrB unlimited amount of times,
  it is basically the same as checking if both arr has the same count of each num.
*/