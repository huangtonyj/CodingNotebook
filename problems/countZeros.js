// Count Total number of zeros from 1 upto n ?

function countZeros(n) {
  let total = 0;
  while (n > 0) {
    total += Math.floor(n / 10);
    n /= 10;
  }
  return total;
}

console.log(countZeros(10), 1);
console.log(countZeros(99), 9); // 10 20 30 40 50 60 70 80 90
console.log(countZeros(100), 11); // 10 20 30 40 50 60 70 80 90 100
console.log(countZeros(999), 108); 
console.log(countZeros(1000), 111); // countZeros(999) + 3; 
console.log(countZeros(2014), 223);