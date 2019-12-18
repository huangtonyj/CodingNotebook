const groupAnagrams = require('../../problems/groupAnagrams');

describe('groupAnagrams()', () => {
  
  test('Test Case #1', () => {
    const words = [];
    const expected = [];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #2', () => {
    const words = ['test'];
    const expected = [['test']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #3', () => {
    const words = ['abc', 'dabd', 'bca', 'cab', 'ddba'];
    const expected = [['abc', 'bca', 'cab'], ['dabd', 'ddba']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #4', () => {
    const words = ['abc', 'cba', 'bca'];
    const expected = [['abc', 'cba', 'bca']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #5', () => {
    const words = ['zxc', 'asd', 'weq', 'sda', 'qwe', 'xcz'];
    const expected = [['zxc', 'xcz'], ['asd', 'sda'], ['qwe', 'weq']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #6', () => {
    const words = ['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp'];
    const expected = [['yo', 'oy'], ['flop', 'olfp'], ['act', 'tac', 'cat']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #7', () => {
    const words = ['cinema', 'a', 'flop', 'iceman', 'meacyne', 'lofp', 'olfp'];
    const expected = [
      ['cinema', 'iceman'],
      ['flop', 'lofp', 'olfp'],
      ['a'],
      ['meacyne'],
    ];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });
  
  test('Test Case #8', () => {
    const words = ['abc', 'abe', 'abf', 'abg'];
    const expected = [['abc'], ['abe'], ['abf'], ['abg']];
    const output = groupAnagrams(words);
  
    compare(expected, output);
  });

});

function compare(expected, output) {
  expected = expected.map(el => el.sort()).sort();
  output = output.map(el => el.sort()).sort();
  expect(expected).toEqual(output);
}