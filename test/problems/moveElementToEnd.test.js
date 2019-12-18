const moveElementToEnd = require('../../problems/moveElementToEnd');

describe('moveElementToEnd()', () => {
  
  test('Test Case #1', () => {
    const array = [];
    const toMove = 3;
    const expected = [];
    const output = moveElementToEnd(array, toMove);
    expect(output).toEqual(expected);
  });
  
  test('Test Case #2', () => {
    const array = [1, 2, 4, 5, 6];
    const toMove = 3;
    const expected = [1, 2, 4, 5, 6];
    const output = sorted(moveElementToEnd(array, toMove));
    expect(output).toEqual(expected);
  });
  
  test('Test Case #3', () => {
    const array = [3, 3, 3, 3, 3];
    const toMove = 3;
    const expected = [3, 3, 3, 3, 3];
    const output = moveElementToEnd(array, toMove);
    expect(output).toEqual(expected);
  });
  
  test('Test Case #4', () => {
    const array = [3, 1, 2, 4, 5];
    const toMove = 3;
    const expectedStart = [1, 2, 4, 5];
    const expectedEnd = [3];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 4));
    const outputEnd = output.slice(4);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #5', () => {
    const array = [1, 2, 4, 5, 3];
    const toMove = 3;
    const expectedStart = [1, 2, 4, 5];
    const expectedEnd = [3];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 4));
    const outputEnd = output.slice(4);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #6', () => {
    const array = [1, 2, 3, 4, 5];
    const toMove = 3;
    const expectedStart = [1, 2, 4, 5];
    const expectedEnd = [3];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 4));
    const outputEnd = output.slice(4);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #7', () => {
    const array = [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    const toMove = 5;
    const expectedStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    const expectedEnd = [5, 5, 5, 5, 5, 5];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 11));
    const outputEnd = output.slice(11);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #8', () => {
    const array = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5];
    const toMove = 5;
    const expectedStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    const expectedEnd = [5, 5, 5, 5, 5, 5];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 11));
    const outputEnd = output.slice(11);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #9', () => {
    const array = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12];
    const toMove = 5;
    const expectedStart = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
    const expectedEnd = [5, 5, 5, 5, 5, 5];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 11));
    const outputEnd = output.slice(11);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  test('Test Case #10', () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const toMove = 2;
    const expectedStart = [1, 3, 4];
    const expectedEnd = [2, 2, 2, 2, 2];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 3));
    const outputEnd = output.slice(3);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
  
  const sorted = array => array.sort((a, b) => a - b);
  
});