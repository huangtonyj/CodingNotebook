/*
  Write a function that takes in a string made up of parentheses ((
  and )). The function should return an integer representing the
  length of the longest balanced substring with regards to parentheses.


  A string is said to be balanced if it has as many opening parentheses as it
  has closing parentheses and if no parenthesis is unmatched. Note that an
  opening parenthesis can't match a closing parenthesis that comes before it,
  and similarly, a closing parenthesis can't match an opening parenthesis that
  comes after it.

  Sample Input
  string = "(()))("

  Sample Output
  4 // The longest balanced substring is "(())".
*/

function longestBalancedSubstring(str) {
  let longest = 0;
  let openParenthesesCount = 0;
  let closeParenthesesCount = 0;

  for (let i = 0; i < str.length; i++) {
    const parentheses = str[i];

    if (parentheses === '(') {
      openParenthesesCount++;
    } else if (openParenthesesCount > closeParenthesesCount) {
      closeParenthesesCount++;

      if (openParenthesesCount === closeParenthesesCount) longest = Math.max(longest, closeParenthesesCount * 2);
    } else {
      openParenthesesCount = 0;
      closeParenthesesCount = 0;
    }
  }

  openParenthesesCount = 0;
  closeParenthesesCount = 0;

  for (let i = str.length - 1; i >0; i--) {
    const parentheses = str[i];

    if (parentheses === ')') {
      closeParenthesesCount++;
    } else if (closeParenthesesCount > openParenthesesCount) {
      openParenthesesCount++;

      if (openParenthesesCount === closeParenthesesCount) longest = Math.max(longest, openParenthesesCount * 2);
    } else {
      openParenthesesCount = 0;
      closeParenthesesCount = 0;
    }
  }

  return longest;
}

// console.log('\n',
//   longestBalancedSubstring('(()))('), 4, '\n',
//   longestBalancedSubstring('())()(()())'), 8, '\n',
//   longestBalancedSubstring('(((((((((((((((((()'), 2, '\n',
//   longestBalancedSubstring('()(()'), 2, '\n',
// );