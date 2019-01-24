function longestSubstringWithoutDuplication(str) {

  let longest = [];
  let current = [];
  let currentStartIdx = 0;
  let idxHash = {};

  for (let i = 0; i < str.length; i++) {
    const iLetter = str[i];

    if (idxHash[iLetter]) {
      longest = (current.length > longest.length) ? current : longest;
      current = current.slice(idxHash[iLetter] - currentStartIdx + 1);
      currentStartIdx = i;
    }

    current.push(iLetter);
    idxHash[iLetter] = i;
    // console.log(longest, current, idxHash, currentStartIdx);
  }

  return longest.join('');
}


console.log(longestSubstringWithoutDuplication('clementisacap') === 'mentisac');