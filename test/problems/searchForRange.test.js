const searchForRange = require('../../problems/searchForRange');

describe('searchForRange()', () => {

  test('Test Case #1', () => {
    const expected = searchForRange([5, 7, 7, 8, 8, 10], 5);

    expect(expected).toEqual([0, 0]);
  });

  test('Test Case #2', () => {
    const expected = searchForRange([5, 7, 7, 8, 8, 10], 7);

    expect(expected).toEqual([1, 2]);
  });

  test('Test Case #3', () => {
    const expected = searchForRange([5, 7, 7, 8, 8, 10], 8);

    expect(expected).toEqual([3, 4]);
  });

  test('Test Case #4', () => {
    const expected = searchForRange([5, 7, 7, 8, 8, 10], 10);

    expect(expected).toEqual([5, 5]);
  });

  test('Test Case #5', () => {
    const expected = searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45);

    expect(expected).toEqual([4, 9]);
  });

  test('Test Case #6', () => {
    const expected = searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 45, 45, 45], 45);

    expect(expected).toEqual([4, 12]);
  });

  test('Test Case #7', () => {
    const expected = searchForRange([5, 7, 7, 8, 8, 10], 9);

    expect(expected).toEqual([-1, -1]);
  });

  test('Test Case #8', () => {
    const expected = searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 47);

    expect(expected).toEqual([-1, -1]);
  });

  test('Test Case #9', () => {
    const expected = searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], -1);

    expect(expected).toEqual([-1, -1]);
  });

  test('Test Case #10', () => {
    const expected = searchForRange([1, 1, 2], 1);

    expect(expected).toEqual([0, 1]);
  });

});
