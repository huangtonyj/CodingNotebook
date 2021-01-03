const removeIslands = require('../../problems/removeIslands');

describe('removeIslands()', () => {

  it('Test Case 1', () => {  
    const expected = [
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1]
    ];
    
    const matrix = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 2', () => {  
    const expected = [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ];
    
    const matrix = [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 3', () => {  
    const expected = [[1, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 1, 1, 0]];
    const matrix = [[1, 0, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 1, 1, 0]];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 4', () => {  
    const expected = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1]
    ];
    
    const matrix = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 5', () => {  
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    
    const matrix = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 6', () => {  
    const expected = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    
    const matrix = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 7', () => {  
    const expected = [[1]];
    const matrix = [[1]];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 8', () => {  
    const expected = [
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0]
    ];
    
    const matrix = [
      [1, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 0, 1, 0, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 0, 0]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 9', () => {  
    const expected = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];
    
    const matrix = [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 10', () => {  
    const expected = [
      [1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1]
    ];
    
    const matrix = [
      [1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 11', () => {  
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    
    const matrix = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 12', () => {  
    const expected = [
      [1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1]
    ];
    
    const matrix = [
      [1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 13', () => {  
    const expected = [
      [1, 0, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 1]
    ];
    
    const matrix = [
      [1, 0, 1, 1, 1, 0],
      [1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 1]
    ];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 14', () => {  
    const expected = [[0, 1, 0], [0, 1, 0], [1, 0, 0]];
    const matrix = [[0, 1, 0], [0, 1, 0], [1, 0, 0]];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });
  
  it('Test Case 15', () => {  
    const expected = [[1, 1], [1, 1]];
    const matrix = [[1, 1], [1, 1]];
  
    expect(removeIslands(matrix)).toEqual(expected);
  });

});




