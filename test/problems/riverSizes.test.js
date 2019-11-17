const {riverSizes, Land} = require('../../problems/riverSizes');

describe('riverSizes()', () => {
  it('Test Case #1', () => {
    const testInput = [
      [0]
    ];
    const expected = [];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #2', () => {
    const testInput = [
      [1]
    ];
    const expected = [1];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #3', () => {
    const testInput = [
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]
    ];
    const expected = [1, 2, 3];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #4', () => {
    const testInput = [
      [1, 0, 0, 1],
      [1, 0, 1, 0],
      [0, 0, 1, 0],
      [1, 0, 1, 0]
    ];
    const expected = [1, 1, 2, 3];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #5', () => {
    const testInput = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const expected = [1, 2, 2, 2, 5];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #6', () => {
    const testInput = [
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ];
    const expected = [1, 1, 2, 2, 5, 21];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #7', () => {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #8', () => {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 7];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #9', () => {
    const testInput = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const expected = [];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #10', () => {
    const testInput = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];
    const expected = [49];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #11', () => {
    const testInput = [
      [1, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 0, 0, 0, 1, 1],
    ];
    const expected = [3, 5, 6];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #12', () => {
    const testInput = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expected = [1, 1, 2, 6, 10];
    expect(riverSizes(testInput).sort((a, b) => a - b)).toEqual(expected);
  });

});


describe('Land.riverSizes()', () => {
  it('Test Case #1', () => {
    const testInput = [
      [0]
    ];
    const expected = [];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #2', () => {
    const testInput = [
      [1]
    ];
    const expected = [1];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #3', () => {
    const testInput = [
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]
    ];
    const expected = [1, 2, 3];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #4', () => {
    const testInput = [
      [1, 0, 0, 1],
      [1, 0, 1, 0],
      [0, 0, 1, 0],
      [1, 0, 1, 0]
    ];
    const expected = [1, 1, 2, 3];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #5', () => {
    const testInput = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const expected = [1, 2, 2, 2, 5];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #6', () => {
    const testInput = [
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ];
    const expected = [1, 1, 2, 2, 5, 21];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #7', () => {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #8', () => {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 7];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #9', () => {
    const testInput = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const expected = [];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #10', () => {
    const testInput = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];
    const expected = [49];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #11', () => {
    const testInput = [
      [1, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 0, 0, 0, 1, 1],
    ];
    const expected = [3, 5, 6];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

  it('Test Case #12', () => {
    const testInput = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expected = [1, 1, 2, 6, 10];
    const testLand = new Land(testInput);
    expect(testLand.riverSizes().sort((a, b) => a - b)).toEqual(expected);
  });

});