const validStartingCity = require('../../problems/validStartingCity');

describe('validStartingCity()', () => {

  it('Test Case 1', () => {
    const distances = [5, 25, 15, 10, 15];
    const fuel = [1, 2, 1, 0, 3];
    const mpg = 10;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(4);
  });
  
  it('Test Case 2', () => {
    const distances = [10, 20, 10, 15, 5, 15, 25];
    const fuel = [0, 2, 1, 0, 0, 1, 1];
    const mpg = 20;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(1);
  });
  
  it('Test Case 3', () => {
    const distances = [30, 25, 5, 100, 40];
    const fuel = [3, 2, 1, 0, 4];
    const mpg = 20;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(4);
  });
  
  it('Test Case 4', () => {
    const distances = [1, 3, 10, 6, 7, 7, 2, 4];
    const fuel = [1, 1, 1, 1, 1, 1, 1, 1];
    const mpg = 5;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(6);
  });
  
  it('Test Case 5', () => {
    const distances = [5, 2, 3];
    const fuel = [1, 0, 1];
    const mpg = 5;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(2);
  });
  
  it('Test Case 6', () => {
    const distances = [4, 6];
    const fuel = [1, 9];
    const mpg = 1;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(1);
  });
  
  it('Test Case 7', () => {
    const distances = [30, 40, 10, 10, 17, 13, 50, 30, 10, 40];
    const fuel = [1, 2, 0, 1, 1, 0, 3, 1, 0, 1];
    const mpg = 25;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(1);
  });
  
  it('Test Case 8', () => {
    const distances = [30, 40, 10, 10, 17, 13, 50, 30, 10, 40];
    const fuel = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const mpg = 25;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(0);
  });
  
  it('Test Case 9', () => {
    const distances = [15, 20, 25, 30, 35, 5];
    const fuel = [0, 3, 0, 0, 1, 1];
    const mpg = 26;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(5);
  });
  
  it('Test Case 10', () => {
    const distances = [10, 10, 10, 10];
    const fuel = [1, 2, 3, 4];
    const mpg = 4;
  
    expect(validStartingCity(distances, fuel, mpg)).toEqual(2);
  });
  
});