const twoSum = require('../../problems/twoSum');

describe('twoSum()', () => {
  test('Test Case #1', () => {
    expect(twoSum([4, 6], 10)).toEqual([4, 6]);
  });

  test('Test Case #2', () => {
    expect(twoSum([4, 6, 1], 5)).toEqual([4, 1]);
  });

  test('Test Case #3', () => {
    expect(twoSum([4, 6, 1, -3], 3)).toEqual([6, -3]);
  });

  test('Test Case #4', () => {
    expect(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
      .toEqual([11, -1]);
  });

  test('Test Case #5', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17))
      .toEqual([8, 9]);
  });

  test('Test Case #6', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18))
      .toEqual([3, 15]);
  });

  test('Test Case #7', () => {
    expect(twoSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5))
      .toEqual([-5, 0]);
  });

  test('Test Case #8', () => {
    expect(
        twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163),
      )
      .toEqual([210, -47]);
  });

  test('Test Case #9', () => {
    expect(
        twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164),
      )
      .toEqual([]);
  });

  test('Test Case #10', () => {
    expect(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 15))
      .toEqual([]);
  });
});

