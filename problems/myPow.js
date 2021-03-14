// ***
/*
  Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

  Example 1:
    Input: x = 2.00000, n = 10
    Output: 1024.00000
    
  Example 2:
    Input: x = 2.10000, n = 3
    Output: 9.26100
    
  Example 3:
    Input: x = 2.00000, n = -2
    Output: 0.25000
    Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/


// O(log n)
function myPow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const logHalf = myPow(x, Math.floor(n / 2));
  
  if (n % 2 === 0) {
    return logHalf * logHalf;
  } else {
    return logHalf * logHalf * x;
  }
}

// Brute Force O(n)
function myPow0(x, n) {
  let ans = 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  
  for (let i = 0; i < n; i++) ans *= x;
  
  return ans;
}

console.log(
  myPow(2, 10) === 1024,
  (myPow(2.1, 3) - 9.261) < 0.0000001,
  myPow(2.0, -2) === 0.25,
  myPow(-1, 2147483647) === -1
);