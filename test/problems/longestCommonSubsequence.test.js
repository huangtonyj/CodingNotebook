const longestCommonSubsequence = require('../../problems/longestCommonSubsequence');

describe('longestCommonSubsequence()', () => {
  
  it('Test Case 1', () => {
    const expected = ['X', 'Y', 'Z', 'W'];
    const str1 = 'ZXVVYZW';
    const str2 = 'XKYKZPW';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = [];
    const str1 = '';
    const str2 = '';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = [];
    const str1 = '';
    const str2 = 'ABCDEFG';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = [];
    const str1 = 'ABCDEFG';
    const str2 = '';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const str1 = 'ABCDEFG';
    const str2 = 'ABCDEFG';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = ['A', 'E'];
    const str1 = 'ABCDEFG';
    const str2 = 'APPLES';
    
    expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = ['n', 't'];
    const str1 = 'clement';
  const str2 = 'antoine';
  
  expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
});

it('Test Case 8', () => {
  const expected = ['8', '4', '2'];
  const str1 = '8111111111111111142';
  const str2 = '222222222822222222222222222222433333333332';
  
  expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
});

it('Test Case 9', () => {
  const expected = ['C', 'D', 'E', 'G', 'H', 'J', 'K', 'L', 'W'];
  const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const str2 = 'CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG';
  
  expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
});

it('Test Case 10', () => {
  const expected = ['C', 'D', 'E', 'G', 'H', 'J', 'K', 'L', 'T', 'U', 'V'];
  const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const str2 = 'CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV';
  
  expect(longestCommonSubsequence(str1, str2)).toEqual(expected);
});

});