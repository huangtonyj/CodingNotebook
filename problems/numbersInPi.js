/*
  Given a string representation of the first n digits of Pi and a list of
  positive integers (all in string format), write a function that returns the
  smallest number of spaces that can be added to the n digits of Pi such that
  all resulting numbers are found in the list of integers.

  Note that a single number can appear multiple times in the resulting numbers.
  For example, if Pi is "3141" and the numbers are
  ["1", "3", "4"], the number "1" is allowed to appear
  twice in the list of resulting numbers after three spaces are added:
  "3 | 1 | 4 | 1".

  If no number of spaces to be added exists such that all resulting numbers are
  found in the list of integers, the function should return
  -1.

  Sample Input
    pi = "3141592653589793238462643383279",
    numbers = ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]
    
  Sample Output
    2 // "314159265 | 35897932384626433832 | 79"
*/

function numbersInPi(pi, numbers) {
  const numGroup = _groupNumByPrefix(numbers);
	const smallestCount = _backTrack(pi, numGroup);

  return smallestCount === Infinity ? -1 : smallestCount;
}

function _groupNumByPrefix(numbers) {
  const group = {};

  for (const num of numbers) {
    const prefix = num[0];

    if (!(prefix in group)) group[prefix] = [];

    group[prefix].push(num);
  }

  return group;
}

function _backTrack(pi, group, idx = 0, count = -1) {
  if (idx === pi.length) return count;

  const prefix = pi[idx];
  const nextNumSet = group[prefix] || [];
  let smallestCount = Infinity;

  for (const num of nextNumSet) {
    const length = num.length;

    if (num === pi.slice(idx, idx + length)) {
      const potentialCount = _backTrack(pi, group, idx + length, count + 1);

      smallestCount = Math.min(smallestCount, potentialCount);
    }
  }

  return smallestCount;
}

module.exports = numbersInPi;