const sunsetViews = require('../../problems/sunsetViews');

describe('sunsetViews()', () => {

  it('Test Case 1', () => {
    const expected = [1, 3, 6, 7];
    const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = [0, 1];
    const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = [1];
    const buildings = [10, 11];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = [0, 1];
    const buildings = [2, 4];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = [0];
    const buildings = [1];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = [0];
    const buildings = [1];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = [];
    const buildings = [];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 8', () => {
    const expected = [];
    const buildings = [];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 9', () => {
    const expected = [4, 5, 6, 7, 11];
    const buildings = [7, 1, 7, 8, 9, 8, 7, 6, 5, 4, 2, 5];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 10', () => {
    const expected = [5];
    const buildings = [1, 2, 3, 4, 5, 6];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 11', () => {
    const expected = [0, 1, 2, 3, 4, 5];
    const buildings = [1, 2, 3, 4, 5, 6];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 12', () => {
    const expected = [0, 1, 2, 4, 5, 6, 10, 13];
    const buildings = [1, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8];
    const direction = 'WEST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });
  
  it('Test Case 13', () => {
    const expected = [0, 13, 14];
    const buildings = [20, 2, 3, 1, 5, 6, 9, 1, 9, 9, 11, 10, 9, 12, 8];
    const direction = 'EAST';

    expect(sunsetViews(buildings, direction)).toEqual(expected);
  });

});