const knapsackProblem = require('../../problems/knapsackProblem');

describe('knapsackProblem()', () => {

  it('Test Case 1', () => {
    const expected = [10, [1, 3]];
    const capacity = 10;
    const items = [[1, 2], [4, 3], [5, 6], [6, 7]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 2', () => {
    const expected = [10, [0, 1, 2]];
    const capacity = 11;
    const items = [[1, 2], [4, 3], [5, 6], [6, 9]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 3', () => {
    const expected = [1500, [3, 12, 14]];
    const capacity = 200;
    const items = [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [240, 40]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 4', () => {
    const expected = [1505, [7, 12, 14, 15]];
    const capacity = 200;  
    const items = [[465, 100], [400, 85], [255, 55], [350, 45], [650, 130], [1000, 190], [455, 100], [100, 25], [1200, 190], [320, 65], [750, 100], [50, 45], [550, 65], [100, 50], [600, 70], [255, 40]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 5', () => {
    const expected = [101, [0, 2, 3]];
    const capacity = 100;
    const items = [[2, 1], [70, 70], [30, 30], [69, 69], [100, 100]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 6', () => {
    const expected = [100, [2, 1]];
    const capacity = 100;
    const items = [[1, 2], [70, 70], [30, 30], [69, 69], [99, 100]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

  it('Test Case 7', () => {
    const expected = [0, []];
    const capacity = 0;
    const items = [[1, 2], [70, 70], [30, 30], [69, 69], [100, 100]];

    expect(knapsackProblem(items, capacity)).toEqual(expected);
  });

});