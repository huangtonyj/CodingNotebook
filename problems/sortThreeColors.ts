/**
    https://leetcode.com/problems/sort-colors/
    
    Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

    We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

    You must solve this problem without using the library's sort function.

    Example 1:
    Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
    
    Example 2:
    Input: nums = [2,0,1]
    Output: [0,1,2]

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function sortThreeColors(nums: number[]): void {
  let pointer0 = -1;
  let pointer1 = 0;
  let pointer2 = nums.length;

  while (pointer1 < pointer2) {
    const num = nums[pointer1];

    if (num == 0) {
      pointer0++;
      swap(nums, pointer0, pointer1);
      pointer1++;
    } else if (num == 2) {
      pointer2--;
      swap(nums, pointer2, pointer1);
    } else {
      pointer1++;
    }
  }

  return nums;
}

function swap(arr: number[], pointerA: number, pointerB: number) {
  [arr[pointerA], arr[pointerB]] = [arr[pointerB], arr[pointerA]];
}
