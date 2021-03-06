// Given a positive integer N, find the smallest number of steps it will take to reach 1.

// There are two kinds of permitted steps:
// You may decrement N to N - 1.
// If a * b = N, you may decrement N to the larger of a and b.

// For example, given 100, you can reach 1 in five steps with the following route: 100 - > 10 - > 9 - > 3 - > 2 - > 1.

function stepToOne (n) {
  const queue = [];
  let current = {n: n, steps: []};

  while (current.n !== 1) {
    queue.push({
      n: decrementOne(current.n),
      steps: [...current.steps, current.n]
    });

    queue.push({
      n: maxSquareRoot(current.n),
      steps: [...current.steps, current.n]
    });

    current = queue.shift();
  }

  return [...current.steps, current.n];
}

const decrementOne = (n) => n - 1;

const maxSquareRoot = (n) => {
 let ceilSqrt = Math.ceil(Math.sqrt(n));
 while (n % ceilSqrt !== 0) ceilSqrt++;
 return ceilSqrt;
};

console.log(stepToOne(100));