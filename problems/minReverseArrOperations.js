/*
  Minimizing Permutations
  In this problem, you are given an integer N, and a permutation, P of the integers from 1 to N, denoted as (a_1, a_2, ..., a_N). You want to rearrange the elements of the permutation into increasing order, repeatedly making the following operation:
  Select a sub-portion of the permutation, (a_i, ..., a_j), and reverse its order.
  Your goal is to compute the minimum number of such operations required to return the permutation to increasing order.
  Signature
  int minReverseArrOperations(int[] arr)
  Input
  Array arr is a permutation of all integers from 1 to N, N is between 1 and 8
  Output
  An integer denoting the minimum number of operations required to arrange the permutation in increasing order
  Example
  If N = 3, and P = (3, 1, 2), we can do the following operations:
  Select (1, 2) and reverse it: P = (3, 2, 1).
  Select (3, 2, 1) and reverse it: P = (1, 2, 3).
  output = 2
*/

const isArrSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if ((next - current) !== 1) return false;
  }

  return true;
};

const reverseSubArr = (arr, start, end) => {
  const newArr = [...arr];
  
  while (end > start) {
    const temp = newArr[start];
    newArr[start] = newArr[end];
    newArr[end] = temp;
    start++;
    end--;
  }

  return newArr;
};

function minReverseArrOperations(arr) {
  if (isArrSorted(arr)) return 0;

  const visited = new Set();
  let currentQueue = [arr];
  let nextQueue = [];
  let operationsCount = 1;

  visited.add(arr.join('-'));

  while (currentQueue.length || nextQueue.length) {
    const current = currentQueue.shift();

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const newReversedArr = reverseSubArr(current, i, j);

        if (!visited.has(newReversedArr.join('-'))) {
          if (isArrSorted(newReversedArr)) return operationsCount;

          visited.add(newReversedArr.join('-'));
          nextQueue.push(newReversedArr);
        }
      }
    }

    if (currentQueue.length === 0) {
      currentQueue = nextQueue;
      nextQueue = [];
      operationsCount++;
    }
  }

  return -1;
}

// // Tests:
// function printInteger(n) {
//   var out = '[' + n + ']';
//   return out;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected === output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     const out = rightTick + ' Test #' + testCaseNumber;
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

// var n1 = 5;
// var arr1 = [1, 2, 5, 4, 3];
// var expected1 = 1;
// var output1 = minReverseArrOperations(arr1);
// check(expected1, output1);

// var n2 = 3;
// var arr2 = [3, 1, 2];
// var expected2 = 2;
// var output2 = minReverseArrOperations(arr2);
// check(expected2, output2);