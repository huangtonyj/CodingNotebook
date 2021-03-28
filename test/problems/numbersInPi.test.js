const numbersInPi = require('../../problems/numbersInPi');

describe('numbersInPi()', () => {

  it('Test Case 1', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"];
  
    expect(numbersInPi(pi, numbers)).toEqual(2);
  });

  it('Test Case 2', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["314159265358979323846264338327", "9"];
  
    expect(numbersInPi(pi, numbers)).toEqual(1);
  });

  it('Test Case 3', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "314", "49", "9001", "15926535897", "14", "9323", "8462643383279", "4", "793"];
  
    expect(numbersInPi(pi, numbers)).toEqual(3);
  });
  
  it('Test Case 4', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3141592653589793238462643383279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(0);
  });

  it('Test Case 5', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3141", "1512", "159", "793", "12412451", "8462643383279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(-1);
  });

  it('Test Case 6', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79"];
  
    expect(numbersInPi(pi, numbers)).toEqual(2);
  });

  it('Test Case 7', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["141592653589793238462643383279", "314159265358979323846", "327", "26433", "8", "3279", "9", "314159265", "35897932384626433832", "79", "3"];
  
    expect(numbersInPi(pi, numbers)).toEqual(1);
  });

  it('Test Case 8', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "83279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(13);
  });

  it('Test Case 9', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "1", "4", "592", "65", "55", "35", "8", "9793", "2384626", "383279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(12);
  });

  it('Test Case 10', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "141", "592", "65", "55", "35", "8", "9793", "2384626", "383279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(-1);
  });

  it('Test Case 11', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "141", "592", "65", "55", "35", "8", "9793", "23846264", "383279"];
  
    expect(numbersInPi(pi, numbers)).toEqual(9);
  });

  it('Test Case 12', () => {
    const pi = "3141592653589793238462643383279";
    const numbers = ["3", "141", "592", "65", "55", "35", "8", "9793", "23846264", "3832798"];
  
    expect(numbersInPi(pi, numbers)).toEqual(-1);
  });
  
});


