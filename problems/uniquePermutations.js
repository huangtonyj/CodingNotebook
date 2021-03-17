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

function uniquePermutations(nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  
  let result = [];
  
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