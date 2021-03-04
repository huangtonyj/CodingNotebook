const {
  cycleInGraphDFS, 
  cycleInGraphBFS, 
  cycleInGraphBFS2
} = require('../../problems/cycleInGraph');
describe('cycleInGraph()', () => {

  it('Test Case 1 failed', () => {
    const expected = true;
    const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 2 passed', () => {
    const expected = false;
    const edges = [[1, 2], [2], []];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 3 failed', () => {
    const expected = true;
    const edges = [[1, 2], [2], [1]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 4 failed', () => {
    const expected = true;
    const edges = [[1, 2], [2], [1, 3], [3]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 5 passed', () => {
    const expected = false;
    const edges = [[], [0, 2], [0, 3], [0, 4], [0, 5], [0]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 6 failed', () => {
    const expected = true;
    const edges = [[0]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 7 failed', () => {
    const expected = true;
    const edges = [[8], [0, 2], [0, 3], [0, 4], [0, 5], [0], [7], [8], [6]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 8 passed', () => {
    const expected = false;
    const edges = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], []];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 9 failed', () => {
    const expected = true;
    const edges = [[1], [2, 3, 4, 5, 6, 7], [], [2, 7], [5], [], [4], [0]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 10 failed', () => {
    const expected = true;
    const edges = [[0], [1]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 11 passed', () => {
    const expected = false;
    const edges = [[1, 2], [2], []];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
  it('Test Case 12 failed', () => {
    const expected = true;
    const edges = [[], [0, 3], [0], [1, 2]];
  
    expect(cycleInGraphDFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS(edges)).toEqual(expected);
    expect(cycleInGraphBFS2(edges)).toEqual(expected);
  });
    
});

