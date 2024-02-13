// Given a list of integers, return the largest product that can be made by multiplying any three integers.

// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

// You can assume the list has at least three integers.

function largestThreeProduct(numbers: number[]): number {
  const sorted = numbers.sort();

  const last = sorted[sorted.length - 1];
  const secondLast = sorted[sorted.length - 2];
  const thirdLast = sorted[sorted.length - 3];

  const first = sorted[0];
  const second = sorted[0];

  return last * Math.max(secondLast * thirdLast, first * second);
}

console.log(largestThreeProduct([-10, -10, 5, 2]));
