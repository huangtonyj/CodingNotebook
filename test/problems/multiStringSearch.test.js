const multiStringSearch = require('../../problems/multiStringSearch');

describe('multiStringSearch()', () => {
  it('Test Case #1', () => {
    expect(multiStringSearch('this is a big string', ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa']))
      .toEqual([true, false, true, true, false, true, false]);
  });

  it('Test Case #2', () => {    
    expect(multiStringSearch('Mary goes to the shopping center every week.', [
      'to',
      'Mary',
      'centers',
      'shop',
      'shopping',
      'string',
      'kappa',
    ])).toEqual([true, true, false, true, true, false, false]);
  });

  it('Test Case #3', () => {    
    expect(multiStringSearch('adcb akfkw afnmc fkadn vkaca jdaf dacb cdba cbda', [
      'abcd',
      'acbd',
      'adbc',
      'dabc',
      'cbda',
      'cabd',
      'cdab',
    ])).toEqual([false, false, false, false, true, false, false]);
  });

  it('Test Case #4', () => {    
    expect(multiStringSearch('test testing testings tests testers test-takers', [
      'tests',
      'testatk',
      'testiing',
      'trsatii',
      'test-taker',
      'test',
    ])).toEqual([true, false, false, false, true, true]);
  });

  it('Test Case #5', () => {    
    expect(multiStringSearch('ndbajwhfawkjljkfaopwdlaawjk dawkj awjkawkfjhkawk ahjwkjad jadfljawd', [
      'abc',
      'akwbc',
      'awbc',
      'abafac',
      'ajjfbc',
      'abac',
      'jadfl',
    ])).toEqual([false, false, false, false, false, false, true]);
  });

  it('Test Case #6', () => {    
    expect(multiStringSearch('Is this particular test going to pass or is it going to fail? That is the question.', [
      'that',
      'the',
      'questions',
      'goes',
      'mountain',
      'passes',
      'passed',
      'going',
      'is',
    ])).toEqual([false, true, false, false, false, false, false, true, true]);
  });

  it('Test Case #7', () => {    
    expect(multiStringSearch('Everything in this test should fail.', [
      'everything',
      'inn',
      'that',
      'testers',
      'shall',
      'failure',
    ])).toEqual([false, false, false, false, false, false]);
  });
});
