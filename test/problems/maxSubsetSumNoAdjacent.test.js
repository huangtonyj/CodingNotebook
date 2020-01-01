const maxSubsetSumNoAdjacent = require('../../problems/maxSubsetSumNoAdjacent');

describe('maxSubsetSumNoAdjacent()', () => {
  test('Test Case #1', () => {
    expect(maxSubsetSumNoAdjacent([]))
      .toEqual(0);
  });

  test('Test Case #2', () => {
    expect(maxSubsetSumNoAdjacent([1]))
      .toEqual(1);
  });

  test('Test Case #3', () => {
    expect(maxSubsetSumNoAdjacent([1, 2]))
      .toEqual(2);
  });

  test('Test Case #4', () => {
    expect(maxSubsetSumNoAdjacent([1, 2, 3]))
      .toEqual(4);
  });

  test('Test Case #5', () => {
    expect(maxSubsetSumNoAdjacent([1, 15, 3]))
      .toEqual(15);
  });

  test('Test Case #6', () => {
    expect(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]))
      .toEqual(33);
  });

  test('Test Case #7', () => {
    expect(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]))
      .toEqual(207);
  });

  test('Test Case #8', () => {
    expect(maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15]))
      .toEqual(60);
  });

  test('Test Case #9', () => {
    expect(maxSubsetSumNoAdjacent([  10,  5,  20,  25,  15,  5,  5,  15,  3,  15,  5,  5,  15,]))
      .toEqual(90);
  });

  test('Test Case #10', () => {
    expect(maxSubsetSumNoAdjacent([125, 210, 250, 120, 150, 300]))
      .toEqual(675);
  });

  test('Test Case #11', () => {
    expect(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100]))
      .toEqual(180);
  });

  test('Test Case #12', () => {
    expect(maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120]))
      .toEqual(205);
  });

  test('Test Case #13', () => {
    expect(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4]))
      .toEqual(72);
  });
});