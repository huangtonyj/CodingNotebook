function intToRoman(num) {
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return `${ M [Math.floor(num / 1000) % 10]}` +
         `${ C [Math.floor(num / 100 ) % 10]}` + 
         `${ X [Math.floor(num / 10  ) % 10]}` +
         `${ I [Math.floor(num / 1   ) % 10]}` ;
}

function romanToInt(str) {
}




console.log(intToRoman(1916) === 'MCMXVI');
console.log(intToRoman(3999) === 'MMMCMXCIX');

console.log(romanToInt('MCMXVI') === 1916);

