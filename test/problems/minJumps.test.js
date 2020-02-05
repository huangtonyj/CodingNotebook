const minJumps = require('../../problems/minJumps');

describe('minJumps()', () => {
  it('Test Case #1', () => {
    expect(minJumps([1])).toEqual(0);
  });

  it('Test Case #2', () => {
    expect(minJumps([1, 1])).toEqual(1);
  });

  it('Test Case #3', () => {
    expect(minJumps([3, 1])).toEqual(1);
  });

  it('Test Case #4', () => {
    expect(minJumps([1, 1, 1])).toEqual(2);
  });

  it('Test Case #5', () => {
    expect(minJumps([2, 1, 1])).toEqual(1);
  });

  it('Test Case #6', () => {
    expect(minJumps([2, 1, 2, 3, 1])).toEqual(2);
  });

  it('Test Case #7', () => {
    expect(minJumps([2, 1, 2, 3, 1, 1, 1])).toEqual(3);
  });

  it('Test Case #8', () => {
    expect(minJumps([2, 1, 2, 2, 1, 1, 1])).toEqual(4);
  });

  it('Test Case #9', () => {
    expect(minJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])).toEqual(4);
  });

  it('Test Case #10', () => {
    expect(minJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1])).toEqual(5);
  });

  it('Test Case #11', () => {
    expect(minJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1])).toEqual(7);
  });

  it('Test Case #12', () => {
    expect(minJumps([3, 10, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1])).toEqual(6);
  });

  it('Test Case #13', () => {
    expect(minJumps([3, 12, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1])).toEqual(5);
  });

  it('Test Case #14', () => {
    expect(minJumps([3, 12, 2, 1, 2, 3, 15, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 1])).toEqual(3);
  });
});

