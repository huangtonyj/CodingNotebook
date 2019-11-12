const longestPalindromicSubstring = require('../../problems/longestPalindromicSubstring');

describe('longestPalindromicSubstring()', () => {
  
  test('Test Case #1', () => {
    expect(longestPalindromicSubstring('a')).toEqual('a');
  });

  test('Test Case #2', () => {
    expect(longestPalindromicSubstring("test's highnoon"))
      .toEqual('noon');
  });

  test('Test Case #3', () => {
    expect(longestPalindromicSubstring('noon high test is'))
      .toEqual('noon');
  });

  test('Test Case #4', () => {
    expect(longestPalindromicSubstring("abccbatest's highnoon"))
      .toEqual('abccba');
  });

  test('Test Case #5', () => {
    expect(longestPalindromicSubstring('abaxyzzyxf'))
      .toEqual('xyzzyx');
  });

  test('Test Case #6', () => {
    expect(longestPalindromicSubstring('abcdefgfedcbazzzzzzzzzzzzzzzzzzzz'))
      .toEqual('zzzzzzzzzzzzzzzzzzzz');
  });

  test('Test Case #7', () => {
    expect(longestPalindromicSubstring('abcdefgfedcba'))
      .toEqual('abcdefgfedcba');
  });

  test('Test Case #8', () => {
    expect(longestPalindromicSubstring('abcdefghfedcbaa'))
      .toEqual('aa');
  });

  test('Test Case #9', () => {
    expect(longestPalindromicSubstring('abcdefggfedcba'))
      .toEqual('abcdefggfedcba');
  });

  test('Test Case #10', () => {
    expect(longestPalindromicSubstring('zzzzzzz2345abbbba5432zzbbababa'))
      .toEqual('zz2345abbbba5432zz');
  });

  test('Test Case #11', () => {
    expect(longestPalindromicSubstring('z234a5abbbba54a32z'))
      .toEqual('5abbbba5');
  });

  test('Test Case #12', () => {
    expect(longestPalindromicSubstring('z234a5abbba54a32z'))
      .toEqual('5abbba5');
  });

});



