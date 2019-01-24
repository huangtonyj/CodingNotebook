function longestSubstringWithoutDuplication(str) {

  let longest = [];
  let current = [];
  let currentStartIdx = 0;
  let idxHash = {};
  let iLetter;

  for (let i = 0; i < str.length; i++) {
    iLetter = str[i];

    if (idxHash[iLetter]) {
      if (current.length > longest.length) { longest = current; }
      current = current.slice(idxHash[iLetter] - currentStartIdx + 1);
      currentStartIdx = i;
    // } else {
    }
    current.push(iLetter);

    idxHash[iLetter] = i;
    console.log(longest, current, idxHash, currentStartIdx);
    
  }

  return longest.join('');
}

console.log(longestSubstringWithoutDuplication('clementisacap') === 'mentisac');