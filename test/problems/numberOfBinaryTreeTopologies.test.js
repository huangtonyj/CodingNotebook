const numberOfBinaryTreeTopologies = require('../../problems/numberOfBinaryTreeTopologies');

describe('numberOfBinaryTreeTopologies()', () => {
  it('Test Case #1', () => {
    expect(numberOfBinaryTreeTopologies(0)).toEqual(1);
  });

  it('Test Case #2', () => {
    expect(numberOfBinaryTreeTopologies(1)).toEqual(1);
  });

  it('Test Case #3', () => {
    expect(numberOfBinaryTreeTopologies(2)).toEqual(2);
  });

  it('Test Case #4', () => {
    expect(numberOfBinaryTreeTopologies(3)).toEqual(5);
  });

  it('Test Case #5', () => {
    expect(numberOfBinaryTreeTopologies(4)).toEqual(14);
  });

  it('Test Case #6', () => {
    expect(numberOfBinaryTreeTopologies(5)).toEqual(42);
  });

  it('Test Case #7', () => {
    expect(numberOfBinaryTreeTopologies(6)).toEqual(132);
  });

  it('Test Case #8', () => {
    expect(numberOfBinaryTreeTopologies(7)).toEqual(429);
  });

  it('Test Case #9', () => {
    expect(numberOfBinaryTreeTopologies(8)).toEqual(1430);
  });

  it('Test Case #10', () => {
    expect(numberOfBinaryTreeTopologies(9)).toEqual(4862);
  });

  it('Test Case #11', () => {
    expect(numberOfBinaryTreeTopologies(10)).toEqual(16796);
  });

  it('Test Case #12', () => {
    expect(numberOfBinaryTreeTopologies(11)).toEqual(58786);
  });

  it('Test Case #13', () => {
    expect(numberOfBinaryTreeTopologies(12)).toEqual(208012);
  });

  it('Test Case #14', () => {
    expect(numberOfBinaryTreeTopologies(13)).toEqual(742900);
  });
});