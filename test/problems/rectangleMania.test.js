const rectangleMania = require('../../problems/rectangleMania');

describe('rectangleMania()', () => {

  it('Test Case 1', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0]];
    expect(rectangleMania(coords)).toEqual(6);
  });

  it('Test Case 2', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0]];
    expect(rectangleMania(coords)).toEqual(1);
  });

  it('Test Case 3', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0]];
    expect(rectangleMania(coords)).toEqual(3);
  });

  it('Test Case 4', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0], [1, 3], [3, 3]];
    expect(rectangleMania(coords)).toEqual(8);
  });

  it('Test Case 5', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0], [1, 3], [3, 3], [0, -4], [3, -4]];
    expect(rectangleMania(coords)).toEqual(10);
  });

  it('Test Case 6', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0], [1, 3], [3, 3], [0, -4], [3, -4], [1, -3], [3, -3]];
    expect(rectangleMania(coords)).toEqual(13);
  });

  it('Test Case 7', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0], [1, 3], [3, 3], [0, -4], [3, -4], [1, -3], [3, -3], [-1, 0], [-10, 0], [-1, -1], [2, -2]];
    expect(rectangleMania(coords)).toEqual(13);
  });

  it('Test Case 8', () => {
    const coords = [[0, 0], [0, 1], [1, 1], [1, 0], [2, 1], [2, 0], [3, 1], [3, 0], [1, 3], [3, 3], [0, -4], [3, -4], [1, -3], [3, -3], [-1, 0], [-10, 0], [-1, -1], [2, -2], [0, -1], [1, -4], [-10, -4]];
    expect(rectangleMania(coords)).toEqual(23);
  });

  it('Test Case 9', () => {
    const coords = [[0, 0], [0, 1], [1, 0], [2, 1], [1, 3], [3, 3], [0, -4], [3, -5], [1, -3], [3, -2], [-1, 0], [-10, 0], [-1, -1], [2, -2]];
    expect(rectangleMania(coords)).toEqual(0);
  });

  it('Test Case 10', () => {
    const coords = [[0, 0], [0, 1], [1, 1]];
    expect(rectangleMania(coords)).toEqual(0);
  });

});