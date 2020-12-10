/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all quadruplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these quadruplets in no particular order.


  If no four numbers sum up to the target sum, the function should return an
  empty array.

  Sample Input
    array = [7, 6, 4, -1, 1, 2]
    targetSum = 16

  Sample Output
    [[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently
*/

function fourNumberSum(array, target) {
  const result = {};
  const twoSumHashIndices = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const twoSum = array[i] + array[j];

      if (!twoSumHashIndices[twoSum]) twoSumHashIndices[twoSum] = [];
      twoSumHashIndices[twoSum].push([i, j]);
    }
  }

  Object.entries(twoSumHashIndices).forEach(([twoSum, twoSumIndices]) => {
    const diff = target - twoSum;
    const otherTwoSumIndices = twoSumHashIndices[diff];
    
    if (otherTwoSumIndices) {
      for (const indices1 of twoSumIndices) {
        for (const indices2 of otherTwoSumIndices) {
          const inds = [...indices1, ...indices2];
          const set = new Set(inds);

          if (set.size === 4) {
            const string = inds.sort().join('-'); 
            const mapped = inds.map(ind => array[ind]);
            result[string] = mapped;
          }
          
        }
      }
    }
  });

  return Object.values(result);
}

module.exports = fourNumberSum;

console.log(
  fourNumberSum([7, 6, 4, -1, 1, 2], 16), [[7, 6, 4, -1], [7, 6, 1, 2]]
);