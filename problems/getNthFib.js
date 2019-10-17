// Dynamic Programming
function getNthFibDP(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let n2 = 0;
  let n1 = 1;
  let n0;

  for (let i = 3; i <= n; i++) {
    n0 = n1 + n2;
    n2 = n1;
    n1 = n0;
  }

  return n0;
}

// Recursion
function getNthFibRecursive(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFibRecursive(n - 1) + getNthFibRecursive(n - 2);
}

module.exports = {
  getNthFibDP,
  getNthFibRecursive
};