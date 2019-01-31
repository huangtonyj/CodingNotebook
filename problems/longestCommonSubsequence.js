// https://www.dailycodingproblem.com/solution/209?token=fce286c30aaaa7ee9bba1af494bb2e886850e1851a9d964bb2b7403d05587f864ac8bd3a

function longestCommonSubsequence(strA, strB) {
  // 2D matrix

  strA = strA.split('').entries();
  strB = strB.split('').entries();

  for (let a of strA) {
    console.log(a);
  }

}

console.log(longestCommonSubsequence('refrigeration', 'edidemiologist'), 5); // eieio
console.log(longestCommonSubsequence('refrigeration', 'edidemiologistn'), 6); // eieion
