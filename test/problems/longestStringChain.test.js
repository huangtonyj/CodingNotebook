const longestStringChain = require('../../problems/longestStringChain');

describe('longestStringChain()', () => {
  
  it('Test Case 1', () => {
    const expected = ['abcdef', 'abcde', 'abde', 'ade', 'ae'];
    const strings = ['abde', 'abc', 'abd', 'abcde', 'ade', 'ae', '1abde', 'abcdef'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = ['abcdefg', 'abcdef', 'abcde', 'abcd', 'abc', 'ab', 'a'];
    const strings = ['abcdefg', 'abcdef', 'abcde', 'abcd', 'abc', 'ab', 'a'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = ['abcdefg', 'abdefg', 'abdfg', 'bdfg', 'bfg', 'bg', 'g'];
    const strings = ['abcdefg', 'abdefg', 'abdfg', 'bdfg', 'bfg', 'bg', 'g'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = ['12a345', '12345', '1234', '123', '12'];
    const strings = ['abcdefg', '1234', 'abdefg', 'abdfg', '123', '12', 'bg', 'g', '12345', '12a345'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = [];
    const strings = ['abcdefg1', '1234c', 'abdefg2', 'abdfg', '123', '122', 'bgg', 'g', '1a2345', '12a345'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = ['algoexpert', 'algoxpert', 'algoxprt', 'lgoxprt', 'lgoprt', 'lgopt', 'lgpt'];
    const strings = ['lgoprt', '12345678', 'algoxpert', 'abcde', '123468', 'lgoxprt', 'abde', 'lgopt', '1234678', 'ade', 'ae', 'algoxprt', 'a', '1abde', 'lgpt', '123456789', '234678', 'algoexpert'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = ['1abde', 'abde', 'ade', 'ae', 'a'];
    const strings = ['12345678', 'algoxpert', '123468', 'abde', 'lgopt', '1234678', 'ade', 'ae', 'a', '1abde', 'lgpt', '123456789', '234678', 'algoexpert'];
  
    expect(longestStringChain(strings)).toEqual(expected);
  });

});



