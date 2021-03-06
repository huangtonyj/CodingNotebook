const generateDivTags = require('../../problems/generateDivTags');

describe('generateDivTags()', () => {

  it('Test Case 1', () => {
    const expected = [
      '<div><div><div></div></div></div>',
      '<div><div></div><div></div></div>',
      '<div><div></div></div><div></div>',
      '<div></div><div><div></div></div>',
      '<div></div><div></div><div></div>'
    ];
    expect(generateDivTags(3)).toEqual(expected);
  });
  
  it('Test Case 2', () => {
    const expected = [
      '<div><div></div></div>', 
      '<div></div><div></div>' 
    ];
    expect(generateDivTags(2)).toEqual(expected);
  });
  
  it('Test Case 3', () => {
    const expected = ['<div></div>'];
    expect(generateDivTags(1)).toEqual(expected);
  });
  
  it('Test Case 4', () => {
    const expected = [
      '<div><div><div><div></div></div></div></div>',
      '<div><div><div></div><div></div></div></div>',
      '<div><div><div></div></div><div></div></div>',
      '<div><div><div></div></div></div><div></div>',
      '<div><div></div><div><div></div></div></div>',
      '<div><div></div><div></div><div></div></div>',
      '<div><div></div><div></div></div><div></div>',
      '<div><div></div></div><div><div></div></div>',
      '<div><div></div></div><div></div><div></div>',
      '<div></div><div><div><div></div></div></div>',
      '<div></div><div><div></div><div></div></div>',
      '<div></div><div><div></div></div><div></div>',
      '<div></div><div></div><div><div></div></div>',
      '<div></div><div></div><div></div><div></div>'
    ];
    expect(generateDivTags(4)).toEqual(expected);
  });
  
  it('Test Case 5', () => {
    const expected = [
      '<div><div><div><div><div></div></div></div></div></div>',
      '<div><div><div><div></div><div></div></div></div></div>',
      '<div><div><div><div></div></div><div></div></div></div>',
      '<div><div><div><div></div></div></div><div></div></div>',
      '<div><div><div><div></div></div></div></div><div></div>',
      '<div><div><div></div><div><div></div></div></div></div>',
      '<div><div><div></div><div></div><div></div></div></div>',
      '<div><div><div></div><div></div></div><div></div></div>',
      '<div><div><div></div><div></div></div></div><div></div>',
      '<div><div><div></div></div><div><div></div></div></div>',
      '<div><div><div></div></div><div></div><div></div></div>',
      '<div><div><div></div></div><div></div></div><div></div>',
      '<div><div><div></div></div></div><div><div></div></div>',
      '<div><div><div></div></div></div><div></div><div></div>',
      '<div><div></div><div><div><div></div></div></div></div>',
      '<div><div></div><div><div></div><div></div></div></div>',
      '<div><div></div><div><div></div></div><div></div></div>',
      '<div><div></div><div><div></div></div></div><div></div>',
      '<div><div></div><div></div><div><div></div></div></div>',
      '<div><div></div><div></div><div></div><div></div></div>',
      '<div><div></div><div></div><div></div></div><div></div>',
      '<div><div></div><div></div></div><div><div></div></div>',
      '<div><div></div><div></div></div><div></div><div></div>',
      '<div><div></div></div><div><div><div></div></div></div>',
      '<div><div></div></div><div><div></div><div></div></div>',
      '<div><div></div></div><div><div></div></div><div></div>',
      '<div><div></div></div><div></div><div><div></div></div>',
      '<div><div></div></div><div></div><div></div><div></div>',
      '<div></div><div><div><div><div></div></div></div></div>',
      '<div></div><div><div><div></div><div></div></div></div>',
      '<div></div><div><div><div></div></div><div></div></div>',
      '<div></div><div><div><div></div></div></div><div></div>',
      '<div></div><div><div></div><div><div></div></div></div>',
      '<div></div><div><div></div><div></div><div></div></div>',
      '<div></div><div><div></div><div></div></div><div></div>',
      '<div></div><div><div></div></div><div><div></div></div>',
      '<div></div><div><div></div></div><div></div><div></div>',
      '<div></div><div></div><div><div><div></div></div></div>',
      '<div></div><div></div><div><div></div><div></div></div>',
      '<div></div><div></div><div><div></div></div><div></div>',
      '<div></div><div></div><div></div><div><div></div></div>',
      '<div></div><div></div><div></div><div></div><div></div>'
    ];
    expect(generateDivTags(5)).toEqual(expected);
  });
});