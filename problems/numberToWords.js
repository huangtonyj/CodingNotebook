
const numToStringMap = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'Hundred'
};
  
function numberToWords(num) {
  if (num === 0) return 'Zero';
  
  let ans = [];
  const billions = Math.floor(num / 1000000000);
  const millions = Math.floor(num / 1000000) - billions * 1000;
  const thousands = Math.floor(num / 1000) - billions * 1000000 - millions * 1000;
  const ones = num % 1000;

  if (billions) {
    ans.push(_getUnderHundredStr(billions), 'Billion');
  }
  if (millions) {
    ans.push(_getUnderHundredStr(millions), 'Million');
  }
  if (thousands) {
    ans.push(_getUnderHundredStr(thousands), 'Thousand');
  }
  if (ones) {
    ans.push(_getUnderHundredStr(ones));
  }
  
  return ans.join(' ');  
}

function _getUnderHundredStr(num) {
  const hundreds = Math.floor(num / 100);
  const tens = Math.floor((num - (hundreds * 100)) / 10);
  const ones = num - (hundreds * 100) - (tens * 10);

  let ans = [];
  
  if (hundreds > 0) {
    ans.push(numToStringMap[hundreds]);
    ans.push('Hundred');
  }
  
  if (tens === 1) {
    ans.push(numToStringMap[tens * 10 + ones]);
  } else if (tens > 1 ) {
    ans.push(numToStringMap[tens * 10]);
  } 
  
  if (tens !== 1 && ones !== 0) {
    ans.push(numToStringMap[ones]);
  }
  
  return ans.join(' ');
}

// console.log(
//   numberToWords(0), '\n',
//   "Zero"
// );

// console.log(
//   numberToWords(19), '\n',
//   "Nineteen"
// );

// console.log(
//   numberToWords(20), '\n',
//   "Twenty"
// );

// console.log(
//   numberToWords(123), '\n',
//   "One Hundred Twenty Three"
// );

// console.log(
//   numberToWords(12345), '\n',
//   "Twelve Thousand Three Hundred Forty Five"
// );

// console.log(
//   numberToWords(1234567), '\n',
//   "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// );

// console.log(
//   numberToWords(1234567891), '\n',
//   "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
// );