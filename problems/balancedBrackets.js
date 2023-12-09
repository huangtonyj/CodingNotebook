function balancedBrackets(str) {
  const stack = [];
  const openingBracket = new Set(["{", "[", "("]);
  const closingBracket = new Set(["}", "]", ")"]);
  const bracketPair = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of str.split("")) {
    if (!openingBracket.has(char) && !closingBracket.has(char)) {
      return; // skip, not a bracket
    } else if (openingBracket.has(char)) {
      stack.push(char);
    } else if (closingBracket.has(char)) {
      const lastOpenBracket = stack[stack.length - 1];
      if (bracketPair[char] === lastOpenBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = balancedBrackets;
