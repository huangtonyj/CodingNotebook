const smallestSubstringContaining = require('../../problems/smallestSubstringContaining');

describe('smallestSubstringContaining()', () => {

  it('Test Case 1', () => {
    expect(smallestSubstringContaining('abcd$ef$axb$c$', '$$abf')).toEqual('f$axb$');
  });

  it('Test Case 2', () => {
    expect(smallestSubstringContaining('abcdef', 'af')).toEqual('abcdef');
  });

  it('Test Case 3', () => {
    expect(smallestSubstringContaining('abcdef', 'fa')).toEqual('abcdef');
  });

  it('Test Case 4', () => {
    expect(smallestSubstringContaining('abcdef', 'd')).toEqual('d');
  });

  it('Test Case 5', () => {
    expect(smallestSubstringContaining('abzacdwejxjfxztghiwjtklmnopqrstuvwxyz', 'aajjttwwxxzz')).toEqual('abzacdwejxjfxztghiwjt');
  });

  it('Test Case 6', () => {
    expect(smallestSubstringContaining('abcdefghijklmnopqrstuvwxyz', 'aajjttwwxxzz')).toEqual('');
  });

  it('Test Case 7', () => {
    expect(smallestSubstringContaining('145624356128828193236336541277356789901', '123')).toEqual('1932');
  });

  it('Test Case 8', () => {
    expect(smallestSubstringContaining('1456243561288281932363', '123')).toEqual('1932');
  });

});