const productSum = require('../../problems/productSum');

describe('productSum()', () => {
  
  test('Test Case #1', () => {
    const test = [1, 2, 3, 4, 5];
    expect(productSum(test)).toEqual(15);
  });

  test('Test Case #2', () => {
    const test = [1, 2, [3], 4, 5];
    expect(productSum(test)).toEqual(18);
  });

  test('Test Case #3', () => {
    const test = [[1, 2], 3, [4, 5]];
    expect(productSum(test)).toEqual(27);
  });

  test('Test Case #4', () => {
    const test = [[[[[5]]]]];
    expect(productSum(test)).toEqual(600);
  });

  test('Test Case #5', () => {
    const test = [
      9,
      [2, -3, 4],
      1,
      [1, 1, [1, 1, 1]],
      [[[[3, 4, 1]]], 8],
      [1, 2, 3, 4, 5, [6, 7], -7],
      [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
      [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
      -3,
    ];
    expect(productSum(test)).toEqual(1351);
  });

  test('Test Case #6', () => {
    const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    expect(productSum(test)).toEqual(12);
  });

});