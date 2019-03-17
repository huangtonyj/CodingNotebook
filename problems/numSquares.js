function numSquares(n) {

  const result = [];

  while (n !== 0) {
    const current = Math.floor(Math.sqrt(n));
    result.push(current);
    n -= current * current;
  }

  return result;
}

console.log(numSquares(13), [3, 2]);
console.log(numSquares(12), [4, 4, 4]);