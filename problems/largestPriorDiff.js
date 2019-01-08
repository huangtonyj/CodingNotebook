function largestPriorDiff(arr) {
  let min = Infinity, ans = 0;

  arr.forEach(el => {
    if (el < min) {
      min = el;
    } else if (el - min > ans) {
      ans = el - min;
    }
  });

  return ans;
}

console.log(largestPriorDiff([3, 1, 7, 4, 9]), 9 - 1);
console.log(largestPriorDiff([3, 9, 7, 4, 1]), 9 - 3);
