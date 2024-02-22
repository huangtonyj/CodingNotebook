function twoSum(numbers, target) {
  const mySet = new Set();
  let ans = [];

  numbers.forEach((value) => {
    if (mySet.has(target - value)) {
      ans = [target - value, value];
    }
    mySet.add(value);
  });

  return ans;
}

module.exports = twoSum;
