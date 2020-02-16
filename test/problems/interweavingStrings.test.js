const interweavingStrings = require('../../problems/interweavingStrings');

describe('interweavingStrings()', () => {
  it('Test Case #1', () => {
    const one = 'a';
    const two = 'b';
    const three = 'ab';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #2', () => {
    const one = 'a';
    const two = 'b';
    const three = 'ba';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #3', () => {
    const one = 'a';
    const two = 'b';
    const three = 'ac';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #4', () => {
    const one = 'abc';
    const two = 'def';
    const three = 'abcdef';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #5', () => {
    const one = 'abc';
    const two = 'def';
    const three = 'adbecf';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #6', () => {
    const one = 'abc';
    const two = 'def';
    const three = 'deabcf';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #7', () => {
    const one = 'aabcc';
    const two = 'dbbca';
    const three = 'aadbbcbcac';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #8', () => {
    const one = 'aabcc';
    const two = 'dbbca';
    const three = 'aadbbbaccc';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #9', () => {
    const one = 'algoexpert';
    const two = 'your-dream-job';
    const three = 'your-algodream-expertjob';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #10', () => {
    const one = 'algoexpert';
    const two = 'your-dream-job';
    const three = 'ayloguore-xdpreeratm-job';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #11', () => {
    const one = 'aaaaaaa';
    const two = 'aaaabaaa';
    const three = 'aaaaaaaaaaaaaab';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #12', () => {
    const one = 'aaaaaaa';
    const two = 'aaaaaaa';
    const three = 'aaaaaaaaaaaaaa';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #13', () => {
    const one = 'aacaaaa';
    const two = 'aaabaaa';
    const three = 'aaaabacaaaaaaa';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #14', () => {
    const one = 'aacaaaa';
    const two = 'aaabaaa';
    const three = 'aaaacabaaaaaaa';
    expect(interweavingStrings(one, two, three)).toEqual(true);
  });

  it('Test Case #15', () => {
    const one = 'aacaaaa';
    const two = 'aaabaaa';
    const three = 'aaaaaacbaaaaaa';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #16', () => {
    const one = 'algoexpert';
    const two = 'your-dream-job';
    const three = '1your-algodream-expertjob';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #17', () => {
    const one = 'algoexpert';
    const two = 'your-dream-job';
    const three = 'your-algodream-expertjob1';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });

  it('Test Case #18', () => {
    const one = 'algoexpert';
    const two = 'your-dream-job';
    const three = 'your-algodream-expertjo';
    expect(interweavingStrings(one, two, three)).toEqual(false);
  });
});
