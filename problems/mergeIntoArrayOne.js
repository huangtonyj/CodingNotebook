// ***
/*
  Given two sorted integer arrays arr1 and arr2, merge arr2 into arr1 as one sorted array.

  The number of elements initialized in arr1 and arr2 are m and n respectively. 
  You may assume that arr1 has a size equal to m + n such that it has enough space to hold additional elements from arr2.

  Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, arr2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
  Example 2:
    Input: nums1 = [1], m = 1, arr2 = [], n = 0
    Output: [1]
*/

// Build from the end of arr1 until arr2 is taken care of.
function mergeIntoArrayOne(arr1, m, arr2, n) {
  let currentIdx = m + n - 1;
  let idx1 = m - 1;
  let idx2 = n - 1;
  
  while (idx2 >= 0) { // if idx2 is done, the rest of arr1 is sorted
    const num1 = arr1[idx1];
    const num2 = arr2[idx2];

    if (num1 > num2) {
      arr1[currentIdx] = num1;
      idx1--;
    } else {
      arr1[currentIdx] = num2;
      idx2--;
    }
    
    currentIdx--;
  }
  // console.log(arr1);
}

// mergeIntoArrayOne([1,2,3,0,0,0], 3, [2, 5, 6], 3);
// mergeIntoArrayOne([1], 1, [], 0); // [1]
// mergeIntoArrayOne([0], 0, [1], 1); // [1]
// mergeIntoArrayOne([-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3);