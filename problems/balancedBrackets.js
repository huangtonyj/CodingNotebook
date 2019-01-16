const Stack = require('../data_structures/Stack');

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

console.log(balancedBrackets('{[()]}'), true);
console.log(balancedBrackets('{[(])}'), false);
console.log(balancedBrackets('{{[[(())]]}}'), true);
