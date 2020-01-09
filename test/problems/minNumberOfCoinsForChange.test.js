const minNumberOfCoinsForChange = require('../../problems/minNumberOfCoinsForChange');

describe('minNumberOfCoinsForChange()', () => {

  test('Test Case #1', () => {
    expect(minNumberOfCoinsForChange(0, [1, 2, 3]))
      .toEqual(0);
  });
  
  test('Test Case #2', () => {
    expect(minNumberOfCoinsForChange(3, [2, 1]))
      .toEqual(2);
  });
  
  test('Test Case #3', () => {
    expect(minNumberOfCoinsForChange(4, [1, 5, 10]))
      .toEqual(4);
  });
  
  test('Test Case #4', () => {
    expect(minNumberOfCoinsForChange(7, [1, 5, 10]))
      .toEqual(3);
  });
  
  test('Test Case #5', () => {
    expect(minNumberOfCoinsForChange(10, [1, 5, 10]))
      .toEqual(1);
  });
  
  test('Test Case #6', () => {
    expect(minNumberOfCoinsForChange(11, [1, 5, 10]))
      .toEqual(2);
  });
  
  test('Test Case #7', () => {
    expect(minNumberOfCoinsForChange(24, [1, 5, 10]))
      .toEqual(6);
  });
  
  test('Test Case #8', () => {
    expect(minNumberOfCoinsForChange(25, [1, 5, 10]))
      .toEqual(3);
  });
  
  test('Test Case #9', () => {
    expect(minNumberOfCoinsForChange(7, [2, 4]))
      .toEqual(-1);
  });
  
  test('Test Case #10', () => {
    expect(minNumberOfCoinsForChange(7, [3, 7]))
      .toEqual(1);
  });
  
  test('Test Case #11', () => {
    expect(minNumberOfCoinsForChange(9, [3, 5]))
      .toEqual(3);
  });
  
  test('Test Case #12', () => {
    expect(minNumberOfCoinsForChange(9, [3, 4, 5]))
      .toEqual(2);
  });
  
  test('Test Case #13', () => {
    expect(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1]))
      .toEqual(3);
  });
  
  test('Test Case #14', () => {
    expect(minNumberOfCoinsForChange(135, [39, 45, 130, 40, 4, 1, 60, 75]))
      .toEqual(2);
  });

});

