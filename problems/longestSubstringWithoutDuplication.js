// ***
function longestSubstringWithoutDuplication(str) {
  const prevIdx = {};
  let longest = [0, 1];
  let startIdx = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in prevIdx) {
      startIdx = Math.max(startIdx, prevIdx[char] + 1);
    }

    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }

    prevIdx[char] = i;
  }

  return str.slice(longest[0], longest[1]);
}

module.exports = longestSubstringWithoutDuplication;