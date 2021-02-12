/*
  Write a function that takes in a non-negative integer k and a k-sorted array
  of integers and returns the sorted version of the array. Your function can
  either sort the array in place or create an entirely new array.

  A k-sorted array is a partially sorted array in which all elements are at most
  k positions away from their sorted position. For example, the array
  [3, 1, 2, 2] is k-sorted with k = 2, because each
  element in the array is at most 2 positions away from its sorted position.

  Note that you're expected to come up with an algorithm that can sort the
  k-sorted array faster than in O(nlog(n)) time.

  Sample Input
    array = [3, 2, 1, 5, 4, 7, 6, 5]
    k = 3

  Sample Output
    [1, 2, 3, 4, 5, 5, 6, 7]
*/

const Heap = require('../dataStructures/Heap');

function sortKSortedArray(arr, k) {
  const minHeap = new Heap();
  const sortedArr = [];

  for (const num of arr) {
    minHeap.insert(num);

    if (minHeap.length() > k) sortedArr.push(minHeap.extract());
  }

  while (minHeap.length() > 0) sortedArr.push(minHeap.extract());

  return sortedArr;
}

module.exports = sortKSortedArray;