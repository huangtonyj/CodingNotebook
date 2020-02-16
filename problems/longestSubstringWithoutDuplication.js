function longestSubstringWithoutDuplication(str) {
  const hash = {};
  let pointer = 0;
  let longest = '';

  str.split('').forEach((char, idx) => {
    // console.log(char, idx);

    const prevCharIdx = hash[char];

    if (prevCharIdx && prevCharIdx > pointer) {
      const current = str.slice(pointer, idx);
      console.log(current);

      if (current.length > longest.length) longest = current;
      
      pointer = prevCharIdx + 1;
    }

    hash[char] = idx;

  });

  const lastSegment = str.slice(pointer);

  if (lastSegment.length > longest.length) longest = lastSegment;

  return longest;
}

module.exports = longestSubstringWithoutDuplication;


console.log(longestSubstringWithoutDuplication('abcdeabcdefc'));
// console.log(longestSubstringWithoutDuplication('a'));
// console.log(longestSubstringWithoutDuplication('clementisacap'));