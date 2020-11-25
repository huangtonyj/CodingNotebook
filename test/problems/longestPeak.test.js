const longestPeak = require('../../problems/longestPeak');

describe('numberOfBinaryTreeTopologies()', () => {
  it('Test Case #1', () => {
    expect(longestPeak([])).toEqual(0);
  });

  it('Test Case #2', () => {
    expect(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toEqual(6);
  });

  it('Test Case #3', () => {
    expect(longestPeak([1, 3, 2])).toEqual(3);
  });

  it('Test Case #4', () => {
    expect(longestPeak([1, 2, 3, 4, 5, 1])).toEqual(6);
  });

  it('Test Case #5', () => {
    expect(longestPeak([5, 4, 3, 2, 1, 2, 1])).toEqual(3);
  });

  it('Test Case #6', () => {
    expect(longestPeak([1, 1, 3, 2, 1])).toEqual(4);
  });

  it('Test Case #7', () => {
    expect(longestPeak([5, 4, 3, 2, 1, 2, 10, 12])).toEqual(0);
  });

  it('Test Case #8', () => {
    expect(longestPeak([1, 2, 3, 4, 5, 6, 10, 100, 1000])).toEqual(0);
  });

  it('Test Case #9', () => {
    expect(longestPeak([1, 2, 3, 3, 2, 1])).toEqual(0);
  });
});