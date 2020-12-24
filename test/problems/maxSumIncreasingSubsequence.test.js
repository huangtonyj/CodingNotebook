const maxSumIncreasingSubsequence = require('../../problems/maxSumIncreasingSubsequence');

describe('maxSumIncreasingSubsequence()' , () => {

  it('Test Case 1', () => {
    const expected = [110, [10, 20, 30, 50]]; 
    const input = [10, 70, 20, 30, 50, 11, 30];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 2', () => {
    const expected = [1, [1]]; 
    const input = [1];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 3', () => {
    const expected = [-1, [-1]]; 
    const input = [-1];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 4', () => {
    const expected = [1, [1]]; 
    const input = [-1, 1];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 5', () => {
    const expected = [5, [5]]; 
    const input = [5, 4, 3, 2, 1];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 6', () => {
    const expected = [15, [1, 2, 3, 4, 5]]; 
    const input = [1, 2, 3, 4, 5];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 7', () => {
    const expected = [-1, [-1]]; 
    const input = [-5, -4, -3, -2, -1];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 8', () => {
    const expected = [35, [8, 12, 15]]; 
    const input = [8, 12, 2, 3, 15, 5, 7];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 9', () => {
    const expected = [164, [10, 11, 14, 23, 25, 31, 50]]; 
    const input = [10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

  it('Test Case 10', () => {
    const expected = [45, [1, 2, 3, 4, 5, 6, 7, 8, 9]]; 
    const input = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(maxSumIncreasingSubsequence(input)).toEqual(expected);
  });

});