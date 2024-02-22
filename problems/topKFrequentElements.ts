import { Heap } from "heap-js";

/*
    https://leetcode.com/problems/top-k-frequent-elements/description/
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

    Example 2:
    Input: nums = [1], k = 1
    Output: [1]
*/

function topKFrequentElements(nums: number[], k): number[] {
  const counts = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const customPriorityComparator = (a, b) => a.count - b.count;
  const heap = new Heap(customPriorityComparator);
  
  Object.entries(counts).forEach(([key, count]) => {
    heap.push({
      key, count
    })

    if (heap.length > k) heap.pop();
  })

  return heap.toArray().map(el => parseInt(el.key))
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequentElements([4,1,-1,2,-1,2,3], 2), [-1, 2]);
