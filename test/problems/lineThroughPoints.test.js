const lineThroughPoints = require('../../problems/lineThroughPoints');

describe('lineThroughPoints()', () => {

  it('Test Case 1', () => {
    const expected = 4;
    const points = [
      [1, 1],
      [2, 2],
      [3, 3],
      [0, 4],
      [-2, 6],
      [4, 0],
      [2, 1]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 2', () => {
    const expected = 3;
    const points = [
      [3, 3],
      [0, 4],
      [-2, 6],
      [4, 0],
      [2, 1],
      [3, 4],
      [5, 6],
      [0, 0]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 3', () => {
    const expected = 3;
    const points = [
      [1, 4],
      [3, 5],
      [7, 1],
      [5, 4],
      [4, 5],
      [9, 2],
      [1, 3],
      [2, 8]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 4', () => {
    const expected = 2;
    const points = [
      [1, 4],
      [4, 1],
      [3, 3]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 5', () => {
    const expected = 1;
    const points = [
      [0, 0]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 6', () => {
    const expected = 4;
    const points = [
      [1, 4],
      [4, 1],
      [1, 1],
      [4, 4],
      [2, 3],
      [3, 2],
      [3, 3],
      [2, 2],
      [0, 3]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 7', () => {
    const expected = 5;
    const points = [
      [1, 4],
      [4, 1],
      [1, 1],
      [4, 4],
      [2, 3],
      [3, 2],
      [3, 3],
      [2, 2],
      [0, 3],
      [5, 3],
      [3, -1],
      [2, -3],
      [1, -5]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 8', () => {
    const expected = 3;
    const points = [
      [-1, -1],
      [-3, -1],
      [-4, -1],
      [1, 1],
      [4, 1]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 9', () => {
    const expected = 6;
    const points = [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 1],
      [3, 2],
      [3, 4],
      [3, 5],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [5, 1],
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
      [6, 6],
      [2, 6]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 10', () => {
    const expected = 8;
    const points = [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 1],
      [2, 2],
      [2, 4],
      [2, 5],
      [4, 1],
      [4, 2],
      [4, 4],
      [4, 5],
      [5, 1],
      [5, 2],
      [5, 4],
      [5, 5],
      [6, 6],
      [2, 6],
      [-1, -1],
      [0, 0],
      [-2, -2]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 11', () => {
    const expected = 2;
    const points = [
      [-78, -9],
      [67, 87],
      [46, 87],
      [4, 5],
      [9, 83],
      [34, 47]
    ];

    expect(lineThroughPoints(points)).toEqual(expected);
  });

  it('Test Case 12', () => {
    const expected = 2;
    const points = [
      [1000000001, 1],
      [1, 1],
      [0, 0]
    ];
    expect(lineThroughPoints(points)).toEqual(expected);
  });

});