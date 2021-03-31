const quickSelect = require('../../algorithms/quickSelect');

describe('quickSelect()', () => {
  it('Test Case #1', () => {
    expect(quickSelect([1], 1))
      .toEqual(1);
  });

  it('Test Case #2', () => {
    expect(quickSelect([43, 24, 37], 1))
      .toEqual(24);
  });

  it('Test Case #3', () => {
    expect(quickSelect([43, 24, 37], 2))
      .toEqual(37);
  });

  it('Test Case #4', () => {
    expect(quickSelect([43, 24, 37], 3))
      .toEqual(43);
  });

  it('Test Case #5', () => {
    expect(quickSelect([8, 5, 2, 9, 7, 6, 3], 3))
      .toEqual(5);
  });

  it('Test Case #6', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 1))
      .toEqual(1);
  });

  it('Test Case #7', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 2))
      .toEqual(2);
  });

  it('Test Case #8', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 3))
      .toEqual(3);
  });

  it('Test Case #9', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 4))
      .toEqual(4);
  });

  it('Test Case #10', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 5))
      .toEqual(5);
  });

  it('Test Case #11', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 6))
      .toEqual(6);
  });

  it('Test Case #12', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 7))
      .toEqual(7);
  });

  it('Test Case #13', () => {
    expect(quickSelect([8, 3, 2, 5, 1, 7, 4, 6], 8))
      .toEqual(8);
  });

  it('Test Case #14', () => {
    expect(quickSelect([102, 41, 58, 81, 2, -5, 1000, 10021, 181, -14515, 25, 15], 5))
      .toEqual(25);
  });

  it('Test Case #15', () => {
    expect(quickSelect([102, 41, 58, 81, 2, -5, 1000, 10021, 181, -14515, 25, 15], 4))
      .toEqual(15);
  });

  it('Test Case #16', () => {
    expect(quickSelect([102, 41, 58, 81, 2, -5, 1000, 10021, 181, -14515, 25, 15], 9))
      .toEqual(102);
  });

  it('Test Case #17', () => {
    expect(quickSelect([1, 3, 71, 123, 124, 156, 814, 1294, 10024, 110000, 985181, 55516151125], 12))
      .toEqual(55516151125);
  });

  it('Test Case #18', () => {
    expect(quickSelect([1, 3, 71, 123, 124, 156, 814, 1294, 10024, 110000, 985181, 55516151125], 4))
      .toEqual(123);
  });
})