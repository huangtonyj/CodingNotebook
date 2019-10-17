const binarySearch = require('../../algorithms/binarySearch');
  
test('binarySearch()', () => {
  expect(binarySearch([1,2,3], 1)).toEqual(0);
  expect(binarySearch([1,2,3], 2)).toEqual(1);
  expect(binarySearch([1,2,3], 3)).toEqual(2);
  expect(binarySearch([1,2,3], 0)).toEqual(null);
  expect(binarySearch([1,2,3], 4)).toEqual(null);

  expect(binarySearch([1,2,3,4], 1)).toEqual(0);
  expect(binarySearch([1,2,3,4], 2)).toEqual(1);
  expect(binarySearch([1,2,3,4], 3)).toEqual(2);
  expect(binarySearch([1,2,3,4], 4)).toEqual(3);
  expect(binarySearch([1,2,3,4], 0)).toEqual(null);
  expect(binarySearch([1,2,3,4], 5)).toEqual(null);

  expect(binarySearch([1, 5, 23, 111], 111)).toEqual(3);
  expect(binarySearch([1, 5, 23, 111], 5)).toEqual(1);
  expect(binarySearch([1, 5, 23, 111], 35)).toEqual(null);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toEqual(3);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72)).toEqual(8);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)).toEqual(9);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)).toEqual(null);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355)).toEqual(10);
  expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354)).toEqual(null);
});

