// ***
/*
  You're given two non-empty strings. The first one is a pattern consisting of
  only "x"s and / or "y"s; the other one is a normal
  string of alphanumeric characters. Write a function that checks whether the
  normal string matches the pattern.

  A string S0 is said to match a pattern if replacing all
  "x"s in the pattern with some non-empty substring
  S1 of S0 and replacing all "y"s in the
  pattern with some non-empty substring S2 of
  S0 yields the same string S0.

  If the input string doesn't match the input pattern, the function should
  return an empty array; otherwise, it should return an array holding the
  strings S1 and S2 that represent
  "x" and "y" in the normal string, in that order. If
  the pattern doesn't contain any "x"s or "y"s, the
  respective letter should be represented by an empty string in the final array
  that you return.

  You can assume that there will never be more than one pair of strings
  S1 and S2 that appropriately represent
  "x" and "y" in the normal string.

  Sample Input
    pattern = "xxyxxy"
    string = "gogopowerrangergogopowerranger"

  Sample Output
    ["go", "powerranger"]
*/

function patternMatcher(pattern, string) {
  const counts = getCounts(pattern);

  // Get possible combination of lens of y given looping x and string.length;
  // Check if possible pattern substring of X and Y matches up
  for (let xLength = 0; xLength <= string.length / counts['x']; xLength++) {
    const yLength = (string.length - counts['x'] * xLength) / counts['y'] || 0;

    if (!Number.isInteger(yLength)) { continue; }

    let strIdx = 0;
    let patternDict = {};
    let currentXCount = 0;
    let currentYCount = 0;

    for (const char of pattern.split('')) {
      if (char ==='x') {
        currentXCount++;
      } else {
        currentYCount++;
      }
      
      const length = char === 'x' ? xLength : yLength;
      const current = string.slice(strIdx, strIdx + length);

      strIdx += length;
      if (current === '' && counts[char] !== 0) break;

      if (!patternDict[char]) {
        patternDict[char] = current;
      } else if (patternDict[char] !== current) {
        patternDict = null;
        break;
      }
    }

    if (patternDict && currentXCount === counts['x'] && currentYCount === counts['y']) {
      patternDict.x = patternDict.x || '';
      patternDict.y = patternDict.y || '';
      return patternDict;
    }
  }

  return {};
}

const getCounts = (str) => {
  const counts = {
    x: 0,
    y: 0
  };

  str.split('').forEach((char) => {
    counts[char]++;
  });

  return counts;
};

module.exports = patternMatcher;