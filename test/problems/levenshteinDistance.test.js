const levenshteinDistance = require('../../problems/levenshteinDistance');

describe('levenshteinDistance()', () => {

  it('Test Case #1', () => {
    expect(levenshteinDistance('', '')).toEqual(0);
  });

  it('Test Case #2', () => {
    expect(levenshteinDistance('', 'abc')).toEqual(3);
  });

  it('Test Case #3', () => {
    expect(levenshteinDistance('abc', 'abc')).toEqual(0);
  });

  it('Test Case #4', () => {
    expect(levenshteinDistance('abc', 'abx')).toEqual(1);
  });

  it('Test Case #5', () => {
    expect(levenshteinDistance('abc', 'abcx')).toEqual(1);
  });

  it('Test Case #6', () => {
    expect(levenshteinDistance('abc', 'yabcx')).toEqual(2);
  });

  it('Test Case #7', () => {
    expect(levenshteinDistance('algoexpert', 'algozexpert')).toEqual(1);
  });

  it('Test Case #8', () => {
    expect(levenshteinDistance('abcdefghij', '1234567890')).toEqual(10);
  });

  it('Test Case #9', () => {
    expect(levenshteinDistance('abcdefghij', 'a234567890')).toEqual(9);
  });

  it('Test Case #10', () => {
    expect(levenshteinDistance('biting', 'mitten')).toEqual(4);
  });

  it('Test Case #11', () => {
    expect(levenshteinDistance('cereal', 'saturday')).toEqual(6);
  });

  it('Test Case #12', () => {
    expect(levenshteinDistance('cereal', 'saturdzz')).toEqual(7);
  });

  it('Test Case #13', () => {
    expect(levenshteinDistance('abbbbbbbbb', 'bbbbbbbbba')).toEqual(2);
  });

  it('Test Case #14', () => {
    expect(levenshteinDistance('abc', 'yabd')).toEqual(2);
  });

  it('Test Case #15', () => {
    expect(levenshteinDistance('xabc', 'abcx')).toEqual(2);
  });

});