// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

//   nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

//   nums1 = [1, 2]
// nums2 = [3, 4]

// The median is(2 + 3) / 2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const mid = Math.floor(length/2);
  const temp_arr = [];
  let num1, num2;

  while (temp_arr.length <= mid) {
    num1 = nums1[nums1.length - 1] || -Infinity;
    num2 = nums2[nums2.length - 1] || -Infinity;

    if (num1 > num2) {
      temp_arr.push(nums1.pop())
    } else {
      temp_arr.push(nums2.pop());
    }
  }

  if (length & 1) {
    return temp_arr[temp_arr.length - 1]
  } else {
    return (temp_arr[temp_arr.length - 1] + temp_arr[temp_arr.length - 2]) / 2
  }
};

console.log(findMedianSortedArrays([1,3], [2]), 2)
console.log(findMedianSortedArrays([1,2], [3,4]), 2.5)