function isValidAbbr(word, abbr) {
  let wordPointer = 0;
  let abbrPointer = 0;

  while (wordPointer < word.length || abbrPointer < abbr.length) {
    const currentAbbr = _getAbr(abbr, abbrPointer);
    const currentChar = word[wordPointer];

    if (currentAbbr === currentChar) {
      wordPointer++;
      abbrPointer++;
    } else if (Number.isInteger(currentAbbr)) {
      if ((word.length - wordPointer) < currentAbbr) return false;
      
      wordPointer += currentAbbr;
      abbrPointer += currentAbbr.toString().length;
    } else {
      return false;
    }
  }

  return abbrPointer === abbr.length && wordPointer === word.length;
}

function _getAbr(abbr, abbrPointer) {
  let currentAbbr = abbr[abbrPointer];
  let res = [];

  while (Number.isInteger(parseInt(currentAbbr))) {
    res.push(currentAbbr);
    abbrPointer++;
    currentAbbr = abbr[abbrPointer];
  }

  return res.length === 0 ? currentAbbr: parseInt(res.join(''));
}

console.log(isValidAbbr('facebook', 'f6k'), true);
console.log(isValidAbbr('facebook', 'f7'), true);
console.log(isValidAbbr('facebook', 'f8'), false);
console.log(isValidAbbr('internationally', 'i12ly'), true);
console.log(isValidAbbr('internationally', 'i14ly'), false);