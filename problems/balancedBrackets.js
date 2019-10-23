const Stack = require('../dataStructures/Stack');

function balancedBrackets(str) {
  const stack = new Stack();
  const bracketPair = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  str.split('').forEach((char) => {
    if ( bracketPair[char] === stack.peek() ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });
  
  return stack.isEmpty();
}

module.exports = balancedBrackets;