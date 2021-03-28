const {
  wordBreakBackTrack, 
  wordBreakBFS, 
  wordBreakDP
} = require('../../problems/wordBreak');

describe('wordBreakBackTrack()', () => {

  it('Test Case #1', () => {
    const s = 'leetcode';
    const wordDict = ['leet','code'];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(true);
  });

  it('Test Case #2', () => {
    const s = 'applepenapple';
    const wordDict = ['apple', 'pen'];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(true);
  });

  it('Test Case #3', () => {
    const s = 'catsanddog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(true);
  });

  it('Test Case #4', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(false);
  });

  it('Test Case #5', () => {
    const s = 'aaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(false);
  });

  it('Test Case #6', () => {
    const s =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakBackTrack(s, wordDict)).toEqual(false);
  });

});

describe('wordBreakBFS()', () => {

  it('Test Case #1', () => {
    const s = 'leetcode';
    const wordDict = ['leet', 'code'];

    expect(wordBreakBFS(s, wordDict)).toEqual(true);
  });

  it('Test Case #2', () => {
    const s = 'applepenapple';
    const wordDict = ['apple', 'pen'];

    expect(wordBreakBFS(s, wordDict)).toEqual(true);
  });

  it('Test Case #3', () => {
    const s = 'catsanddog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakBFS(s, wordDict)).toEqual(true);
  });

  it('Test Case #4', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakBFS(s, wordDict)).toEqual(false);
  });

  it('Test Case #5', () => {
    const s = 'aaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakBFS(s, wordDict)).toEqual(false);
  });

  it('Test Case #6', () => {
    const s =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakBFS(s, wordDict)).toEqual(false);
  });
  
});

describe('wordBreakDP()', () => {

  it('Test Case #1', () => {
    const s = 'leetcode';
    const wordDict = ['leet', 'code'];

    expect(wordBreakDP(s, wordDict)).toEqual(true);
  });

  it('Test Case #2', () => {
    const s = 'applepenapple';
    const wordDict = ['apple', 'pen'];

    expect(wordBreakDP(s, wordDict)).toEqual(true);
  });

  it('Test Case #3', () => {
    const s = 'catsanddog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakDP(s, wordDict)).toEqual(true);
  });

  it('Test Case #4', () => {
    const s = 'catsandog';
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];

    expect(wordBreakDP(s, wordDict)).toEqual(false);
  });

  it('Test Case #5', () => {
    const s = 'aaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakDP(s, wordDict)).toEqual(false);
  });

  it('Test Case #6', () => {
    const s =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
    const wordDict = [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ];

    expect(wordBreakDP(s, wordDict)).toEqual(false);
  });
  
});
