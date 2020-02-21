const patternMatcher = require('../../problems/patternMatcher');

describe('patternMatcher()', () => {
  test('Test Case #1', () => {
    expect(patternMatcher('xyxy', 'abab')).toEqual({x: 'a', y: 'b'});
  });

  test('Test Case #2', () => {
    expect(patternMatcher('yxyx', 'abab')).toEqual({x: 'b', y: 'a'});
  });

  test('Test Case #3', () => {
    expect(patternMatcher('yxx', 'yomama')).toEqual({x: 'ma', y: 'yo'});
  });

  test('Test Case #4', () => {
    expect(patternMatcher('xxyxxy', 'gogopowerrangergogopowerranger')).toEqual({x: 'go', y: 'powerranger'});
  });

  test('Test Case #5', () => {
    expect(patternMatcher('yyxyyx', 'gogopowerrangergogopowerranger')).toEqual({x: 'powerranger', y: 'go'});
  });

  test('Test Case #6', () => {
    expect(patternMatcher(
      'xyxxxyyx',
      'baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom'
    )).toEqual({x: 'baddaddoom', y: 'baddaddoomi'});
  });

  test('Test Case #7', () => {
    expect(patternMatcher(
      'yxyyyxxy',
      'baddaddoombaddaddoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom'
    )).toEqual({x: 'baddaddoomi', y: 'baddaddoom'});
  });

  test('Test Case #8', () => {
    expect(patternMatcher('xxyxyy', 'testtestwrongtestwrongtest')).toEqual({});
  });

  test('Test Case #9', () => {
    expect(patternMatcher(
      'xyxxxyyx',
      'baddaddoombaddadoomibaddaddoombaddaddoombaddaddoombaddaddoomibaddaddoomibaddaddoom'
    )).toEqual({});
  });

  test('Test Case #10', () => {
    expect(patternMatcher('xyx', 'thisshouldobviouslybewrong')).toEqual({});
  });

  test('Test Case #11', () => {
    expect(patternMatcher('xxxx', 'testtesttesttest')).toEqual({x: 'test', y: ''});
  });

  test('Test Case #12', () => {
    expect(patternMatcher('yyyy', 'testtesttesttest')).toEqual({x: '', y: 'test'});
  });
});