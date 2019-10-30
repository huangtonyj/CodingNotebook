const hasSingleCycle = require('../../problems/hasSingleCycle');

test('hasSingleCycle()', () => {

  expect(hasSingleCycle([2, 2, -1]))
    .toEqual(true);

  expect(hasSingleCycle([2, 2, 2]))
    .toEqual(true);

  expect(hasSingleCycle([1, 1, 1, 1, 1]))
    .toEqual(true);

  expect(hasSingleCycle([-1, 2, 2]))
    .toEqual(true);

  expect(hasSingleCycle([0, 1, 1, 1, 1]))
    .toEqual(false);

  expect(hasSingleCycle([1, 1, 0, 1, 1]))
    .toEqual(false);

  expect(hasSingleCycle([1, 1, 1, 1, 2]))
    .toEqual(false);

  expect(hasSingleCycle(
      [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]))
    .toEqual(true);

  expect(hasSingleCycle(
      [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2]))
    .toEqual(false);

  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, 1]))
    .toEqual(true);

  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -8]))
    .toEqual(true);

  expect(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26]))
    .toEqual(true);

  expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26]))
    .toEqual(true);

  expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26]))
    .toEqual(false);

  expect(hasSingleCycle([2, 3, 1, -4, -4, 2]))
    .toEqual(true);

  expect(hasSingleCycle([1, -1, 1, -1]))
    .toEqual(false);

});