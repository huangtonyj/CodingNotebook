const longestSubstringWithoutDuplication = require('../../problems/longestSubstringWithoutDuplication');

describe('longestSubstringWithoutDuplication()', () => {
  it('Test Case #1', () => {
    expect(longestSubstringWithoutDuplication('a')).toEqual('a');
  });

  it('Test Case #2', () => {
    expect(longestSubstringWithoutDuplication('abc')).toEqual('abc');
  });

  it('Test Case #3', () => {
    expect(longestSubstringWithoutDuplication('abcb')).toEqual('abc');
  });

  it('Test Case #4', () => {
    expect(longestSubstringWithoutDuplication('abcdeabcdefc')).toEqual('abcdef');
  });

  it('Test Case #5', () => {
    expect(longestSubstringWithoutDuplication('abccdeaabbcddef')).toEqual('cdea');
  });

  it('Test Case #6', () => {
    expect(longestSubstringWithoutDuplication('abacacacaaabacaaaeaaafa')).toEqual('bac');
  });

  it('Test Case #7', () => {
    expect(longestSubstringWithoutDuplication('abcdabcef')).toEqual('dabcef');
  });

  it('Test Case #8', () => {
    expect(longestSubstringWithoutDuplication('abcbde')).toEqual('cbde');
  });

  it('Test Case #9', () => {
    expect(longestSubstringWithoutDuplication('clementisacap')).toEqual('mentisac');
  });

  it('Test Case #10', () => {
    expect(longestSubstringWithoutDuplication('clementisanarm')).toEqual('mentisa');
  });
});
