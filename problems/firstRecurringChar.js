// Given a string, return the first recurring character in it, or null if there is no recurring chracter.

// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

function firstRecurringChar(str) {
  const previouslySeen = {};

  for (let char of str) {
    if (previouslySeen[char]) {
      return char;
    } else {
      previouslySeen[char] = true;
    }
  }

  return null;
}

console.log(firstRecurringChar("acbbac")); // b
