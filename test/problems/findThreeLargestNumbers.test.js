const findThreeLargestNumbers = require('../../problems/findThreeLargestNumbers');

test('findThreeLargestNumbers()', () => {

  expect(findThreeLargestNumbers([55, 7, 8]))
    .toEqual([7, 8, 55]);

  expect(findThreeLargestNumbers([55, 43, 11, 3, -3, 10]))
    .toEqual([11, 43, 55]);

  expect(findThreeLargestNumbers([7, 8, 3, 11, 43, 55]))
    .toEqual([11, 43, 55]);

  expect(findThreeLargestNumbers([55, 7, 8, 3, 43, 11]))
    .toEqual([11, 43, 55]);

  expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]))
    .toEqual([7, 7, 7]);

  expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]))
    .toEqual([7, 7, 8]);

  expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
    .toEqual([18, 141, 541]);

  expect(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]))
      .toEqual([-2, -1, 7]);

});