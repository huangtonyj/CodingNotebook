function knuthMorrisPrattAlgorithm(str, substr) {

}

function getLPS (substr) {
  const lps = Array(substr.length).fill(-1);

  let i = 1;
  let j = 0;

  while (i < substr.length) {
    const letterI = substr[i];
    const letterJ = substr[j];

    console.table({j, i, letterJ, letterI});
    

    if (letterI === letterJ) {
      lps[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = lps[j - 1] + 1;
    } else {
      i++;
    }
  }

  return lps;
}
