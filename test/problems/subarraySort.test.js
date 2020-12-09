const subarraySort = require('../../problems/subarraySort');

describe('subarraySort()', () => {

  it ('Test Case #1', () => {
    expect(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
      .toEqual([3, 9]);
  });

  it ('Test Case #2', () => {
    expect(subarraySort([1, 2]))
      .toEqual([-1, -1]);
  });

  it ('Test Case #3', () => {
    expect(subarraySort([2, 1]))
      .toEqual([0, 1]);
  });

  it ('Test Case #4', () => {
    expect(subarraySort([1, 2, 8, 4, 5]))
      .toEqual([2, 4]);
  });

  it ('Test Case #5', () => {
    expect(subarraySort([4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]))
      .toEqual([0, 12]);
  });

  it ('Test Case #6', () => {
    expect(subarraySort([-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]))
      .toEqual([1, 12]);
  });

  it ('Test Case #7', () => {
    expect(subarraySort([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]))
      .toEqual([-1, -1]);
  });

  it ('Test Case #8', () => {
    expect(subarraySort([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]))
      .toEqual([2, 19]);
  });

});