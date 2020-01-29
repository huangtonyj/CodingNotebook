const paranthesesCombo = require('../../problems/paranthesesCombo');

describe('paranthesesCombo()', () => {
  test('Test Case #1', () => {
    const expected = paranthesesCombo(1);
    const actual = [ '()' ];
    
    expect(expected.length).toEqual(actual.length);
    actual.forEach((el) => expect(expected).toContain(el));
  });

  test('Test Case #2', () => {
    const expected = paranthesesCombo(2);
    const actual = ['(())', '()()'];
    
    expect(expected.length).toEqual(actual.length);
    actual.forEach((el) => expect(expected).toContain(el));
  });

  test('Test Case #3', () => {
    const expected = paranthesesCombo(3);
    const actual = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    
    expect(expected.length).toEqual(actual.length);
    actual.forEach((el) => expect(expected).toContain(el));
  });

  test('Test Case #4', () => {
    const expected = paranthesesCombo(4);
    const actual = [
      '(((())))', '((()()))',
      '((())())', '((()))()',
      '(()(()))', '(()()())',
      '(()())()', '(())(())',
      '(())()()', '()((()))',
      '()(()())', '()(())()',
      '()()(())', '()()()()'
    ];
    
    expect(expected.length).toEqual(actual.length);
    actual.forEach((el) => expect(expected).toContain(el));
  });
});
