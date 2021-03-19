// ***
// O(n * m) time O(min(n,m)) space
// Similar to levenshteinDistance2 but only keeps shorter of strA, strB as prev row in memory;
function levenshteinDistance(strA, strB) {
  if (strA.length < strB.length) [strA, strB] = [strB, strA];

  let prev = [...Array(strA.length + 1)].map((el, idx) => idx);

  for (let b = 1; b <= strB.length; b++) {
    const current = [b];
    
    for (let a = 1; a <= strA.length; a++) {
      const charA = strA[a - 1];
      const charB = strB[b - 1];

      if (charA === charB) {
        const topLeft = prev[a - 1];

        current.push(topLeft);
      } else {
        const top = prev[a];
        const left = current[a - 1];
        const topLeft = prev[a - 1];

        current.push(Math.min(top, left, topLeft) + 1);
      }
    }
    
    prev = current;
  }
  
  return prev[strA.length];
}

// O(n * m) time O(n * m) space
function levenshteinDistance2(str1, str2) {
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