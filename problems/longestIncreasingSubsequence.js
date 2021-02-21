// ***

/*
  Given a non-empty array of integers, write a function that returns the longest
  strictly-increasing subsequence in the array.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array
  [1, 2, 3, 4], and so do the numbers [2, 4]. Note
  that a single number in an array and the array itself are both valid
  subsequences of the array.

  You can assume that there will only be one longest increasing subsequence.

  Sample Input
    array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]

  Sample Output
    [-24, 2, 3, 5, 6, 35]
*/

// O(n^2) time O(n) space
function longestIncreasingSubsequence1(arr) {
  const runningSeqLengths = arr.map(_ => 1);
  const prevSeqIndices = arr.map(_ => null);
  let longestIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const iNum = arr[i];
      const jNum = arr[j];

      if (iNum > jNum && runningSeqLengths[i] < runningSeqLengths[j] + 1) {
        
        runningSeqLengths[i] = runningSeqLengths[j] + 1;
        prevSeqIndices[i] = j;

        if (runningSeqLengths[i] > runningSeqLengths[longestIdx]) longestIdx = i;
      }
    }
  }

  const ans = [arr[longestIdx]];
  let prevSeqIdx = prevSeqIndices[longestIdx];

  while (prevSeqIdx !== null) {
    ans.unshift(arr[prevSeqIdx]);
    prevSeqIdx = prevSeqIndices[prevSeqIdx];
  }

  return ans;
}

// O(n log n) time O(n) space
function longestIncreasingSubsequence(arr) {
  const smallestEndingIdxOfXLenSubSeq = [null];
  const prevSeqIndices = arr.map(_ => null);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const nextLength = binarySearch(arr, smallestEndingIdxOfXLenSubSeq, num);
    
    prevSeqIndices[i] = smallestEndingIdxOfXLenSubSeq[nextLength];
    smallestEndingIdxOfXLenSubSeq[nextLength + 1] = i;    
  }

  const endingIdxOfLongestSubSeq = smallestEndingIdxOfXLenSubSeq[smallestEndingIdxOfXLenSubSeq.length - 1];
  return buildSequence(arr, prevSeqIndices, endingIdxOfLongestSubSeq);
}

function binarySearch(arr, smallestEndingIdxOfXLenSubSeq, num, leftIdx, rightIdx) {
  if (!leftIdx) leftIdx = 0;
  if (!rightIdx) rightIdx = smallestEndingIdxOfXLenSubSeq.length;

  while (rightIdx - leftIdx > 1){
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const midNum = arr[smallestEndingIdxOfXLenSubSeq[midIdx]];

    if (num < midNum) rightIdx = midIdx;
    if (num > midNum) leftIdx = midIdx;
  }

  return leftIdx;
}

function buildSequence(arr, prevSeqIndices, startingIdx) {
  const ans = [];
  let idx = startingIdx;
  
  while (idx !== null) {
    const num = arr[idx];

    ans.unshift(num);
    idx = prevSeqIndices[idx];
  }

  return ans;
}

module.exports = longestIncreasingSubsequence;

let expected, array;

// console.log('\n\n---Test Case 1---');
// array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [-24, 2, 3, 5, 6, 35]);

// console.log('\n\n---Test Case 2---');
// array = [-1];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [-1]);

// console.log('\n\n---Test Case 3---');
// array = [-1, 2];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [-1, 2]);

// console.log('\n\n---Test Case 4---');
// array = [-1, 2, 1, 2];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [-1, 1, 2]);

// console.log('\n\n---Test Case 5---');
// array = [1, 5, -1, 10];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [1, 5, 10]);

// console.log('\n\n---Test Case 6---');
// array = [1, 5, -1, 0, 6, 2, 4];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [-1, 0, 2, 4]);

// console.log('\n\n---Test Case 7---');
// array = [3, 4, -1];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [3, 4]);

// console.log('\n\n---Test Case 8---');
// array = [29, 2, 32, 12, 30, 31];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [2, 12, 30, 31]);

// console.log('\n\n---Test Case 9---');
// array = [10, 22, 9, 33, 21, 61, 41, 60, 80];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [10, 22, 33, 41, 60, 80]);

// console.log('T\n\n---est Case 10---');
// array = [100, 1, 2, 3, 4, 101];
// console.log('actual: ', longestIncreasingSubsequence(array));
// console.log('expected: ', [1, 2, 3, 4, 101]);