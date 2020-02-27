const boggleBoard = require('../../problems/findBoggleWords');

describe('boggleBoard()', () => {

  it('Test Case #1', function () {
    const board = [
      ['y', 'g', 'f', 'y', 'e', 'i'],
      ['c', 'o', 'r', 'p', 'o', 'u'],
      ['j', 'u', 'z', 's', 'e', 'l'],
      ['s', 'y', 'u', 'r', 'h', 'p'],
      ['e', 'a', 'e', 'g', 'n', 'd'],
      ['h', 'e', 'l', 's', 'a', 't'],
    ];
    const words = [
      'san',
      'sana',
      'at',
      'vomit',
      'yours',
      'help',
      'end',
      'been',
      'bed',
      'danger',
      'calm',
      'ok',
      'chaos',
      'complete',
      'rear',
      'going',
      'storm',
      'face',
      'epual',
      'dangerous',
    ];
    const expected = ['yours', 'help', 'danger', 'san', 'at'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #2', function () {
    const board = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i', 'j'],
      ['k', 'l', 'm', 'n', 'o'],
      ['p', 'q', 'r', 's', 't'],
      ['u', 'v', 'w', 'x', 'y'],
    ];
    const words = ['agmsy', 'agmsytojed', 'agmsytojedinhcbgl', 'agmsytojedinhcbfl'];
    const expected = ['agmsy', 'agmsytojed', 'agmsytojedinhcbfl'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #3', function () {
    const board = [
      ['a', 'b'],
      ['c', 'd'],
    ];
    const words = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'abca'];
    const expected = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #4', function () {
    const board = [
      ['f', 't', 'r', 'o', 'p', 'i', 'k', 'b', 'o'],
      ['r', 'w', 'l', 'p', 'e', 'u', 'e', 'a', 'b'],
      ['j', 'o', 't', 's', 'e', 'l', 'f', 'l', 'p'],
      ['s', 'z', 'u', 't', 'h', 'u', 'o', 'p', 'i'],
      ['k', 'a', 'e', 'g', 'n', 'd', 'r', 'g', 'a'],
      ['h', 'n', 'l', 's', 'a', 't', 'e', 't', 'x'],
    ];
    const words = ['frozen', 'rotten', 'teleport', 'city', 'zutgatz', 'kappa', 'before', 'rope', 'obligate', 'annoying'];
    const expected = ['frozen', 'rotten', 'teleport', 'kappa', 'before', 'rope', 'obligate'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #5', function () {
    const board = [
      ['c', 'o', 'm'],
      ['r', 'p', 'l'],
      ['c', 'i', 't'],
      ['o', 'a', 'e'],
      ['f', 'o', 'd'],
      ['z', 'r', 'b'],
      ['g', 'i', 'a'],
      ['o', 'a', 'g'],
      ['f', 's', 'z'],
      ['t', 'e', 'i'],
      ['t', 'w', 'd'],
    ];
    const words = ['commerce', 'complicated', 'twisted', 'zigzag', 'comma', 'foobar', 'baz', 'there'];
    const expected = ['complicated', 'twisted', 'zigzag', 'foobar'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #6', function () {
    const board = [
      ['c', 'o', 'm'],
      ['r', 'p', 'l'],
      ['c', 'i', 't'],
      ['o', 'a', 'e'],
      ['f', 'o', 'd'],
      ['z', 'r', 'b'],
      ['g', 'i', 'a'],
      ['o', 'a', 'g'],
      ['f', 's', 'z'],
      ['t', 'e', 'i'],
      ['t', 'w', 'd'],
    ];
    const words = ['cr', 'oc', 'ml', 'iao', 'opo', 'zrb', 'big', 'fs', 'ogiagao', 'dwd', 'twt'];
    const expected = ['cr', 'oc', 'ml', 'iao', 'zrb', 'big', 'fs', 'twt'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #7', function () {
    const board = [
      ['c', 'o', 'm'],
      ['r', 'p', 'l'],
      ['c', 'i', 't'],
      ['o', 'a', 'e'],
      ['f', 'o', 'd'],
      ['z', 'r', 'b'],
      ['g', 'i', 'a'],
      ['o', 'a', 'g'],
      ['f', 's', 'z'],
      ['t', 'e', 'i'],
      ['t', 'w', 'd'],
    ];
    const words = [
      'comlpriteacoofziraagsizefttw',
      'comlpriteacoofzirabagsizefottw',
      'comlpriteacoofziraagsizefottw',
      'comlpriteacoofzirabagsizeftttw',
    ];
    const expected = ['comlpriteacoofziraagsizefttw'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });

  it('Test Case #8', function () {
    const board = [
      ['t', 'h', 'i', 's', 'i', 's', 'a'],
      ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
      ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
      ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
      ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
      ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
      ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
      ['N', 'O', 'T', 'R', 'E', '-', 'P'],
      ['x', 'x', 'D', 'E', 'T', 'A', 'E'],
    ];
    const words = ['this', 'is', 'not', 'a', 'simple', 'boggle', 'board', 'test', 'REPEATED', 'NOTRE-PEATED'];
    const expected = ['this', 'is', 'a', 'simple', 'boggle', 'board', 'NOTRE-PEATED'];
    const actual = boggleBoard(board, words);
    expect(actual.length).toEqual(expected.length);
    for (const word of actual) {
      expect(actual.includes(word)).toEqual(true);
    }
  });
});