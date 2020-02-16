function longestSubstringWithoutDuplication(str) {
  const hash = {};
  let startPointer = 0;
  let longest = '';

  str.split('').forEach((char, idx) => {
    const prevCharIdx = hash[char];

    if (prevCharIdx !== undefined && prevCharIdx >= startPointer) {
      const current = str.slice(startPointer, idx);
      if (current.length > longest.length) longest = current;  
      startPointer = prevCharIdx + 1;
    }

    hash[char] = idx;
  });

  const lastSegment = str.slice(startPointer);
  if (lastSegment.length > longest.length) longest = lastSegment;

  return longest;
}

module.exports = longestSubstringWithoutDuplication;