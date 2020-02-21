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