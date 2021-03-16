const permutations = require('../../problems/permutations');

describe('permutations()', () => {

  test('Test Case #1', () => {
    const perms = permutations([]);
    expect(perms.length).toEqual(0);
  });

  test('Test Case #2', () => {
    const perms = permutations([1]);
    expect(perms.length).toEqual(1);
    expect(perms).toEqual([[1]]);
  });

  test('Test Case #3', () => {
    const perms = permutations([1, 2]);
    expect(perms.length).toEqual(2);
    expect(perms).toContainEqual([1, 2]);
    expect(perms).toContainEqual([2, 1]);
  });

  test('Test Case #4', () => {
    const perms = permutations([1, 2, 3]);
    expect(perms.length).toEqual(6);
    expect(perms).toContainEqual([1, 2, 3]);
    expect(perms).toContainEqual([1, 3, 2]);
    expect(perms).toContainEqual([2, 1, 3]);
    expect(perms).toContainEqual([2, 3, 1]);
    expect(perms).toContainEqual([3, 1, 2]);
    expect(perms).toContainEqual([3, 2, 1]);
  });

  test('Test Case #5', () => {
    const perms = permutations([1, 2, 3, 4]);
    expect(perms.length).toEqual(24);
    expect(perms).toContainEqual([1, 2, 3, 4]);
    expect(perms).toContainEqual([1, 2, 4, 3]);
    expect(perms).toContainEqual([1, 3, 2, 4]);
    expect(perms).toContainEqual([1, 3, 4, 2]);
    expect(perms).toContainEqual([1, 4, 3, 2]);
    expect(perms).toContainEqual([1, 4, 2, 3]);
    expect(perms).toContainEqual([2, 1, 3, 4]);
    expect(perms).toContainEqual([2, 1, 4, 3]);
    expect(perms).toContainEqual([2, 3, 1, 4]);
    expect(perms).toContainEqual([2, 3, 4, 1]);
    expect(perms).toContainEqual([2, 4, 1, 3]);
    expect(perms).toContainEqual([2, 4, 3, 1]);
    expect(perms).toContainEqual([3, 1, 2, 4]);
    expect(perms).toContainEqual([3, 1, 4, 2]);
    expect(perms).toContainEqual([3, 2, 1, 4]);
    expect(perms).toContainEqual([3, 2, 4, 1]);
    expect(perms).toContainEqual([3, 4, 1, 2]);
    expect(perms).toContainEqual([3, 4, 2, 1]);
    expect(perms).toContainEqual([4, 1, 2, 3]);
    expect(perms).toContainEqual([4, 1, 3, 2]);
    expect(perms).toContainEqual([4, 2, 1, 3]);
    expect(perms).toContainEqual([4, 2, 3, 1]);
    expect(perms).toContainEqual([4, 3, 1, 2]);
    expect(perms).toContainEqual([4, 3, 2, 1]);
  });

});