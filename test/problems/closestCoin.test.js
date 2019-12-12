const closestCoin = require('../../problems/closestCoin');

describe('closestCoin()', () => {

  it('Test Case #1', () => {
    const map = [
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
    ];

    expect(closestCoin(map, [0, 0])).toEqual([1, 0]);
    expect(closestCoin(map, [0, 2])).toEqual([0, 4]);
    expect(closestCoin(map, [3, 0])).toEqual([2, 0]);
    expect(closestCoin(map, [3, 0])).toEqual([2, 0]);
    expect(closestCoin(map, [2, 3])).toEqual([2, 4]);
  });

});