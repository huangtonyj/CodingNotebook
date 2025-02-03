/*
Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.
*/

function reversePolishNotion(arr: Array<number | string>):number {
    const stack: Array<number> = [];

    arr.forEach(el => {
        if (typeof(el) === 'number') {
            stack.push(el);
        } else {
            const right = stack.pop();
            const left = stack.pop();

            if (el == '+') {
                stack.push(right + left);
            } else if (el == '-') {
                stack.push(right - left);
            } else if (el == '*') {
                stack.push(right * left);
            } else if (el == '/') {
                stack.push(right / left);
            }                
        }
    })

    return stack.pop();
}

console.log(reversePolishNotion([5, 3, '+']), 8)
console.log(reversePolishNotion([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']), 5)