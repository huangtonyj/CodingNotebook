const numberOfWaysToTraverseGraph = require('../../problems/numberOfWaysToTraverseGraph');

describe('numberOfWaysToTraverseGraph()', () => {

  it('Test Case 1 ', () => {
    expect(numberOfWaysToTraverseGraph(4, 3)).toEqual(10);
  });
  
  it('Test Case 2', () => {
    expect(numberOfWaysToTraverseGraph(3, 2)).toEqual(3);
  });
  
  it('Test Case 3', () => {
    expect(numberOfWaysToTraverseGraph(2, 3)).toEqual(3);
  });
  
  it('Test Case 4', () => {
    expect(numberOfWaysToTraverseGraph(5, 5)).toEqual(70);
  });
  
  it('Test Case 5', () => {
    expect(numberOfWaysToTraverseGraph(5, 6)).toEqual(126);
  });
  
  it('Test Case 6', () => {
    expect(numberOfWaysToTraverseGraph(7, 5)).toEqual(210);
  });
  
  it('Test Case 7', () => {
    expect(numberOfWaysToTraverseGraph(10,  2)).toEqual(10);
  });
  
  it('Test Case 8', () => {
    expect(numberOfWaysToTraverseGraph(11,  2)).toEqual(11);
  });
  
  it('Test Case 9', () => {
    expect(numberOfWaysToTraverseGraph(5, 9)).toEqual(495);
  });
  
  it('Test Case 10', () => {
    expect(numberOfWaysToTraverseGraph(6, 7)).toEqual(462);
  });
  
  it('Test Case 11', () => {
    expect(numberOfWaysToTraverseGraph(8, 5)).toEqual(330);
  });
  
  it('Test Case 12', () => {
    expect(numberOfWaysToTraverseGraph(2, 2)).toEqual(2);
  });
  
  it('Test Case 13', () => {
    expect(numberOfWaysToTraverseGraph(2, 1)).toEqual(1);
  });
  
  it('Test Case 14', () => {
    expect(numberOfWaysToTraverseGraph(1, 2)).toEqual(1);
  });
  
  it('Test Case 15', () => {
    expect(numberOfWaysToTraverseGraph(3, 3)).toEqual(6);
  });

});  

