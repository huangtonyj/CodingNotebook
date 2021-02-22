// ***
function levenshteinDistance(str1, str2) {
  const mat = [...Array(str1.length + 1)].map(_ => Array(str2.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    mat[i][0] = i;
  }

  for (let j = 0; j <= str2.length; j++) {
    mat[0][j] = j;
  }

  for (let i = 1; i <= str1.length; i++) {
    const char1 = i === 0 ? '' : str1[i - 1];
    for (let j = 1; j <= str2.length; j++) {
      const char2 = j === 0 ? '' : str2[j - 1];

      const top = mat[i -1][j];
      const left = mat[i][j-1];
      const topLeft = mat[i- 1][j-1];

      if (char1 === char2) {
        mat[i][j] = topLeft;
      } else {
        mat[i][j] = Math.min(top, left, topLeft) + 1;
      }
    }
  }

  return mat[str1.length][str2.length];
}

module.exports = levenshteinDistance;

// potential optimzation:
// take min of str1 and str2
// keep only the prev row in memory.