function reversePolishNotation(notations) {
  const stack = [];

  notations.forEach((char) => {
    if (typeof char === 'number') {
      stack.push(char);
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const newNum = eval(`${num2} ${char} ${num1}`);
      stack.push(newNum);
    }
  });

  return stack.pop();
}

console.log(reversePolishNotation([5, 3, '+']), 8);
console.log(reversePolishNotation([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']), 5);