const dijkstrasAlgorithm = require('../../problems/dijkstrasAlgorithm');

describe('dijkstrasAlgorithm', () => {

  test('Test Case 1', () => {
    const expected = [0, 7, 13, 27, 10, -1];
    const {edges, start} = {
      "edges": [[[1, 7]], [[2, 6], [3, 20], [4, 3]], [[3, 14]], [[4, 2]], [], []],
      "start": 0
    };

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 2', () => {
    const expected = [-1, 0, -1, -1];
    const {edges, start} = {"edges": [[], [], [], []], "start": 1}

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 3', () => {
    const expected = [7, 8, 9, 8, 10, 11, 10, 0];
    const {edges, start} = {
      "edges": [
        [[1, 1], [3, 1]],
        [[2, 1]],
        [[6, 1]],
        [[1, 3], [2, 4], [4, 2], [5, 3], [6, 5]],
        [[5, 1]],
        [[4, 1]],
        [[5, 2]],
        [[0, 7]]
      ],
      "start": 7
    };

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 4', () => {
    const expected = [2, 5, 4, 1, 0];
    const {edges, start} = {
      "edges": [
        [[1, 3], [2, 2]],
        [[3, 7]],
        [[1, 2], [3, 4], [4, 1]],
        [],
        [[0, 2], [1, 8], [3, 1]]
      ],
      "start": 4
    };

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 5', () => {
    const expected = [1, 0, -1, -1];
    const {edges, start} = {"edges": [[[1, 2]], [[0, 1]], [[3, 1]], [[2, 2]]], "start": 1}

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 6', () => {
    const expected = [0, 1, 2, 3, 4, 5, 6, 7];
    const {edges, start} = {
      "edges": [
        [[1, 1], [7, 8]],
        [[2, 1]],
        [[3, 1]],
        [[4, 1]],
        [[5, 1]],
        [[6, 1]],
        [[7, 1]],
        []
      ],
      "start": 0
    };

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 7', () => {
    const expected = [3, 4, -1, 0, 4, -1, 7, 8, 7, -1, 7];
    const {edges, start} = {
      "edges": [
        [[1, 2], [3, 3], [4, 2]],
        [[0, 1], [6, 3]],
        [[3, 9]],
        [[0, 3], [1, 4], [4, 4], [8, 7]],
        [[0, 1], [10, 3]],
        [[7, 1], [8, 4]],
        [[8, 1]],
        [],
        [[7, 1]],
        [[10, 2]],
        []
      ],
      "start": 3
    }; 

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 8', () => {
    const expected = [20, 16, 5, 15, 12, 12, 9, 10, 0, 17];
    const {edges, start} = {
      "edges": [
        [[1, 4], [7, 11]],
        [[0, 4], [2, 11], [7, 14]],
        [[1, 11], [3, 10], [5, 7], [8, 5]],
        [[2, 10], [4, 12], [5, 17]],
        [[3, 12], [5, 13], [6, 3]],
        [[2, 7], [3, 17], [4, 13], [6, 5]],
        [[4, 3], [5, 6], [7, 4], [9, 8]],
        [[0, 11], [1, 14], [6, 4], [8, 10]],
        [[2, 5], [6, 9], [7, 10]],
        []
      ],
      "start": 8
    };

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

  test('Test Case 9', () => {
    const expected = [3, 8, 7, 0];
    const {edges, start} = {"edges": [[[2, 4]], [[0, 2]], [[1, 1], [3, 2]], [[0, 3]]], "start": 3};

    expect(dijkstrasAlgorithm(start, edges)).toEqual(expected);
  });

});