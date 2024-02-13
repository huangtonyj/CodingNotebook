// Given an integer n,
// return the length of the longest consecutive run of 1s in its binary representation.

// For example, given 156, you should return 3.

function longestBinaryRepresentation(num: number) {
  const binary = getBinary(num);

  return countLongestRun(binary);
}

const getBinary = (num: number): number[] => {
  const stack = [2];
  let last = stack[stack.length - 1];

  while (num > last) {
    const next = last * 2;
    stack.push(next);
    last = next;
  }

  let runningNum = num;
  const binary = [];

  while (stack.length > 0) {
    const binaryNum = stack.pop();

    if (runningNum >= binaryNum) {
      runningNum -= binaryNum;
      binary.push(1);
    } else {
      binary.push(0);
    }
  }

  return binary;
};

const countLongestRun = (arr: number[]): number => {
  let longest = 0;
  let counter = 0;

  for (const num of arr) {
    if (num === 1) {
      counter += 1;
    } else if (num === 0) {
      longest = Math.max(longest, counter);
      counter = 0;
    }
  }

  return Math.max(longest, counter);
};

// console.log(getBinary(156));
console.log(longestBinaryRepresentation(156));
