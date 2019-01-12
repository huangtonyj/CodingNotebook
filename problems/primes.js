// First n prime numbers
function isPrime(num) {
  let ans = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ans = false;
    }
  }
  return ans;
}

function primes(n) {
  const result = [];
  let i = 2;

  while (result.length < n) {
    if (isPrime(i)) {
      result.push(i);
    }
    i++;
  }

  return result;
}

console.log(primes(7), [2, 3, 5, 7, 11, 13, 17]);