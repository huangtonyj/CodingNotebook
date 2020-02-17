const underscorifySubstring = require('../../problems/underscorifySubstring');

describe('underscorifySubstring()', () => {
  it('Test Case #1', () => {
    expect(underscorifySubstring('this is a test to see if it works', 'test'))
      .toEqual('this is a _test_ to see if it works');
  });

  it('Test Case #2', () => {
    expect(underscorifySubstring('test this is a test to see if it works', 'test'))
      .toEqual('_test_ this is a _test_ to see if it works');
  });

  it('Test Case #3', () => {
    expect(underscorifySubstring('testthis is a test to see if it works', 'test'))
      .toEqual('_test_this is a _test_ to see if it works');
  });

  it('Test Case #4', () => {
    expect(underscorifySubstring('testthis is a testest to see if testestes it works', 'test'))
      .toEqual('_test_this is a _testest_ to see if _testest_es it works');
  });

  it('Test Case #5', () => {
    expect(underscorifySubstring('testthis is a testtest to see if testestest it works', 'test'))
      .toEqual('_test_this is a _testtest_ to see if _testestest_ it works');
  });

  it('Test Case #6', () => {
    expect(underscorifySubstring('this is a test to see if it works and test', 'test'))
      .toEqual('this is a _test_ to see if it works and _test_');
  });

  it('Test Case #7', () => {
    expect(underscorifySubstring('this is a test to see if it works and test', 'bfjawkfja'))
      .toEqual('this is a test to see if it works and test');
  });

  it('Test Case #8', () => {
    expect(underscorifySubstring('ttttttttttttttbtttttctatawtatttttastvb', 'ttt'))
      .toEqual('_tttttttttttttt_b_ttttt_ctatawta_ttttt_astvb');
  });

  it('Test Case #9', () => {
    expect(underscorifySubstring('tzttztttz', 'ttt')).toEqual('tzttz_ttt_z');
  });

  it('Test Case #10', () => {
    expect(underscorifySubstring('abababababababababababababaababaaabbababaa', 'a'))
      .toEqual('_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_a_b_aa_b_a_b_aaa_bb_a_b_a_b_aa_');
  });

  it('Test Case #11', () => {
    expect(underscorifySubstring('abcabcabcabcabcabcabcabcabcabcabcabcabcabc', 'abc'))
      .toEqual('_abcabcabcabcabcabcabcabcabcabcabcabcabcabc_');
  });
});