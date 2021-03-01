// ***
/*
  You're given an array of arrays where each subarray holds two integer values
  and represents an item; the first integer is the item's value, and the second
  integer is the item's weight. You're also given an integer representing the
  maximum capacity of a knapsack that you have.

  Your goal is to fit items in your knapsack without having the sum of their
  weights exceed the knapsack's capacity, all the while maximizing their
  combined value. Note that you only have one of each item at your disposal.

  Write a function that returns the maximized combined value of the items that
  you should pick as well as an array of the indices of each item picked.

  If there are multiple combinations of items that maximize the total value in
  the knapsack, your function can return any of them.

  Sample Input
    items = [[1, 2], [4, 3], [5, 6], [6, 7]]
    capacity = 10

  Sample Output
    [10, [1, 3]] // items [4, 3] and [6, 7]
*/

function knapsackProblem(items, capacity) {
  let bestValueIdx = 0;
  const valueArr = Array(capacity + 1).fill(0);
  const indicesArr = [...Array(capacity + 1)].map(r => Array(0));

  for (let currentWeight = 0; currentWeight < capacity; currentWeight++) {
    for (let itemIdx = 0; itemIdx < items.length; itemIdx++) {
      const currentValue = valueArr[currentWeight];

      const [itemValue, itemWeight] = items[itemIdx];

      const newWeight = currentWeight + itemWeight;
      const newValue = currentValue + itemValue;

      const nextValue = valueArr[newWeight];
      const isItemDuplicate = indicesArr[currentWeight].find(idx => idx === itemIdx) !== undefined;

      if (newValue > nextValue && !isItemDuplicate) {
        valueArr[newWeight] = newValue;
        indicesArr[newWeight] = [...indicesArr[currentWeight], itemIdx];
        bestValueIdx = newValue > valueArr[bestValueIdx] ? newWeight : bestValueIdx;
      }
    }
  }
  
  return [valueArr[bestValueIdx], indicesArr[bestValueIdx]];  
}

module.exports = knapsackProblem;