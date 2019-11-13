const searchInSortedMatrix = require('../../problems/searchInSortedMatrix');

describe('searchInSortedMatrix()', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 16],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 37],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];

  test('Test Case #1', () => {
    expect(searchInSortedMatrix(matrix, 1)).toEqual([0, 0]);
  });

  test('Test Case #2', () => {
    expect(searchInSortedMatrix(matrix, 2)).toEqual([1, 0]);
  });

  test('Test Case #3', () => {
    expect(searchInSortedMatrix(matrix, 4)).toEqual([0, 1]);
  });

  test('Test Case #4', () => {
    expect(searchInSortedMatrix(matrix, 15)).toEqual([0, 4]);
  });

  test('Test Case #5', () => {
    expect(searchInSortedMatrix(matrix, 12)).toEqual([0, 3]);
  });

  test('Test Case #6', () => {
    expect(searchInSortedMatrix(matrix, 32)).toEqual([1, 4]);
  });

  test('Test Case #7', () => {
    expect(searchInSortedMatrix(matrix, 99)).toEqual([4, 0]);
  });

  test('Test Case #8', () => {
    expect(searchInSortedMatrix(matrix, 100)).toEqual([4, 1]);
  });

  test('Test Case #9', () => {
    expect(searchInSortedMatrix(matrix, 40)).toEqual([3, 0]);
  });

  test('Test Case #10', () => {
    expect(searchInSortedMatrix(matrix, 128)).toEqual([4, 4]);
  });

  test('Test Case #11', () => {
    expect(searchInSortedMatrix(matrix, 106)).toEqual([4, 3]);
  });

  test('Test Case #12', () => {
    expect(searchInSortedMatrix(matrix, 45)).toEqual([3, 4]);
  });

  test('Test Case #13', () => {
    expect(searchInSortedMatrix(matrix, 24)).toEqual([2, 2]);
  });

  test('Test Case #14', () => {
    expect(searchInSortedMatrix(matrix, 44)).toEqual([3, 3]);
  });

  test('Test Case #15', () => {
    expect(searchInSortedMatrix(matrix, 43)).toEqual([-1, -1]);
  });

  test('Test Case #16', () => {
    expect(searchInSortedMatrix(matrix, -1)).toEqual([-1, -1]);
  });

  test('Test Case #17', () => {
    expect(searchInSortedMatrix(matrix, 16)).toEqual([0, 5]);
  });

  test('Test Case #18', () => {
    expect(searchInSortedMatrix(matrix, 1004)).toEqual([4, 5]);
  });  

  test('Test Case #19', () => {
    expect(searchInSortedMatrix(matrix, 37)).toEqual([2, 5]);
  });  
});