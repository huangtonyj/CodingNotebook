const shiftedBinarySearch = require('../../problems/shiftedBinarySearch');

describe('shiftedBinarySearch()', () => {

  it('Test Case 1', () => {
    const expected = 8;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 33;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = 2;
    const array = [5, 23, 111, 1];
    const target = 111;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = 2;
    const array = [111, 1, 5, 23];
    const target = 5;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = -1;
    const array = [23, 111, 1, 5];
    const target = 35;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = 7;
    const array = [61, 71, 72, 73, 0, 1, 21, 33, 37, 45];
    const target = 33;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 6', () => {
    const expected = 0;
    const array = [72, 73, 0, 1, 21, 33, 37, 45, 61, 71];
    const target = 72;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 7', () => {
    const expected = 2;
    const array = [71, 72, 73, 0, 1, 21, 33, 37, 45, 61];
    const target = 73;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 8', () => {
    const expected = -1;
    const array = [73, 0, 1, 21, 33, 37, 45, 61, 71, 72];
    const target = 70;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 9', () => {
    const expected = 7;
    const array = [33, 37, 45, 61, 71, 72, 73, 355, 0, 1, 21];
    const target = 355;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 10', () => {
    const expected = -1;
    const array = [33, 37, 45, 61, 71, 72, 73, 355, 0, 1, 21];
    const target = 354;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 11', () => {
    const expected = 0;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 45;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 12', () => {
    const expected = 1;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 61;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 13', () => {
    const expected = 2;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 71;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 14', () => {
    const expected = 3;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 72;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 15', () => {
    const expected = 4;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 73;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 16', () => {
    const expected = 5;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 0;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 17', () => {
    const expected = 6;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 1;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 18', () => {
    const expected = 7;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 21;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 19', () => {
    const expected = 9;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 37;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 20', () => {
    const expected = -1;
    const array = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37];
    const target = 38;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 21', () => {
    const expected = 0;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 0;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 22', () => {
    const expected = 1;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 1;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 23', () => {
    const expected = 2;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 21;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 24', () => {
    const expected = 3;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 33;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 25', () => {
    const expected = 4;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 37;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 26', () => {
    const expected = 5;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 45;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 27', () => {
    const expected = 6;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 61;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 28', () => {
    const expected = 7;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 71;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 29', () => {
    const expected = 8;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 72;
    
    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
  it('Test Case 30', () => {
    const expected = 9;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 73;

    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });

  it('Test Case 31', () => {
    const expected = -1;
    const array = [0, 1, 21, 33, 37, 45, 61, 71, 72, 73];
    const target = 38;

    expect(shiftedBinarySearch(array, target)).toEqual(expected);
  });
  
});