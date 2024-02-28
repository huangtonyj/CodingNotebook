/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * @param {number[]} nums
 * @return {boolean}
 *
 */
function increasingTriplet1(nums) {
  const nexts = new Array(nums.length).fill(null);

  nums.forEach((num, i) => {
    let nextIdx = null;

    for (let j = nums.length; j > i; j--) {
      const potentialNext = nums[j];

      if (
        potentialNext > num &&
        (potentialNext <= nums[nextIdx] || nextIdx == null)
      ) {
        nextIdx = j;
      }
    }
    if (nextIdx !== Infinity) nexts[i] = nextIdx;
  });

  return nexts.some((nextStepIdx) => {
    const nextNextStepIdx = nexts[nextStepIdx];

    if (nextStepIdx && nextNextStepIdx) return true;

    return false;
  });
}

function increasingTriplet2(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num < secondSmallest) {
      if (num <= smallest) {
        smallest = num;
      } else {
        secondSmallest = num;
      }
    } else if (num > secondSmallest && num > smallest) {
      return true;
    }
  }
  return false;
}

const increasingTriplet = increasingTriplet2;
console.log(increasingTriplet([1, 2, 3, 4, 5]), true);
console.log(increasingTriplet([5, 4, 3, 2, 1]), false);
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]), true);
console.log(increasingTriplet([9, 10, 5, 11, 10, 9, 8]), true);
console.log(increasingTriplet([1, 1, -2, 6]), false);
