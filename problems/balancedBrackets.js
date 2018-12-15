const Stack = require('../data_structures/Stack');

function balancedBrackets(str) {
  const stack = new Stack();
  const bracketPair = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  str.split('').forEach((char) => {
    if ( bracketPair[char] === stack.peek() ) {
      stack.pop()
    } else {
      stack.push(char);
    }
  })
  
  return stack.isEmpty() ? 'YES' : 'NO'
}

console.log(balancedBrackets('{[()]}'), 'YES');
console.log(balancedBrackets('{[(])}'), 'NO');
console.log(balancedBrackets('{{[[(())]]}}'), 'YES');
