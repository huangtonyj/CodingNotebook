const MinMaxStack = require('../../dataStructures/MinMaxStack');

function testMinMaxPeek(min, max, peek, stack) {
  expect(stack.getMin()).toEqual(min);
  expect(stack.getMax()).toEqual(max);
  expect(stack.peek()).toEqual(peek);
}

describe('MinMaxStack()', () => {
  test('Test Case #1', () => {
    const stack = new MinMaxStack();
    stack.push(2);
    testMinMaxPeek(2, 2, 2, stack);
    stack.push(7);
    testMinMaxPeek(2, 7, 7, stack);
    stack.push(1);
    testMinMaxPeek(1, 7, 1, stack);
    stack.push(8);
    testMinMaxPeek(1, 8, 8, stack);
    stack.push(3);
    testMinMaxPeek(1, 8, 3, stack);
    stack.push(9);
    testMinMaxPeek(1, 9, 9, stack);
    expect(stack.pop()).toEqual(9);
    testMinMaxPeek(1, 8, 3, stack);
    expect(stack.pop()).toEqual(3);
    testMinMaxPeek(1, 8, 8, stack);
    expect(stack.pop()).toEqual(8);
    testMinMaxPeek(1, 7, 1, stack);
    expect(stack.pop()).toEqual(1);
    testMinMaxPeek(2, 7, 7, stack);
    expect(stack.pop()).toEqual(7);
    testMinMaxPeek(2, 2, 2, stack);
    expect(stack.pop()).toEqual(2);
  });

  test('Test Case #2', () => {
    const stack = new MinMaxStack();
    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(5);
    testMinMaxPeek(5, 5, 5, stack);
    stack.push(8);
    testMinMaxPeek(5, 8, 8, stack);
    stack.push(8);
    testMinMaxPeek(5, 8, 8, stack);
    stack.push(0);
    testMinMaxPeek(0, 8, 0, stack);
    stack.push(8);
    testMinMaxPeek(0, 8, 8, stack);
    stack.push(9);
    testMinMaxPeek(0, 9, 9, stack);
    stack.push(5);
    testMinMaxPeek(0, 9, 5, stack);
    expect(stack.pop()).toEqual(5);
    testMinMaxPeek(0, 9, 9, stack);
    expect(stack.pop()).toEqual(9);
    testMinMaxPeek(0, 8, 8, stack);
    expect(stack.pop()).toEqual(8);
    testMinMaxPeek(0, 8, 0, stack);
    expect(stack.pop()).toEqual(0);
    testMinMaxPeek(5, 8, 8, stack);
    expect(stack.pop()).toEqual(8);
    testMinMaxPeek(5, 8, 8, stack);
    expect(stack.pop()).toEqual(8);
    testMinMaxPeek(5, 5, 5, stack);
    expect(stack.pop()).toEqual(5);
    testMinMaxPeek(5, 5, 5, stack);
    expect(stack.pop()).toEqual(5);
    testMinMaxPeek(5, 5, 5, stack);
    expect(stack.pop()).toEqual(5);
    testMinMaxPeek(5, 5, 5, stack);
    expect(stack.pop()).toEqual(5);
  });

  test('Test Case #3', () => {
    const stack = new MinMaxStack();
    stack.push(2);
    testMinMaxPeek(2, 2, 2, stack);
    stack.push(0);
    testMinMaxPeek(0, 2, 0, stack);
    stack.push(5);
    testMinMaxPeek(0, 5, 5, stack);
    stack.push(4);
    testMinMaxPeek(0, 5, 4, stack);
    expect(stack.pop()).toEqual(4);
    testMinMaxPeek(0, 5, 5, stack);
    expect(stack.pop()).toEqual(5);
    testMinMaxPeek(0, 2, 0, stack);
    stack.push(4);
    testMinMaxPeek(0, 4, 4, stack);
    stack.push(11);
    testMinMaxPeek(0, 11, 11, stack);
    stack.push(-11);
    testMinMaxPeek(-11, 11, -11, stack);
    expect(stack.pop()).toEqual(-11);
    testMinMaxPeek(0, 11, 11, stack);
    expect(stack.pop()).toEqual(11);
    testMinMaxPeek(0, 4, 4, stack);
    expect(stack.pop()).toEqual(4);
    testMinMaxPeek(0, 2, 0, stack);
    expect(stack.pop()).toEqual(0);
    testMinMaxPeek(2, 2, 2, stack);
    expect(stack.pop()).toEqual(2);
    stack.push(6);
    testMinMaxPeek(6, 6, 6, stack);
    expect(stack.pop()).toEqual(6);
  });
});

