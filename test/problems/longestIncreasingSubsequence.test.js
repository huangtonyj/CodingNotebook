const longestIncreasingSubsequence = require('../../problems/longestIncreasingSubsequence');

describe('longestIncreasingSubsequence', () => {
  
  it('Test Case 1', () => {
    const expected = [-24, 2, 3, 5, 6, 35];
    const array = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = [-1];
    const array = [-1];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = [-1, 2];
    const array = [-1, 2];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = [-1, 1, 2];
    const array = [-1, 2, 1, 2];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = [1, 5, 10];
    const array = [1, 5, -1, 10];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = [-1, 0, 2, 4];
    const array = [1, 5, -1, 0, 6, 2, 4];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = [3, 4];
    const array = [3, 4, -1];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 8', () => {
    const expected = [2, 12, 30, 31];
    const array = [29, 2, 32, 12, 30, 31];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 9', () => {
    const expected = [10, 22, 33, 41, 60, 80];
    const array = [10, 22, 9, 33, 21, 61, 41, 60, 80];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });
  
  it('Test Case 10', () => {
    const expected = [1, 2, 3, 4, 101];
    const array = [100, 1, 2, 3, 4, 101];
  
    expect(longestIncreasingSubsequence(array)).toEqual(expected);
  });

});
