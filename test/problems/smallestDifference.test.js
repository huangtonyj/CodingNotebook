const smallestDifference = require('../../problems/smallestDifference');

test('smallestDifference()', () => {

  expect(
    smallestDifference(
      [-1, 5, 10, 20, 3], 
      [26, 134, 135, 15, 17])
    )
    .toEqual([20, 17]);


  expect(
    smallestDifference(
        [-1, 5, 10, 20, 28, 3],
        [26, 134, 135, 15, 17])
    )
    .toEqual([28, 26]);


  expect(
    smallestDifference(
        [10, 0, 20, 25],
        [1005, 1006, 1014, 1032, 1031])
    )
    .toEqual([25, 1005]);


  expect(
    smallestDifference(
        [10, 0, 20, 25, 2200],
        [1005, 1006, 1014, 1032, 1031])
    )
    .toEqual([25, 1005]);


  expect(
    smallestDifference(
        [10, 0, 20, 25, 2000],
        [1005, 1006, 1014, 1032, 1031])
    )
    .toEqual([2000, 1032]);


  expect(
    smallestDifference(
        [240, 124, 86, 111, 2, 84, 954, 27, 89],
        [1, 3, 954, 19, 8])
    )
    .toEqual([954, 954]);


  expect(
    smallestDifference(
        [0, 20], 
        [21, -2])
    )
    .toEqual([20, 21]);


  expect(
    smallestDifference(
        [10, 1000],
        [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])
    )
    .toEqual([1000, 1014]);


  expect(
    smallestDifference(
        [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
        [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])
    )
    .toEqual([-123, -124]);


  expect(
    smallestDifference(
        [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530],
        [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])
    )
    .toEqual([530, 530]);

});