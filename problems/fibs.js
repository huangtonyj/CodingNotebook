

// Recursion
const r_fibs = (n) => {
  if (n == 1) { return 0 }
  if (n == 2) { return 1 }
  return r_fibs(n-1) + r_fibs(n-2)
}


console.log(r_fibs(2))
console.log(r_fibs(3))
console.log(r_fibs(4))
console.log(r_fibs(5))
console.log(r_fibs(6))
console.log(r_fibs(7))
console.log(r_fibs(8))
console.log(r_fibs(45))

