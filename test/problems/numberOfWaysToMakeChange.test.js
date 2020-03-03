const numberOfWaysToMakeChange = require('../../problems/numberOfWaysToMakeChange');

describe('numberOfWaysToMakeChange()', () => {

  test('Test Case #1', () => {
    expect(numberOfWaysToMakeChange(0, [2, 3, 4, 7])).toEqual(1);
  });
  
  test('Test Case #2', () => {
    expect(numberOfWaysToMakeChange(9, [5])).toEqual(0);
  });
  
  test('Test Case #3', () => {
    expect(numberOfWaysToMakeChange(7, [2, 4])).toEqual(0);
  });
  
  test('Test Case #4', () => {
    expect(numberOfWaysToMakeChange(6, [1, 5])).toEqual(2);
  });
  
  test('Test Case #5', () => {
    expect(numberOfWaysToMakeChange(4, [1, 5, 10, 25])).toEqual(1);
  });
  
  test('Test Case #6', () => {
    expect(numberOfWaysToMakeChange(5, [1, 5, 10, 25])).toEqual(2);
  });
  
  test('Test Case #7', () => {
    expect(numberOfWaysToMakeChange(10, [1, 5, 10, 25])).toEqual(4);
  });
  
  test('Test Case #8', () => {
    expect(numberOfWaysToMakeChange(25, [1, 5, 10, 25])).toEqual(13);
  });
  
  test('Test Case #9', () => {
    expect(numberOfWaysToMakeChange(12, [2, 3, 7])).toEqual(4);
  });
  
  test('Test Case #10', () => {
    expect(numberOfWaysToMakeChange(7, [2, 3, 4, 7])).toEqual(3);
  });
  

});  
