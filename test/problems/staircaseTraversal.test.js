const staircaseTraversal = require('../../problems/staircaseTraversal');

describe('staircaseTraversal()', () => {
  
  it('Test Case 1', () => {
    const height = 4;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(5);
  });
  
  it('Test Case 2', () => {
    const height = 10;
    const maxSteps = 1;
    expect(staircaseTraversal(height, maxSteps)).toEqual(1);
  });
  
  it('Test Case 3', () => {
    const height = 10;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(89);
  });
  
  it('Test Case 4', () => {
    const height = 4;
    const maxSteps = 3;
    expect(staircaseTraversal(height, maxSteps)).toEqual(7);
  });
  
  it('Test Case 5', () => {
    const height = 1;
    const maxSteps = 1;
    expect(staircaseTraversal(height, maxSteps)).toEqual(1);
  });
  
  it('Test Case 6', () => {
    const height = 5;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(8);
  });
  
  it('Test Case 7', () => {
    const height = 4;
    const maxSteps = 4;
    expect(staircaseTraversal(height, maxSteps)).toEqual(8);
  });
  
  it('Test Case 8', () => {
    const height = 6;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(13);
  });
  
  it('Test Case 9', () => {
    const height = 100;
    const maxSteps = 1;
    expect(staircaseTraversal(height, maxSteps)).toEqual(1);
  });
  
  it('Test Case 10', () => {
    const height = 15;
    const maxSteps = 5;
    expect(staircaseTraversal(height, maxSteps)).toEqual(13624);
  });
  
  it('Test Case 11', () => {
    const height = 7;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(21);
  });
  
  it('Test Case 12', () => {
    const height = 6;
    const maxSteps = 3;
    expect(staircaseTraversal(height, maxSteps)).toEqual(24);
  });
  
  it('Test Case 13', () => {
    const height = 3;
    const maxSteps = 2;
    expect(staircaseTraversal(height, maxSteps)).toEqual(3);
  });

});  
