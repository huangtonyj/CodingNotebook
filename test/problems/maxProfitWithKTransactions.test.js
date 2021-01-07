const maxProfitWithKTransactions = require('../../problems/maxProfitWithKTransactions');

describe('maxProfitWithKTransactions()', () => {

  it('Test Case 1', () => {
    const expected = 93;
    const k = 2;
    const prices = [5, 11, 3, 50, 60, 90];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 2', () => {
    const expected = 0;
    const k = 1;
    const prices = [];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 3', () => {
    const expected = 0;
    const k = 1;
    const prices = [1];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 4', () => {
    const expected = 9;
    const k = 1;
    const prices = [1, 10];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 5', () => {
    const expected = 9;
    const k = 3;
    const prices = [1, 10];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 6', () => {
    const expected = 6;
    const k = 1;
    const prices = [3, 2, 5, 7, 1, 3, 7];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 7', () => {
    const expected = 93;
    const k = 3;
    const prices = [5, 11, 3, 50, 60, 90];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 8', () => {
    const expected = 97;
    const k = 2;
    const prices = [5, 11, 3, 50, 40, 90];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 9', () => {
    const expected = 103;
    const k = 3;
    const prices = [5, 11, 3, 50, 40, 90];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 10', () => {
    const expected = 106;
    const k = 2;
    const prices = [50, 25, 12, 4, 3, 10, 1, 100];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 11.', () => {
    const expected = 0;
    const k = 5;
    const prices = [100, 99, 98, 97, 1];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 12', () => {
    const expected = 1485;
    const k = 5;
    const prices = [1, 100, 2, 200, 3, 300, 4, 400, 5, 500];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 13', () => {
    const expected = 499;
    const k = 5;
    const prices = [1, 100, 101, 200, 201, 300, 301, 400, 401, 500];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 14', () => {
    const expected = 84;
    const k = 4;
    const prices = [1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });
    
  it('Test Case 15', () => {
    const expected = 62;
    const k = 2;
    const prices = [1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5];
  
    expect(maxProfitWithKTransactions(prices, k)).toEqual(expected);
  });

});