// ***
/*
  Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

  Example 1:
    Input: 
      nums = [1,1,2]
    Output:
      [[1,1,2],
      [1,2,1],
      [2,1,1]]
  
  Example 2:
    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var uniquePermutations = function(nums) {
  nums.sort((a, b) => a - b); // sort it once
  
  return _uniquePermutations(nums);
};

function _uniquePermutations(nums) {
  if (nums.length === 1) return [nums];
  
  const result = [];
  let prev = null;
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === prev) continue;
    prev = num;
    
    const nextNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const nextPerm = _uniquePermutations(nextNums);
    
    nextPerm.forEach((perm) => {
      result.push([num, ...perm]);
    });
  }
  
  return result;
}

// Use a set to filter out duplicate permutations
function uniquePermutations2(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const nextNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const nextPerm = uniquePermutations(nextNums);
    
    nextPerm.forEach((perm) => {
      result.push([num, ...perm]);
    });
  }
  
  const set = new Set(result.map(perm => perm.join(',')));
  
  return Array.from(set).map(perm => perm.split(','));
}