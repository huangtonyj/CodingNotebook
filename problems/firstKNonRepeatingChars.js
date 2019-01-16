function firstKNonRepeatingChars(str, k) {
  str = str.split("");
  const result = [];
  const counts = {};
  
  str.forEach(char => {
    if (!counts[char]) {counts[char] = 0;}
    counts[char] += 1;
  });


  for (let i = 0; i < str.length; i++) {
    if (result.length === k) { break; }
    if (counts[str[i]] === 1) { result.push(str[i]); }
  }

  return result;
}

console.log(firstKNonRepeatingChars('ABCDBAGHCHFAC', 3), "['D', 'G', 'F']");
console.log(firstKNonRepeatingChars('ABCDBAGHCHFAC', 2), "['D', 'G']");