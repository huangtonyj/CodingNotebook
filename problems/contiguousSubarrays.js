// **
/*
  Contiguous Subarrays
    You are given an array arr of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfills the following conditions:
    The value at index i must be the maximum element in the contiguous subarrays, and
    These contiguous subarrays must either start from or end on index i.

  Signature
    int[] countSubarrays(int[] arr)

  Input
    Array arr is a non-empty list of unique integers that range between 1 to 1,000,000,000
    Size N is between 1 and 1,000,000

  Output
    An array where each index i contains an integer denoting the maximum number of contiguous subarrays of arr[i]

  Example:
    arr = [3, 4, 1, 6, 2]
    output = [1, 3, 1, 5, 1]

  Explanation:
    For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
    For index 1 - [4], [3, 4], [4, 1]
    For index 2 - [1]
    For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
    For index 4 - [2]
    So, the answer for the above input is [1, 3, 1, 5, 1]
*/

/*
  O(n) time O(n) space
  Built left + build right - duplicate.
  Build left:
    Use a stack to push each elements
    Before pushing i-th element, 
    pop all prior smallesr elements and add their counts to current;
*/



/*
  O(n^2) time O(n) space
  Traverse arr and branch out in both directions and count;
*/
function contiguousSubarrays1(arr) {
  const ans = arr.map(_ => 1);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] < num) {
      ans[i]++;
      j--;
    }
    
    j = i + 1;
    while (j < arr.length && arr[j] < arr[i]) {
      ans[i]++;
      j++;
    }
  }

  return ans;
}

console.log(contiguousSubarrays([3, 4, 1, 6, 2]), [1, 3, 1, 5, 1]);
console.log(contiguousSubarrays([2, 4, 7, 1, 5, 3]), [1, 2, 6, 1, 3, 1]);