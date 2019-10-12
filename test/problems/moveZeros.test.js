const moveZeros = require('../../problems/moveZeros');

test('moveZeros()', () => {
  expect(moveZeros([0, 0, 0])).toEqual([0, 0, 0]);
  
  expect(moveZeros([1, 2, 3])).toEqual([1, 2, 3]);

  expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});