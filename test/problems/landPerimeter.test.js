const landPerimeter = require('../../problems/landPerimeter');

describe('landPerimeter()', () => {

  test('Test Case #1', () => {
    const landMatrix = [
      [0, 1, 1, 0],
      [1, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0]
    ];

    expect(landPerimeter(landMatrix)).toEqual(14);
  });

  test('Test Case #2', () => {
    const landMatrix = [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0]
    ];

    expect(landPerimeter(landMatrix)).toEqual(12);
  });
  

});  
