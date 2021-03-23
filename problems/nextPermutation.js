// ***
/*
  Implement next permutation, which rearranges numbers into the 
  lexicographically next greater permutation of numbers.

  If such an arrangement is not possible, 
  it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

  The replacement must be in place and use only constant extra memory.

  Example 1:
    Input: nums = [1,2,3]
    Output: [1,3,2]

  Example 2:
    Input: nums = [3,2,1]
    Output: [1,2,3]

  Example 3:
    Input: nums = [1,1,5]
    Output: [1,5,1]

  Example 4:
    Input: nums = [1]
    Output: [1]
    
  Example 5:
    Input: nums = [1, 5, 8, 4, 7, 6, 5, 3, 1]
    Output: [1, 5, 8, 5, 7, 6, 4, 3, 1]
*/

function nextPermutation(nums) {
  // find first peak from right
  const i = nums.length - 1;
  
  while (nums[i - 1] >= nums[i] && i > 0) i--;
  
  // swap left of peak with first num greater than it.
  if (i > 0) {
    let j = nums.length - 1;

    while (nums[j] <= nums[i - 1] && i < j) j--;

    [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
  }
  
  // reverse nums between peak idx and end.
  let left = i;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}