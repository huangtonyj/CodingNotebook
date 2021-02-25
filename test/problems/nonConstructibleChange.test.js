const nonConstructibleChange = require('../../problems/nonConstructibleChange');

describe('nonConstructibleChange()', () => {

  it('Test Case 1', () => {
    const expected = 20;
    const coins = [5, 7, 1, 1, 2, 3, 22];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = 6;
    const coins = [1, 1, 1, 1, 1];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = 55;
    const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = 3;
    const coins = [6, 4, 5, 1, 1, 8, 9];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = 1;
    const coins = [];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = 1;
    const coins = [87];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = 32;
    const coins = [5, 6, 1, 1, 2, 3, 4, 9];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 8', () => {
    const expected = 19;
    const coins = [5, 6, 1, 1, 2, 3, 43];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 9', () => {
    const expected = 3;
    const coins = [1, 1];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 10', () => {
    const expected = 1;
    const coins = [2];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 11', () => {
    const expected = 2;
    const coins = [1];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 12', () => {
    const expected = 87;
    const coins = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });
  
  it('Test Case 13', () => {
    const expected = 29;
    const coins = [1, 2, 3, 4, 5, 6, 7];
    expect(nonConstructibleChange(coins)).toEqual(expected);
  });

});  


