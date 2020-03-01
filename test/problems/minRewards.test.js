// const minRewards = require('../../problems/minRewards');
const minRewards = require('../../problems/minRewards');

describe('minRewards()', () => {
  it('Test Case #1', function() {
    expect(minRewards([1])).toEqual(1);
  });

  it('Test Case #2', function() {
    expect(minRewards([5, 10])).toEqual(3);
  });

  it('Test Case #3', function() {
    expect(minRewards([10, 5])).toEqual(3);
  });

  it('Test Case #4', function() {
    expect(minRewards([4, 2, 1, 3])).toEqual(8);
  });

  it('Test Case #5', function() {
    expect(minRewards([0, 4, 2, 1, 3])).toEqual(9);
  });

  it('Test Case #6', function() {
    expect(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5])).toEqual(25);
  });

  it('Test Case #7', function() {
    expect(minRewards([2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0])).toEqual(52);
  });

  it('Test Case #8', function() {
    expect(minRewards([2, 1, 4, 3, 6, 5, 8, 7, 10, 9])).toEqual(15);
  });

  it('Test Case #9', function() {
    expect(minRewards([ 800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53,]))
      .toEqual(93);
  });
});