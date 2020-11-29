/*
  You're given an array of integers and another array of three distinct
  integers. The first array is guaranteed to only contain integers that are in
  the second array, and the second array represents a desired order for the
  integers in the first array. For example, a second array of
  [x, y, z] represents a desired order of
  [x, x, ..., x, y, y, ..., y, z, z, ..., z] in the first array.

  Write a function that sorts the first array according to the desired order in
  the second array.

  The function should perform this in place (i.e., it should mutate the input
  array), and it shouldn't use any auxiliary space (i.e., it should run with
  constant space: O(1) space).

  Note that the desired order won't necessarily be ascending or descending and
  that the first array won't necessarily contain all three integers found in the
  second array—it might only contain one or two.

  Sample Input
    array = [1, 0, 0, -1, -1, 0, 1, 1]
    order = [0, 1, -1]

  Sample Output
    [0, 0, 0, 1, 1, 1, -1, -1]
*/

function threeNumberSort(arr, order) {
  const orderHash = {};

  for (const num of order) orderHash[num] = [];
  for (const el of arr) orderHash[el].push(el);

  return orderHash[order[0]].concat(orderHash[order[1]], orderHash[order[2]]);
}

function threeNumberSort2(arr, order) {
  const orderHash = {};

  order.forEach((el, idx) => {
    orderHash[el] = idx;
  });

  let firstIdx = 0;
  let secondIdx = 0;
  let thirdIdx = arr.length - 1;

  while (secondIdx <= thirdIdx) {
    const current = arr[secondIdx];

    if (orderHash[current] === 0) {
      swap(firstIdx, secondIdx, arr);
      firstIdx++;
      secondIdx++;
    } else if (orderHash[current] === 1) {
      secondIdx++;
    } else if (orderHash[current] === 2) {
      swap(secondIdx, thirdIdx, arr);
      thirdIdx--;
    }
  }

  return arr;
}

function swap(firstIdx, secondIdx, arr) {
  const temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
}

console.log(
  threeNumberSort(
    [1, 0, 0, -1, -1, 0, 1, 1],
    [0, 1, -1]
  )
);