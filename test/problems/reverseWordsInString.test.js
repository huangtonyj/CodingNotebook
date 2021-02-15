const reverseWordsInString = require('../../problems/reverseWordsInString');

describe('reverseWordsInString()', () => {});


it('Test Case 1', () => {
  const expected = 'best! the is AlgoExpert';
  const string = 'AlgoExpert is the best!';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 2', () => {
  const expected = 'Words These Reverse';
  const string = 'Reverse These Words';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 3', () => {
  const expected = '678 hello ..H,,';
  const string = '..H,, hello 678';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 4', () => {
  const expected = 'this words this this this words this this';
  const string = 'this this words this this this words this';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 5', () => {
  const expected = '56 34 23 12 1';
  const string = '1 12 23 34 56';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 6', () => {
  const expected = 'ORANGE PLUM PEAR APPLE';
  const string = 'APPLE PEAR PLUM ORANGE';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 7', () => {
  const expected = 'this-is-one-word';
  const string = 'this-is-one-word';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 8', () => {
  const expected = 'a';
  const string = 'a';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 9', () => {
  const expected = 'ab';
  const string = 'ab';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 10', () => {
  const expected = '';
  const string = '';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 11', () => {
  const expected = 'interviews! coding for prepare to use to platform best the is algoexpert';
  const string = 'algoexpert is the best platform to use to prepare for coding interviews!';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 12', () => {
  const expected = 'commas by, separated, words,';
  const string = 'words, separated, by, commas';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 13', () => {
  const expected = 'whitespace   of lot     a has     string      this';
  const string = 'this      string     has a     lot of   whitespace';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 14', () => {
  const expected = 'a ab a';
  const string = 'a ab a';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 15', () => {
  const expected = '        test';
  const string = 'test        ';

  expect(reverseWordsInString(string)).toEqual(expected);
});

it('Test Case 16', () => {
  const expected = ' ';
  const string = ' ';

  expect(reverseWordsInString(string)).toEqual(expected);
});
