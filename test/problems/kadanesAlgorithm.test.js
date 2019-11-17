const kadanesAlgorithm = require('../../problems/kadanesAlgorithm');

describe('kadanesAlgorithm()', () => {
  
  it('Test Case #1', () => {
    expect(kadanesAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .toEqual(55);
  });

  it('Test Case #2', () => {
    expect(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]))
      .toEqual(-1);
  });

  it('Test Case #3', () => {
    expect(kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]))
      .toEqual(-1);
  });

  it('Test Case #4', () => {
    expect(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10]))
      .toEqual(35);
  });

  it('Test Case #5', () => {
    expect(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10]))
      .toEqual(34);
  });

  it('Test Case #6', () => {
    expect(kadanesAlgorithm([1, 2, -4, 3, 5, -9, 8, 1, 2]))
      .toEqual(11);
  });

  it('Test Case #7', () => {
    expect(kadanesAlgorithm([3, 4, -6, 7, 8])).toEqual(16);
  });

  it('Test Case #8', () => {
    expect(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
      .toEqual(19);
  });

  it('Test Case #9', () => {
    expect(kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
      .toEqual(23);
  });

  it('Test Case #10', () => {
    expect(kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6]))
      .toEqual(24);
  });

  it('Test Case #11', () => {
    expect(kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6]))
      .toEqual(22);
  });

  it('Test Case #12', () => {
    expect(kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4]))
      .toEqual(35);
  });

  it('Test Case #13', () => {
    expect(kadanesAlgorithm([100, 8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4]))
      .toEqual(135);
  });

});
