const sortKSortedArray = require('../../problems/sortKSortedArray');

describe('sortKSortedArray()', () => {
  
  it('Test Case 1', () => {
    const expected = [1, 2, 3, 4, 5, 5, 6, 7];
    const array = [3, 2, 1, 5, 4, 7, 6, 5];
    const k = 3;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = [-4, -3, -1, 1, 2, 3];
    const array = [-1, -3, -4, 2, 1, 3];
    const k = 2;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = [1, 2, 3, 4, 5];
    const array = [1, 2, 3, 4, 5];
    const k = 0;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = [];
    const array = [];
    const k = 5;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = [1, 2, 2, 3, 4, 5, 6];
    const array = [4, 3, 2, 1, 2, 5, 6];
    const k = 4;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9];
    const array = [3, 2, 1, 0, 4, 7, 6, 5, 9, 8, 7];
    const k = 3;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const array = [2, 1, 4, 3, 5, 6, 8, 7];
    const k = 1;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 8', () => {
    const expected = [0, 1, 1, 1, 1, 1, 1, 1];
    const array = [1, 0, 1, 1, 1, 1, 1, 1];
    const k = 1;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 9', () => {
    const expected = [-100, 2, 3, 4, 5];
    const array = [5, 4, 3, 2, -100];
    const k = 5;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 10', () => {
    const expected = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 11, 12];
    const array = [3, 3, 2, 1, 6, 4, 4, 5, 9, 7, 8, 11, 12];
    const k = 3;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 11', () => {
    const expected = [1];
    const array = [1];
    const k = 1;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 12', () => {
    const expected = [-5, -1];
    const array = [-1, -5];
    const k = 1;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 13', () => {
    const expected = [-3, -2, 1, 1, 1, 2, 2, 3, 3, 8, 9, 12, 100, 130];
    const array = [-2, -3, 1, 2, 3, 1, 1, 2, 3, 8, 100, 130, 9, 12];
    const k = 4;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });
  
  it('Test Case 14', () => {
    const expected = [1, 1, 2, 3, 4, 5, 6];
    const array = [1, 2, 3, 4, 5, 6, 1];
    const k = 8;
  
    expect(sortKSortedArray(array, k)).toEqual(expected);
  });

});