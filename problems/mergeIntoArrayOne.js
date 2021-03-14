// ***
/*
  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

  The number of elements initialized in nums1 and nums2 are m and n respectively. 
  You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

  Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
  Example 2:
    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
*/

function mergeIntoArrayOne(nums1, m, nums2, n) {
  let currentIdx = m + n - 1;
  let idx1 = m - 1;
  let idx2 = n - 1;
  
  while (idx2 >= 0) { // if idx2 is done, the rest of arr1 is sorted
    const num1 = nums1[idx1];
    const num2 = nums2[idx2];

    if (num1 > num2) {
      nums1[currentIdx] = num1;
      idx1--;
    } else {
      nums1[currentIdx] = num2;
      idx2--;
    }
    
    currentIdx--;
  }
  // console.log(nums1);
}

// mergeIntoArrayOne([1,2,3,0,0,0], 3, [2, 5, 6], 3);
// mergeIntoArrayOne([1], 1, [], 0); // [1]
// mergeIntoArrayOne([0], 0, [1], 1); // [1]
// mergeIntoArrayOne([-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3);