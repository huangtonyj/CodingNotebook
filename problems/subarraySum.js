/*
  https://leetcode.com/problems/subarray-sum-equals-k/
  Given an array of integers nums and an integer k, 
  return the total number of continuous subarrays whose sum equals to k.

  Example 1:
    Input: nums = [1,1,1], k = 2
    Output: 2

  Example 2:
    Input: nums = [1,2,3], k = 3
    Output: 2

  Example 3:
    Input: nums = [3, 4, 7, 2, -3, 1, 4, 3], k = 5
    Output: 2
*/

// O(n^2) time O(1) space
function subarraySum(nums, k) {
  let counts = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      
      if (sum === k) counts++;
    }
  }
  
  return counts;
}

console.log(
  subarraySum([3, 4, 7, 2, -3, 1, 4, 3], 7)
);