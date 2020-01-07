const lookAndSay = require('../../problems/lookAndSay');

describe('lookAndSay()', () => {

  test('Test Case #1', () => {
    expect(lookAndSay(1)).toEqual(1);
  });

  test('Test Case #2', () => {
    expect(lookAndSay(2)).toEqual(11);
  });

  test('Test Case #3', () => {
    expect(lookAndSay(3)).toEqual(21);
  });

  test('Test Case #4', () => {
    expect(lookAndSay(4)).toEqual(1211);
  });

  test('Test Case #5', () => {
    expect(lookAndSay(5)).toEqual(111221);
  });

  test('Test Case #6', () => {
    expect(lookAndSay(6)).toEqual(312211);
  });

  test('Test Case #7', () => {
    expect(lookAndSay(7)).toEqual(13112221);
  });

});  
