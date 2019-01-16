// Dynamic Programming
const dp_fibs = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;

  let n2 = 0;
  let n1 = 1;
  let n0;

  for (let i = 3; i <= n; i++) {
    n0 = n1 + n2;
    n2 = n1;
    n1 = n0;
  }

  return n0;
};

console.log(dp_fibs(2));
console.log(dp_fibs(3));
console.log(dp_fibs(4));
console.log(dp_fibs(5));
console.log(dp_fibs(6));
console.log(dp_fibs(7));
console.log(dp_fibs(8));
console.log(dp_fibs(45));

// Recursion
const r_fibs = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return r_fibs(n-1) + r_fibs(n-2);
};

console.log(r_fibs(2));
console.log(r_fibs(3));
console.log(r_fibs(4));
console.log(r_fibs(5));
console.log(r_fibs(6));
console.log(r_fibs(7));
console.log(r_fibs(8));
console.log(r_fibs(45));

