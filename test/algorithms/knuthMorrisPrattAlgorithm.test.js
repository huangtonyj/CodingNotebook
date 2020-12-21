const knuthMorrisPrattAlgorithm = require('../../algorithms/knuthMorrisPrattAlgorithm');

describe('knuthMorrisPrattAlgorithm()', () => {

  it('Test Case 1', () => {
    expect(knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefcdaed")).toEqual(true);
  });

  it('Test Case 2', () => {
    expect(knuthMorrisPrattAlgorithm("testwafwafawfawfawfawfawfawfawfa", "fawfawfawfawfa")).toEqual(true);
  });

  it('Test Case 3', () => {
    expect(knuthMorrisPrattAlgorithm("tesseatesgawatewtesaffawgfawtteafawtesftawfawfawfwfawftest", "test")).toEqual(true);
  });

  it('Test Case 4', () => {
    expect(knuthMorrisPrattAlgorithm("aaabaabacdedfaabaabaaa", "aabaabaaa")).toEqual(true);
  });

  it('Test Case 5', () => {
    expect(knuthMorrisPrattAlgorithm("abxabcabcaby", "abcaby")).toEqual(true);
  });

  it('Test Case 6', () => {
    expect(knuthMorrisPrattAlgorithm("decadaafcdf", "daf")).toEqual(false);
  });

  it('Test Case 7', () => {
    expect(knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefcaefaeiaefcd")).toEqual(false);
  });

  it('Test Case 8', () => {
    expect(knuthMorrisPrattAlgorithm("aefcdfaecdaefaefcdaefeaefcdcdeae", "aefcdaefeaefcd")).toEqual(true);
  });

  it('Test Case 9', () => {
    expect(knuthMorrisPrattAlgorithm("bccbefbcdabbbcabfdcfe", "abc")).toEqual(false);
  });

  it('Test Case 10', () => {
    expect(knuthMorrisPrattAlgorithm("adafccfefbbbfeeccbcfd", "ecb")).toEqual(false);
  });

  it('Test Case 11', () => {
    expect(knuthMorrisPrattAlgorithm("testwherethefullstringmatches", "testwherethefullstringmatches")).toEqual(true);
  });

  it('Test Case 12', () => {
    expect(knuthMorrisPrattAlgorithm("aabc", "abc")).toEqual(true);
  });
  
});