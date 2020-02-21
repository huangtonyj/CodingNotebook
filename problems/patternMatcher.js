function patternMatcher(pattern, string) {
  const counts = {
    x: 0,
    y: 0
  };

  pattern.split('').forEach((char) => {
    counts[char]++;
  });

  for (let xLength = 0; xLength <= string.length / counts['x']; xLength++) {
    const yLength = (string.length - counts['x'] * xLength) / counts['y'] || 0;

    if (!Number.isInteger(yLength)) { continue; }

    let idx = 0;
    let log = {};
    let currentXCount = 0;
    let currentYCount = 0;

    for (const char of pattern.split('')) {
      const length = char === 'x' ? xLength : yLength;

      if (char ==='x') {
        currentXCount++;
      } else {
        currentYCount++;
      }
      
      const current = string.slice(idx, idx + length);

      if (current === '' && counts[char] !== 0) break;


      idx += length;

      if (!log[char]) {
        log[char] = current;
      } else if (log[char] !== current) {
        log = null;
        break;
      }

    }

    if (log && currentXCount === counts['x'] && currentYCount === counts['y']) {
      log.x = log.x || '';
      log.y = log.y || '';
      return log;
    }
  }

  return {};
}

module.exports = patternMatcher;

// console.log(patternMatcher('yxx', 'yomama'), ['ma', 'yo']);
// console.log(patternMatcher('yyxyyx', 'gogopowerrangergogopowerranger'), ['ma', 'yo']);
// console.log(patternMatcher(
//   'xyxxxyyx',
//   'baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom'
// ), ['baddaddoom', 'baddaddoomi']);
// console.log(patternMatcher('xxxx', 'testtesttesttest'), ['test', '']);  
// console.log(patternMatcher('yyyy', 'testtesttesttest'), ['', 'test']);