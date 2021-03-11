/*
  Given two binary strings a and b, return their sum as a binary string.
  
  Example 1:
    Input: a = "11", b = "1"
    Output: "100"
  
  Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"
*/

function addBinary(a, b) {
  let res = [];
  let digit = 0;
  let carry = 0;
  
  while (digit < a.length || digit < b.length) {
    const valueA = parseInt(a[a.length - digit - 1]) || 0;
    const valueB = parseInt(b[b.length - digit - 1]) || 0;
    const sum = valueA + valueB + carry;
    
    if (sum > 1) {
      carry = 1;
      res.unshift(sum - 2);
    } else {
      carry = 0;
      res.unshift(sum);
    }
    digit++;
  }
  
  if (carry) res.unshift(carry);
  
  return res.join('');
}