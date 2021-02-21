// ***

function knuthMorrisPrattAlgorithm(str, substr) {
  const substrLPS = getLPS(substr);
  let i = 0;
  let j = 0;

  while (i < str.length && j < substr.length) {
    const letterI = str[i];
    const letterJ = substr[j];

    if (letterI === letterJ) {
      i++;
      j++;
    } else if (j > 0) {
      // find prev pattern of rolling match.
      j = substrLPS[j - 1] + 1;
    } else {
      i++;
    }
  }

  return j === substr.length;
}

function getLPS (substr) {
  const lps = Array(substr.length).fill(-1);
  let i = 1;
  let j = 0;

  while (i < substr.length) {
    const letterI = substr[i];
    const letterJ = substr[j];
    
    if (letterI === letterJ) {
      lps[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      // find prev pattern of rolling match.
      j = lps[j - 1] + 1;
    } else {
      i++;
    }
  }

  return lps;
}

module.exports = knuthMorrisPrattAlgorithm;