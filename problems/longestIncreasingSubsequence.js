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
function longestIncreasingSubsequence(arr) {
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

module.exports = longestIncreasingSubsequence;
