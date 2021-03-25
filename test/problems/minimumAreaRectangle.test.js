const minimumAreaRectangle = require('../../problems/minimumAreaRectangle');

describe('minimumAreaRectangle()', () => {
  it('Test Case 1', () => {
    const points = [[1, 5],[5, 1],[4, 2],[2, 4],[2, 2],[1, 2],[4, 5],[2, 5],[-1, -2]];
  
    expect(minimumAreaRectangle(points)).toEqual(3);
  });
  
  it('Test Case 2', () => {
    const points = [[-4, 4],[4, 4],[4, -2],[-4, -2],[0, -2],[4, 2],[0, 2]];
  
    expect(minimumAreaRectangle(points)).toEqual(16);
  });
  
  it('Test Case 3', () => {
    const points = [[-4, 4],[4, 4],[4, -2],[-4, -2],[0, -2],[4, 2],[0, 2],[0, 4],[2, 3],[0, 3],[2, 4]];
  
    expect(minimumAreaRectangle(points)).toEqual(2);
  });
  
  it('Test Case 4', () => {
    const points = [[0, 0],[4, 4],[8, 8],[0, 8]];
  
    expect(minimumAreaRectangle(points)).toEqual(0);
  });
  
  it('Test Case 5', () => {
    const points = [[0, 0],[4, 4],[8, 8],[0, 8],[0, 4],[6, 0],[6, 4]];
  
    expect(minimumAreaRectangle(points)).toEqual(24);
  });
  
  it('Test Case 6', () => {
    const points = [[0, 0],[4, 4],[8, 8],[0, 8],[0, 4],[6, 0],[6, 4],[8, 0],[8, 4],[6, 2],[2, 4],[2, 0]];
  
    expect(minimumAreaRectangle(points)).toEqual(8);
  });
  
  it('Test Case 7', () => {
    const points = [[0, 0],[1, 1],[2, 2],[-1, -1],[-2, -2],[-1, 1],[-2, 2],[1, -1],[2, -2]];
  
    expect(minimumAreaRectangle(points)).toEqual(4);
  });
  
  it('Test Case 8', () => {
    const points = [[0, 1],[0, 0],[2, 1],[2, 0],[4, 0],[4, 1],[0, 2],[2, 2],[4, 2],[6, 0],[6, 1],[6, 2],[7, 1],[7, 0]];
  
    expect(minimumAreaRectangle(points)).toEqual(1);
  });
  
  it('Test Case 9', () => {
    const points = [[0, 1],[0, 0],[2, 1],[2, 0],[4, 0],[4, 1],[0, 2],[2, 2],[4, 2],[6, 0],[6, 1],[6, 2],[7, 1]];
  
    expect(minimumAreaRectangle(points)).toEqual(2);
  });
  
  it('Test Case 10', () => {
    const points = [[100, 100],[76, 67],[-100, 100],[65, 76],[100, -100],[3, 4],[-100, -100],[5, 6],[78, 54],[-87, 7],[1, 4],[4, 1],[-1, 5]];
  
    expect(minimumAreaRectangle(points)).toEqual(40000);
  });
  
  it('Test Case 11', () => {
    const points = [];
  
    expect(minimumAreaRectangle(points)).toEqual(0);
  });
  
  it('Test Case 12', () => {
    const points = [[1, 2],[4, 2]];
  
    expect(minimumAreaRectangle(points)).toEqual(0);
  });
  
  it('Test Case 13', () => {
    const points = [[2, 2],[3, 2],[4, 2]];
  
    expect(minimumAreaRectangle(points)).toEqual(0);
  });
});



