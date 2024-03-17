/*
    https://leetcode.com/problems/longest-increasing-subsequence/description/

    Given an integer array nums, return the length of the longest strictly increasing subsequence.

    Example 1:

    Input: nums = [10,9,2,5,3,7,101,18]
    Output: 4
    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
    Example 2:

    Input: nums = [0,1,0,3,2,3]
    Output: 4
    Example 3:

    Input: nums = [7,7,7,7,7,7,7]
    Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    const dp = Array(nums.length).fill(1);
    let largest = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const numI = nums[i];
            const numJ = nums[j];

            if (numI > numJ) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                largest = Math.max(largest, dp[i]);
            }
        }
    }
    
    return largest;
};